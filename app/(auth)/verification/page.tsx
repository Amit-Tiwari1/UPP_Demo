"use client";
import DigiUpload from "@/components/DigiUpload";
import Note from "@/components/Note";
import ProgressBar from "@/components/progressbarforOTR";
import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  DatePicker,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Verification from "../../../assets/images/Verification.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  const [panCardNumber, setPanCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [panData, setPanData] = useState(null);
  const [drivingLicenseData, setDrivingLicenseData] = useState(null);
  const [drivingLicenseNumber, setDrivingLicenseNumber] = useState("");

  const [drivingIssuingAuthority, setDrivingIssuingAuthority] = useState("");
  const [drivingPlaceOfIssue, setDrivingPlaceOfIssue] = useState("");
  const [drivingDateOfIssue, setdrivingDateOfIssue] = useState("");

  const router = useRouter();
  const totalSteps = 5;
  const currentStep = 4;
  const isCompleted = false;

  useEffect(() => {
    const getLoginToken = localStorage.getItem("loginToken");
    if (getLoginToken) {
      const fetchDigiLockerData = async () => {
        try {
          const panCardResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/digilocker/pan`,
            {
              headers: {
                Authorization: `Bearer ${getLoginToken}`,
              },
            },
          );
          setPanData(panCardResponse.data);
          if (panCardResponse.data && panCardResponse.data.data.panCardNumber) {
            setPanCardNumber(panCardResponse.data.data.panCardNumber);
          }

          const drivingLicenseResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/digilocker/drivingLicense`,
            {
              headers: {
                Authorization: `Bearer ${getLoginToken}`,
              },
            },
          );

          if (drivingLicenseResponse.data && drivingLicenseResponse.data.data) {
            setDrivingLicenseData(drivingLicenseResponse.data);
            setDrivingLicenseNumber(
              drivingLicenseResponse.data.data.drivingLicenseNumber,
            );
            setDrivingIssuingAuthority(
              drivingLicenseResponse.data.data.drivingIssuingAuthority,
            );
            setDrivingPlaceOfIssue(
              drivingLicenseResponse.data.data.drivingPlaceOfIssue,
            );
            setdrivingDateOfIssue(
              drivingLicenseResponse.data.data.drivingDateOfIssue,
            );
          }
        } catch (error) {
          console.log("Error fetching DigiLocker data:", error);
        }
      };

      fetchDigiLockerData();
    }
  }, []);

  const handleSaveAndNext = () => {
    if (
      !aadhaarNumber &&
      !passportNumber &&
      !drivingLicenseNumber &&
      !panCardNumber
    ) {
      setErrorMessage("Please provide at least one government ID to proceed.");
    } else {
      setErrorMessage("");
      router.push("/declaration");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 border-3 border-gray-200 border rounded-t-lg">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} isCompleted={isCompleted}/>

        <div className="flex items-center bg-green-600 text-white p-4 shadow-lg rounded-t-lg">
          <Image
            src={Verification}
            width={45}
            height={45}
            alt="Info"
            className="mr-2"
          />
          <h2 className="text-3xl font-bold">Verification सत्यापन</h2>
        </div>
        <div className="border border-slate-300 rounded-sm px-4 md:px-8 py-6 md:py-10 bg-white">
          <h2 className="text-xl font-semibold mb-4">Verification</h2>
          <p className="text-slate-500 text-sm md:text-md my-3 md:my-5">
            Clearly fill the form below. Fields marked with * are mandatory to
            fill:
          </p>
          <p className="text-slate-500 text-sm md:text-md">
            नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
            अनिवार्य है:
          </p>

          <form action="">
            <div className="md:mt-6 pt-8">
              <Accordion selectionMode="multiple" className="px-0">
                <AccordionItem
                  key="2"
                  aria-label="Upload Photograph फ़ोटोग्राफ़ अपलोड करें"
                  title={
                    <p className="md:text-xl font-semibold">
                      Upload Photograph फ़ोटोग्राफ़ अपलोड करें
                    </p>
                  }
                >
                  <div className="grid grid-cols-3 gap-5 py-8">
                    <div className="col-span-3 md:col-span-1 border border-slate-200 bg-slate-100 rounded-3xl px-12 py-6 flex flex-col justify-center items-center">
                      <span className="material-symbols-rounded cam_icon">
                        photo_camera
                      </span>
                      <p>Click here to upload</p>
                    </div>
                    <div className="col-span-3 md:col-span-2 text-slate-500">
                      <h6 className="font-semibold mb-2">
                        Instructions for Capturing a Live Photo लाइव फोटो खींचने
                        के निर्देश
                      </h6>
                      <ol className="text-sm list-decimal ms-5">
                        <li>
                          Find a location with sufficient lighting. Natural
                          light is ideal. पर्याप्त प्रकाश वाला स्थान खोजें
                          प्राकृतिक प्रकाश आदर्श है।
                        </li>
                        <li>
                          Select a plain white background to ensure you stand
                          out. यह सुनिश्चित करने के लि-ए कि आप अलग दिखें, एक
                          सादे सफ़ेद पृष्ठभूमि का चयन करें।
                        </li>
                        <li>
                          Make sure your face is centred in the frame and takes
                          up about 70-80% of the photo. सुनिश्चित करें कि आपका
                          चेहरा फ़्रेम के बीच में है और फ़ोटो का लगभग 70-80%
                          हिस्सा लेता हो।
                        </li>
                      </ol>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Aadhaar Verification आधार सत्यापन"
                  title={
                    <p className="md:text-xl font-semibold">
                      Aadhaar Verification आधार सत्यापन
                    </p>
                  }
                >
                  <div className="i_agree">
                    <Checkbox>
                      <p className="text-slate-500 text-sm md:text-medium">
                        I, holder of Aadhaar number mentioned below, hereby
                        voluntarily give my consent to UPPRPB to use my Aadhaar
                        number/VID number and my aadhaar details to authenticate
                        me with UIDAI as per Aadhaar Act, 2016 and all other
                        applicable laws. मैं, नीचे उल्लिखित आधार संख्या का धारक,
                        एतद्द्वारा UPPRPB को आधार अधिनियम, 2016 और अन्य सभी लागू
                        कानूनों के अनुसार UIDAI के साथ मुझे प्रमाणित करने के लिए
                        मेरे आधार नंबर/वीआईडी नंबर और मेरे आधार विवरण का उपयोग
                        करने के लिए स्वेच्छा से अपनी सहमति देता हूं.
                      </p>
                    </Checkbox>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-8 mt-8">
                    <Input
                      type="text"
                      label="Aadhaar number. आधार संख्या"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="XXXX XXXX XXXX"
                      isRequired
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                    />
                    <Button
                      onPress={onOpen}
                      className="font-medium bg-black text-white mt-auto"
                    >
                      Verify Aadhar. आधार सत्यापित करें
                    </Button>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-col gap-8">
              <div className="i_agree my-3">
                <Checkbox>
                  <p className="text-slate-500 text-sm md:text-medium">
                    I want to proceed with the registration process without
                    Aadhar verification and I understand that High
                    school/Matriculation certificate details entered by me will
                    be used for further verification. मैं आधार सत्यापन के बिना
                    पंजीकरण प्रक्रिया को आगे बढ़ाना चाहता हूं और मैं समझता हूं
                    कि मेरे द्वारा दर्ज किए गए हाई स्कूल/मैट्रिकुलेशन सर्टिफिकेट
                    विवरण का उपयोग आगे के सत्यापन के लिए किया जाएगा।
                  </p>
                </Checkbox>
              </div>

              <Note
                note={
                  "As you have completed the process without Aadhaar verification, please provide the details of one of the IDs mentioned below. चूंकि आपने आधार सत्यापन के बिना प्रक्रिया पूरी की है, कृपया नीचे उल्लिखित आईडी में से किसी एक का विवरण प्रदान करें।"
                }
              />

              {/* <Input
                type="text"
                label="Passport number. पासपोर्ट नंबर"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter passport number"
                isRequired
                endContent={
                  <span className="material-symbols-rounded">credit_card</span>
                }
                onChange={(e) => setPassportNumber(e.target.value)}
              />

              <DigiUpload
                documentEng={"Passport’s front page"}
                documentHindi={"पासपोर्ट का मुख पृष्ठ"}
              /> */}
            </div>

            <p className="text-center font-medium my-12">or</p>

            <div className="flex flex-col gap-8">
              <Input
                type="text"
                label="Driving License number (ड्राइविंग लाइसेंस नंबर)"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter driving licence number"
                isRequired
                value={drivingLicenseNumber}
                endContent={
                  <span className="material-symbols-rounded">credit_card</span>
                }
                onChange={(e) => setDrivingLicenseNumber(e.target.value)}
              />
              <Input
                type="text"
                label="Issuing Authority. जारी करने वाला प्राधिकारी"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter Issuing Authority"
                isRequired
                value={drivingIssuingAuthority}
                endContent={
                  <span className="material-symbols-rounded">edit</span>
                }
                onChange={(e) => setPanCardNumber(e.target.value)}
              />
              <Input
                type="text"
                label="Place of issue. जारी करने का स्थान"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter Issuing Place"
                isRequired
                value={drivingPlaceOfIssue}
                endContent={
                  <span className="material-symbols-rounded">edit</span>
                }
              />
               <Input
                type="text"
                label="Place of issue. जारी करने का स्थान"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter Issuing Place"
                isRequired
                value={drivingDateOfIssue}
                
                endContent={
                  <span className="material-symbols-rounded">edit</span>
                }
              />
              {/* <DatePicker
                className="col-span-3"
                label="Date of issue"
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                isRequired
                value={drivingDateOfIssue}
              /> */}

              <DigiUpload
                documentEng={"Driving License"}
                documentHindi={"ड्राइविंग लाइसेंस"}
              />
            </div>

            <p className="text-center font-medium my-12">or</p>

            <div className="flex flex-col gap-8">
              <Input
                type="text"
                label="PAN card number. पैन कार्ड नंबर"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                placeholder="Enter PAN card number"
                isRequired
                value={panCardNumber}
                readOnly
                endContent={
                  <span className="material-symbols-rounded">credit_card</span>
                }
              />
              {/* <DigiUpload
                documentEng={"PAN card"}
                documentHindi={"पैन कार्ड"}
              /> */}
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-5">{errorMessage}</p>
            )}
            <Button
              className="bg-black text-white w-full mt-10"
              onClick={handleSaveAndNext}
            >
              Save and Next
            </Button>
          </form>
        </div>
      </div>

      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-8">
                <div className="grid grid-cols-8 gap-4 items-center">
                  <p className="col-span-2 font-medium">
                    Photograph. फोटोग्राफ
                  </p>
                  <div className="col-span-3">
                    <div className="px-3 py-2 bg-violet-800 text-white text-xs rounded-t-xl text-center">
                      Details filled by you. आपके द्वारा भरा गया विवरण
                    </div>
                    <div className="flex justify-center">
                      <div className="profile w-[120px] h-[120px] rounded-full bg-gray-300 my-3 "></div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="px-3 py-2 bg-green-600 text-white text-xs rounded-t-xl text-center">
                      Details filled by you. आपके द्वारा भरा गया विवरण
                    </div>
                    <div className="flex justify-center">
                      <div className="profile w-[120px] h-[120px] rounded-full bg-gray-300 my-3 "></div>
                    </div>
                  </div>

                  <p className="col-span-2 font-medium">Full name. पूरा नाम</p>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>

                  <p className="col-span-2 font-medium">
                    Date of birth. जन्मतिथि
                  </p>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>

                  <p className="col-span-2 font-medium">Gender. लिंग</p>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="bordered"
                      radius="sm"
                      placeholder=" "
                    />
                  </div>

                  <Button variant="bordered" className="col-span-8 my-6">
                    Proceed with registration. पंजीकरण के लिए आगे बढ़ें
                  </Button>

                  <p className="col-span-8 text-red-500 font-medium">
                    The details filled by you are not matching with your Aadhaar
                    data. You may update your Aadhaar and register later. आपके
                    द्वारा भरी गई जानकारी आपके आधार डेटा से मेल नहीं खा रही है।
                    आप अपना आधार अपडेट कर सकते हैं और बाद में पंजीकरण कर सकते
                    हैं।
                  </p>

                  <Button variant="bordered" className="col-span-4">
                    Register Later. बाद में पंजीकरण करें
                  </Button>
                  <Button variant="bordered" className="col-span-4">
                    Continue the registration. पंजीकरण जारी रखें
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
