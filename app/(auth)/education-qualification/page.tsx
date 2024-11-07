"use client";
import DigiUpload from "@/components/DigiUpload";
import ProgressBar from "@/components/progressbarforOTR";
import { Input } from "@nextui-org/input";
import Educational_Qualification from "../../../assets/images/Educational_Qualification.svg";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  DatePicker,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import { CandidateEducationQualificationForm } from "@/config/Forms/Form";

export default function page() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [isTenthEquivalent, setIsTenthEquivalent] = useState(false);
  const [isIntermediateEquivalent, setisIntermediateEquivalent] = useState(false);
  const [educationForm , setEducationForm] = useState<CandidateEducationQualificationForm>({
    tenthDetails: {
      isEquivalent: false,
      boardName: "",
      rollNumber: "",
      certificateNumber: "",
      yearOfPassing: "",
      percentage: undefined,
      CGPA: undefined,
      subjects: [],
    },
    twelfthDetails: {
      isEquivalent: false,
      boardName: "",
      rollNumber: "",
      certificateNumber: "",
      yearOfPassing: "",
      percentage: undefined,
      CGPA: undefined,
      subjects: [],
    },
    graduationDetails: {
      isEquivalent: false,
      boardName: "",
      rollNumber: "",
      certificateNumber: "",
      yearOfPassing: "",
      percentage: undefined,
      CGPA: undefined,
      subjects: [],
    },
    postGraduationDetails: {
      isEquivalent: false,
      boardName: "",
      rollNumber: "",
      certificateNumber: "",
      yearOfPassing: "",
      percentage: undefined,
      CGPA: undefined,
      subjects: [],
    },
  })

  const handleBoardChange = (e: any) => {
    setSelectedBoard(e.target.value);
  };

  const handle10thCheckboxChange = () => {
    setIsTenthEquivalent(!isTenthEquivalent);
  };

  const handle12thCheckboxChange = ()=> {
    setisIntermediateEquivalent(!isIntermediateEquivalent)
  }
  const handleTenthDetailsChange = (field:any, value:any) => {
    setEducationForm(prevForm => ({
      ...prevForm,
      tenthDetails: {
        ...prevForm.tenthDetails,
        [field]: value,
      },
    }));
  };
  const handleTwelfthDetailsChange = (field:any, value:any) => {
    setEducationForm(prevForm => ({
      ...prevForm,
      twelfthDetails: {
        ...prevForm.twelfthDetails,
        [field]: value,
      },
    }));
  };

  // const handleUploadByDigiLocker = async () => {
  //   try {
  //     // Assume fetchDigiLockerData is a function to call DigiLocker's API
  //     const data = await fetchDigiLockerData();
  
  //     // Automatically populate form with DigiLocker data
  //     setEducationForm({
  //       ...educationForm,
  //       tenthDetails: data.tenthDetails || educationForm.tenthDetails,
  //       twelfthDetails: data.twelfthDetails || educationForm.twelfthDetails,
  //       graduationDetails: data.graduationDetails || educationForm.graduationDetails,
  //       postGraduationDetails: data.postGraduationDetails || educationForm.postGraduationDetails,
  //     });
  
  //     // Set DigiLocker data loaded flag
  //     setIsDigiLockerDataLoaded(true);
  //   } catch (error) {
  //     console.error("Error uploading from DigiLocker:", error);
  //   }
  // };
  
  
  const totalSteps = 5;
  const currentStep = 3;
  const isCompleted = false;

  return (
    <div className="grid grid-cols-1 border-3 border-gray-200 border rounded-t-lg">
     
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} isCompleted={isCompleted}/>
      
      
   
   <div className="flex items-center bg-green-600 text-white p-4 shadow-lg rounded-t-lg">
        <Image src={Educational_Qualification} width={45} height={45} alt="Info" className="mr-2" />
          <h1 className="text-3xl font-bold">Educational Qualification शैक्षणिक योग्यता</h1>
        </div>
   <div className="border border-slate-300 rounded-sm px-4 md:px-8 py-6 md:py-10 bg-white">
        <h2 className="text-xl font-semibold mb-4">
          Educational Qualification
        </h2>
        <p className="text-slate-500 my-5">
          Clearly fill the form below. Fields marked with * are mandatory to
          fill:
        </p>
        <p className="text-slate-500">
          नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
          अनिवार्य है:
        </p>

        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-8 pt-8 gap-5 md:gap-8">
            <Accordion selectionMode="multiple" className="col-span-2">
              {/* 10t according section start */}
              <AccordionItem
                key="1"
                aria-label="High School/10th हाई स्कूल/10वीं"
                title={
                  <p className="text-xl font-semibold">
                  {isTenthEquivalent ? "10th Equivalent 10वीं समतुल्य" : "High School/10th हाई स्कूल/10वीं"}
                </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                <Checkbox
                    className="md:col-span-2"
                    onChange={handle10thCheckboxChange}
                  >
                    In case of 10th equivalent please select this checkbox. यदि 10वीं के समकक्ष हो तो कृपया इस चेकबॉक्स का चयन करें।
                  </Checkbox>
                  <div className="grid grid-cols-1">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "UP Board",
                        },
                        {
                          value: "2",
                          name: "CBSE Board",
                        },
                        {
                          value: "3",
                          name: "ICSC",
                        },
                        {
                          value: "4",
                          name: "Other",
                        },
                      ]}
                      label="Board Name"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <Button className="bg-black text-white mt-5" onClick={()=> window.open(`${process.env.NEXT_PUBLIC_DIGILOCKER_BASE_URL}`)}>
                    Upload by digilocker
                  </Button>
                </div>
                <div className="grid grid-cols-1">
                  <Select
                    items={[
                      {
                        value: "1",
                        name: "1",
                      },
                      {
                        value: "2",
                        name: "2",
                      },
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="Subjects"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Input
                    type="text"
                    label="Year of passing"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />

                  <Input
                    type="text"
                    label="Marks in percentage / CGPA"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />

                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Certificate number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                </div>
              </AccordionItem>
              {/* 12 accordionItem section start */}

              <AccordionItem
                key="2"
                aria-label="12th Equivalent 12वीं समतुल्य"
                title={
                  <p className="text-xl font-semibold">
                    {isIntermediateEquivalent ? "12th Equivalent 12वीं समतुल्य" : "Intermediate/12th इंटरमीडिएट/12वीं"}
                  </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2" onChange={handle12thCheckboxChange} >
                    In case of 12th equivalent please select this box. यदि 12वीं
                    के समकक्ष हो तो कृपया इस चेकबॉक्स का चयन करें।।
                  </Checkbox>

                  <div className="col-span-2">
                    <Select
                      items={[
                        { value: "1", name: "UP Board" },
                        { value: "2", name: "CBSE Board" },
                        { value: "3", name: "ICSC Board" },
                        { value: "4", name: "Other Board" },
                      ]}
                      label="Board Name"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      onChange={handleBoardChange}
                      value={selectedBoard}
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value} value={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="col-span-2">
                    {selectedBoard === "4" && (
                      <div className="mt-5">
                        <Input
                          type="text"
                          label="Other Board Name"
                          labelPlacement="outside"
                          variant="bordered"
                          radius="sm"
                          placeholder="Enter your board name"
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-span-2">
                    <DigiUpload
                      documentEng="12TH / HSC / Other Equivalent Mark-sheet Certificate"
                      documentHindi="12वीं / एचएससी / अन्य समकक्ष अंकपत्र प्रमाणपत्र"
                    />
                  </div>
                  <div className="col-span-2">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Subjects"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <Select
                    items={[
                      { value: "1", name: "1" },
                      { value: "2", name: "2" },
                      { value: "3", name: "3" },
                    ]}
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>

                  <Input
                    type="text"
                    label="Marks in percentage / CGPA"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />

                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />

                  <Input
                    type="text"
                    label="Certificate number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                </div>
              </AccordionItem>

              {/* Graduation section start */}
              <AccordionItem
                key="3"
                aria-label="Graduation स्नातक"
                title={
                  <p className="text-xl font-semibold">Graduation स्नातक</p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    In case of Graduation equivalent please select this
                    checkbox. यदि स्नातक के समकक्ष हो तो कृपया इस चेकबॉक्स का
                    चयन करें।
                  </Checkbox>
                  <Input
                    type="text"
                    label="Board/ University/ Institution name"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                    isRequired
                  />
                  <Button className="bg-black text-white mt-5" onClick={()=>window.open(`${process.env.NEXT_PUBLIC_DIGILOCKER_BASE_URL}`)}>
                    Upload by digilocker
                  </Button>
                  <div className="col-span-2">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Subjects"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <Select
                    items={[
                      {
                        value: "1",
                        name: "1",
                      },
                      {
                        value: "2",
                        name: "2",
                      },
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage / CGPA"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Marks in percentage / CGPA "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter your role no "
                  />
                  <Input
                    type="text"
                    label="Certificate number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder="Enter certificate number "
                  />
                  {/* <div className="col-span-2">
                    <DigiUpload
                      documentEng={"Graduation Certificate"}
                      documentHindi={"स्नातक स्तर का प्रमाणपत्र"}
                    />
                  </div> */}
                </div>
              </AccordionItem>

              {/* Post graduation section start */}
              <AccordionItem
                key="4"
                aria-label="Post-Graduation स्नातकोत्तर"
                title={
                  <p className="text-xl font-semibold">
                    Post-Graduation स्नातकोत्तर
                  </p>
                }
              >
                <div className="grid grid-cols-2 gap-8 my-8">
                  <Checkbox className="md:col-span-2">
                    In case of Post-Graduation equivalent please select this
                    checkbox. यदि स्नातकोत्तर के समकक्ष हो तो कृपया इस चेकबॉक्स
                    का चयन करें।
                  </Checkbox>

                  <div className="col-span-2">
                    <Select
                      items={[
                        { value: "1", name: "UP Board" },
                        { value: "2", name: "CBSE Board" },
                        { value: "3", name: "ICSC Board" },
                        { value: "4", name: "Other Board" },
                      ]}
                      label="Board Name"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      onChange={handleBoardChange}
                      value={selectedBoard}
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value} value={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="col-span-2">
                    {selectedBoard === "4" && (
                      <div className="mt-5">
                        <Input
                          type="text"
                          label="Other Board Name"
                          labelPlacement="outside"
                          variant="bordered"
                          radius="sm"
                          placeholder="Enter your board name"
                        />
                      </div>
                    )}
                    <div className="col-span-2">
                      <DigiUpload
                        documentEng={"Post-Graduation Certificate"}
                        documentHindi={"स्नातकोत्तर स्तर का प्रमाणपत्र"}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="text"
                      label="Field of study"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>
                  <Select
                    items={[
                      {
                        value: "1",
                        name: "1",
                      },
                      {
                        value: "2",
                        name: "2",
                      },
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="Year of passing"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    label="Marks in percentage/CGPA"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Roll number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />
                  <Input
                    type="text"
                    label="Certificate number"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="sm"
                    placeholder=" "
                  />

                  <Button variant="bordered" className="col-span-2">
                    Add additional educational qualification. अथिरिक्त शैक्षिक
                    योग्यता जोंडे
                  </Button>
                </div>
              </AccordionItem>
              
            </Accordion>
          </div>

          <div className="flex justify-between gap-5 mt-10">
            <Button
              type="submit"
              variant="bordered"
              className="w-full max-w-[300px]"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-black text-white w-full max-w-[300px]"
            >
              Save & Next
            </Button>
          </div>
        </form>
      </div>

   </div>
  );
}
