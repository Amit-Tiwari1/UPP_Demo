"use client"
import Note from "@/components/Note";
import ProgressBar from "@/components/progressbarforOTR";
import styles from "@/styles/ProgressBar.module.css";
import { Input } from "@nextui-org/input";
import {
  Button,
  DatePicker,
  DateValue,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Personal_Details from "../../../assets/images/Personal_Details.svg";
import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CandidateRegistrationForm } from "@/config/Forms/Form";
import axios from "axios";
import useNotifications from "@/hooks/useNotifications";
import moment from "moment";

type Errors = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  gender?: string;
  dateOfBirth?: DateValue | null | string;
  fatherName?: string;
  fatherTitle?: string;
  motherTitle?: string;
  motherName?: string;
  maritalStatus?: string;
  domicile?: string;
  reservationCategory?: string;
  email?: string;
  emailOtp?: string;
  mobileNumber?: string;
  mobileOtp?: string;
};

export default function Registration() {
  const currentStep = 2;
  const totalSteps = 5;
  const isCompleted = false;
  const router = useRouter()

  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<DateValue | null>(null);
  const [dobErrorState, setDOBErrorState] = useState<string>("");

  const [fatherTitle, setFatherTitle] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [motherTitle, setMotherTitle] = useState("");
  const [motherName, setMotherName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [domicile, setDomicile] = useState<string>("");
  const [reservationCategory, setReservationCategory] = useState<string>("");
  const { notifySuccess, notifyError } = useNotifications();

  const [email, setEmail] = useState<string>("");
  const [emailOtp, setEmailOtp] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [mobileOtp, setMobileOtp] = useState<string>("");

  const [errors, setErrors] = useState<Errors>({});
  const [candidateRegistationFormData, setcandidateRegistationFormData] = useState<CandidateRegistrationForm>({
    firstName: "",
    middleName: "",
    lastName: "",
    fullName: "",
    gender: "",
    dateOfBirth: null,
    fatherTitle: "",
    fatherName: "",
    motherTitle: "",
    motherName: "",
    maritalStatus: "",
    domicile: "",
    reservationCategory: "",
    email: "",
  });


  useEffect(()=>{
    setFullName(`${firstName} ${middleName} ${lastName}`)
  },[firstName,middleName,lastName])

  const validateForm = (): boolean => {
    let formErrors: Errors = {};
    if (!firstName) formErrors.firstName = "First name is required.";
    if (!lastName) formErrors.lastName = "Last name is required.";
    if (!fullName) formErrors.fullName = "Full name is required.";
    if (!gender) formErrors.gender = "Gender is required.";
    const dobError = validateDateOfBirth(dateOfBirth);
    if (dobError) {
      setDOBErrorState(dobError);
    }

    if (!fatherTitle) formErrors.fatherTitle = "Title is required.";
    if (!fatherName) formErrors.fatherName = "Father's name is required.";
    if (!motherTitle) formErrors.motherTitle = "Title is required.";
    if (!motherName) formErrors.motherName = "Mother's name is required.";
    if (!maritalStatus) formErrors.maritalStatus = "Please select a valid marital status.";
    if (!domicile) formErrors.domicile = "Domicile selection is required.";
    if (!reservationCategory) {
      formErrors.reservationCategory = "Reservation Category is required.";
    }
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!emailOtp) formErrors.emailOtp = "Email OTP is required.";
    if (!mobileNumber) {
      formErrors.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      formErrors.mobileNumber = "Mobile number should be 10 digits.";
    }
    if (!mobileOtp) formErrors.mobileOtp = "Mobile OTP is required.";
    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const validateDateOfBirth = (date: DateValue | null): string | undefined => {
    console.log("date is coming form filed:- ", date);
    
    if (!date) {
      console.log("Date of Birth validation error: Date of Birth is required.");
      return "Date of Birth is required.";
    }

    const today = new Date();
    const selectedDate = new Date(date.year, date.month - 1, date.day);
    
    if (selectedDate > today) {
      
      return "Date of Birth cannot be in the future.";
    }

    const ageDiffMs = today.getTime() - selectedDate.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
      return "You must be at least 18 years old.";
    }

    return undefined;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      
      const formattedDateOfBirth = dateOfBirth
        ? `${dateOfBirth.year}-${String(dateOfBirth.month).padStart(2, '0')}-${String(dateOfBirth.day).padStart(2, '0')}`
        : null;
  
  
      const payload = {
        fullName,
        gender,
        dateOfBirth: formattedDateOfBirth,
        fatherTitle,
        fatherName,
        motherTitle,
        motherName,
        maritalStatus,
        domicile,
        reservationCategory,
        email,  
      };
  
      
 
  
      try {
        const token = localStorage.getItem("loginToken");
        
        if (!token) {
          notifyError("Authorization token not found.");
          return;
        }
  
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/personalDetails`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.data) {
          notifySuccess("Candidate basic details have been saved");
          router.push("education-qualification");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

 
  return (
    <div className="grid grid-cols-1 border-3 border-gray-200 border rounded-t-lg">
   
   <ProgressBar currentStep={currentStep} totalSteps={totalSteps} isCompleted={isCompleted}/>
        <div className="flex items-center bg-green-600 text-white p-4 shadow-lg rounded-t-lg">
          <Image
            src={Personal_Details}
            width={45}
            height={45}
            alt="Info"
            className="mr-2"
          />
          <h1 className="text-3xl font-bold">
            Personal Details व्यक्तिगत विवरण
          </h1>
        </div>
        <div className="border border-slate-300 rounded-sm px-4 md:px-8 py-6 md:py-10 bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Personal Details
          </h2>
          <p className="text-slate-500 text-sm md:text-md my-3 md:my-5">
            Clearly fill the form below. Fields marked with * are mandatory to
            fill:
          </p>
          <p className="text-slate-500 text-sm md:text-md">
            नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
            अनिवार्य है:
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-12 pt-8 gap-5 md:gap-8">
              <div className="relative">
                <Input
                  type="text"
                  label="First Name (पहला नाम)"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  isRequired
                  placeholder="Enter you first name "
                  value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <Input
  type="text"
  label="Middle Name (मध्य नाम)"
  labelPlacement="outside"
  variant="bordered"
  radius="sm"
  placeholder="Enter your middle name (optional)"
  value={middleName}
  onChange={(e: ChangeEvent<HTMLInputElement>) => setMiddleName(e.target.value)}
/>

              <div className="relative">
                <Input
                  type="text"
                  label="Last Name (अंतिम नाम)"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  isRequired
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.lastName}
                  </span>
                )}
              </div>

              <div className="md:col-span-3">
                <Note
                  note={
                    "Make sure your full name is as per High School/Matriculation Certificate. सुनिश्चित करें कि आपका पूरा नाम हाई स्कूल/मैट्रिकुलेशन प्रमाणपत्र के अनुसार है।"
                  }
                />
              </div>
              <div className="md:col-span-3 mt-5 md:mt-0 relative">
                <Input
                  type="text"
                  label="Full Name (As entered by you). पूरा नाम (जैसा कि आपने दर्ज किया है)"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  placeholder="Enter you full name"
                  isRequired
                  value={fullName}
                readOnly
                className="bg-gray-200 text-gray-500 cursor-not-allowed rounded-sm"
                />
              
              </div>
              <div className="md:col-span-3 mt-5 md:mt-0 relative">
                <Select
                  items={[
                    {
                      value: "1",
                      name: "Male",
                    },
                    {
                      value: "2",
                      name: "Female",
                    },
                    {
                      value: "3",
                      name: "Other",
                    },
                  ]}
                  label="Gender.लिंग"
                  labelPlacement="outside"
                  placeholder="Select"
                  isRequired
                  variant="bordered"
                  radius="sm"
                  className="md:col-span-3 text-red-600"
                  value={gender}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setGender(e.target.value)
                  }
                >
                  {(option: any) => (
                    <SelectItem key={option?.value}>{option?.name}</SelectItem>
                  )}
                </Select>
                {errors.gender && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.gender}
                  </span>
                )}
              </div>

              <div className="md:col-span-3 mt-5 md:mt-0 relative">
                <DatePicker
                  className="md:col-span-3"
                  label="Date of Birth (As Per High School/Matriculation Certificate). जन्मतिथि (हाई स्कूल/मैट्रिकुलेशन प्रमाणपत्र के अनुसार)"
                  labelPlacement="outside"
                  radius="sm"
                  variant="bordered"
                  showMonthAndYearPickers
                  isRequired
                  value={dateOfBirth}
                  onChange={(date: DateValue | null) => setDateOfBirth(date)}
                />

                {dobErrorState && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {dobErrorState}
                  </span>
                )}
              </div>

              <div className="md:col-span-3">
                <label className="required">Father’s name. पिता का नाम</label>
                <div className="grid md:grid-cols-6 gap-4 mt-1">
                  <div className="relative">
                    <Select
                      items={[
                        { value: "1", name: "Mr" },
                        { value: "2", name: "Shri" },
                        { value: "3", name: "Md" },
                        { value: "4", name: "Other" },
                      ]}
                      placeholder="Select title"
                      variant="bordered"
                      radius="sm"
                      value={fatherTitle}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setFatherTitle(e.target.value)
                      }
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                    {errors.fatherTitle && (
                      <span className="text-red-500 text-sm absolute -bottom-5">
                        {errors.fatherTitle}
                      </span>
                    )}
                  </div>

                  <div className="relative md:col-span-5">
                    <Input
                      type="text"
                      variant="bordered"
                      endContent={
                        <span className="material-symbols-rounded">person</span>
                      }
                      radius="sm"
                      placeholder="Enter father’s name"
                      value={fatherName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFatherName(e.target.value)
                      }
                    />
                    {errors.fatherName && (
                      <span className="text-red-500 text-sm absolute -bottom-5">
                        {errors.fatherName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="required">Mother’s name. माता का नाम</label>
                <div className="grid md:grid-cols-6 gap-4 mt-1">
                  <div className="relative">
                    <Select
                      items={[
                        { value: "1", name: "Ms" },
                        { value: "2", name: "Mrs" },
                        { value: "3", name: "Other" },
                      ]}
                      placeholder="Select title"
                      variant="bordered"
                      radius="sm"
                      value={motherTitle}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setMotherTitle(e.target.value)
                      }
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                    {errors.motherTitle && (
                      <span className="text-red-500 text-sm absolute -bottom-5">
                        {errors.motherTitle}
                      </span>
                    )}
                  </div>
                  <div className="relative md:col-span-5">
                    <Input
                      type="text"
                      variant="bordered"
                      endContent={
                        <span className="material-symbols-rounded">person</span>
                      }
                      radius="sm"
                      placeholder="Enter mother’s name"
                      isRequired
                      value={motherName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setMotherName(e.target.value)
                      }
                    />
                    {errors.motherName && (
                      <span className="text-red-500 text-sm absolute -bottom-5">
                        {errors.motherName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative md:col-span-3">
                <Select
                  items={[
                    {
                      value: "1",
                      name: "Married",
                    },
                    {
                      value: "2",
                      name: "Unmarried",
                    },
                  ]}
                  label="Marital Status. वैवाहिक स्थिति."
                  labelPlacement="outside"
                  placeholder="Select"
                  isRequired
                  variant="bordered"
                  radius="sm"
                  className="md:col-span-3"
                  value={maritalStatus}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setMaritalStatus(e.target.value)
                  }
                >
                  {(option: any) => (
                    <SelectItem key={option?.value}>{option?.name}</SelectItem>
                  )}
                </Select>
                {errors.maritalStatus && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.maritalStatus}
                  </span>
                )}
              </div>
              <div className="relative md:col-span-3">
                <Select
                  items={[
                    { value: "1", name: "Yes" },
                    { value: "2", name: "No" },
                  ]}
                  label="Are you domicile of Uttar Pradesh? क्या आप उत्तर प्रदेश के मूल निवासी हैं?"
                  labelPlacement="outside"
                  placeholder="Select"
                  isRequired
                  variant="bordered"
                  radius="sm"
                  className="md:col-span-3"
                  value={domicile}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setDomicile(e.target.value)
                  }
                >
                  {(option: any) => (
                    <SelectItem key={option?.value}>{option?.name}</SelectItem>
                  )}
                </Select>
                {errors.domicile && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.domicile}
                  </span>
                )}
              </div>
              <div className="relative md:col-span-3">
                <Select
                  items={[
                    { value: "1", name: "Yes" },
                    { value: "2", name: "No" },
                  ]}
                  label="Reservation Category. आरक्षण श्रेणी"
                  labelPlacement="outside"
                  placeholder="Select"
                  isRequired
                  variant="bordered"
                  radius="sm"
                  className="md:col-span-3"
                  value={reservationCategory}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setReservationCategory(e.target.value)
                  }
                >
                  {(option: any) => (
                    <SelectItem key={option?.value}>{option?.name}</SelectItem>
                  )}
                </Select>
                {errors.reservationCategory && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.reservationCategory}
                  </span>
                )}
              </div>

              <div className="relative col-span-2">
                <Input
                  type="text"
                  label="Email. ईमेल"
                  labelPlacement="outside"
                  variant="bordered"
                  endContent={
                    <span className="material-symbols-rounded">mail</span>
                  }
                  radius="sm"
                  placeholder="Enter email-ID"
                  isRequired
                  className="md:col-span-2"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                {errors.email && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.email}
                  </span>
                )}
              </div>

              <Button className="bg-black text-white mt-auto">
                Generate Email OTP
              </Button>

              <div className="relative col-span-2">
                <Input
                  type="text"
                  label="Email OTP. ईमेल ओटीपी"
                  labelPlacement="outside"
                  variant="bordered"
                  endContent={
                    <span className="material-symbols-rounded">tag</span>
                  }
                  radius="sm"
                  placeholder="Enter email OTP"
                  isRequired
                  className="md:col-span-2"
                  value={emailOtp}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmailOtp(e.target.value)
                  }
                />
                {errors.emailOtp && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.emailOtp}
                  </span>
                )}
              </div>
              <Button className="bg-black text-white mt-auto">
                Verify Email OTP
              </Button>
              <div className="relative col-span-2">
                <Input
                  type="text"
                  label="Mobile number. मोबाइल नंबर"
                  labelPlacement="outside"
                  variant="bordered"
                  endContent={
                    <span className="material-symbols-rounded">
                      phone_iphone
                    </span>
                  }
                  radius="sm"
                  placeholder="Enter Mobile number"
                  isRequired
                  className="md:col-span-2"
                  value={mobileNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setMobileNumber(e.target.value)
                  }
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.mobileNumber}
                  </span>
                )}
              </div>
              <Button className="bg-black text-white mt-auto">
                Generate Mobile OTP
              </Button>
              <div className="relative col-span-2">
                <Input
                  type="text"
                  label="Mobile OTP. मोबाइल ओटीपी"
                  labelPlacement="outside"
                  variant="bordered"
                  endContent={
                    <span className="material-symbols-rounded">tag</span>
                  }
                  radius="sm"
                  placeholder="Enter mobile OTP"
                  isRequired
                  className="md:col-span-2"
                  value={mobileOtp}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setMobileOtp(e.target.value)
                  }
                />
                {errors.mobileOtp && (
                  <span className="text-red-500 text-sm absolute -bottom-5">
                    {errors.mobileOtp}
                  </span>
                )}
              </div>
              <Button className="bg-black text-white mt-auto">
                Verify Mobile OTP
              </Button>
            </div>

            <Link href={"/verification"}>
              <Button
                className="bg-black text-white w-full mt-10"
                onClick={handleSubmit}
              >
                Save and Next
              </Button>
            </Link>
          </form>
        </div>
      </div>
  
  );
}
