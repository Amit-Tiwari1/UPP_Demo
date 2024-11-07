"use client";
import ProgressBar from "@/components/progressbarforOTR";
import { Button, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import InfoIcon from "../../../assets/images/circle-info-solid.svg";
import { useState } from "react";

export default function Declaration() {
  const [isDeclarationCheckBox, setIsDeclarationCheckBox] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
 
  const totalSteps = 5;
  const currentStep = 5;
  const handleDeclarationCheckbox = () => {
    setIsDeclarationCheckBox(!isDeclarationCheckBox);
    if (errorMessage) setErrorMessage(""); 
  };

  const handleSaveAndNext = () => {
    if (!isDeclarationCheckBox) {
      setErrorMessage("Please check the declaration to proceed.");
    } else {
      console.log("Proceeding to the next step...");
    }
  };
  return (
    <div className="grid grid-cols-1 border-3 border-gray-200 border rounded-t-lg">
      
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
     
      
      <div className="flex items-center bg-green-600 text-white p-4 shadow-lg rounded-t-lg">
          <Image
            src={InfoIcon}
            width={45}
            height={45}
            alt="Info"
            className="mr-2"
          />
          <h1 className="text-3xl font-bold">Declaration घोषणा</h1>
        </div>
        <div className="border border-slate-300 rounded-sm px-4 md:px-8 py-6 md:py-10 bg-white">
          <h2 className="text-xl font-semibold mb-4">Declaration</h2>
          {/* <p className="text-sm mt-1">
            Clearly fill the form below. Fields marked with * are mandatory to
            fill:
          </p> */}
          {/* <p className="text-sm mt-1">
            नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें। * से बने फ़ील्ड को भरना
            अनिवार्य है:
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-full border border-gray-200 mx-auto mt-10 p-5 text-xs rounded-2xl">
            <div className="flex items-center">
              <h2 className="font-bold">Photograph</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="bg-gray-500 h-20 w-20 rounded-full flex items-center justify-center"></div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Full Name</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">XXXXXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Gender</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Male</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Father's Name</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">XXXXXXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Mother's Name</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">XXXXXXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Marital Status</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Single</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Are you domicile of Uttar Pradesh?</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Yes</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Reservation Category</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">General</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Email</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">test@police.com</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Mobile Number</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">12XXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">High School/10th or equivalent</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Yes</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Intermediate/12th or equivalent</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Yes</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Graduation or equivalent</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Yes</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Post-Graduation or equivalent</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">Yes</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Aadhaar Number</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">1234-XXXX-XXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Passport Number</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">MXXXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">Driving License</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">DL-XXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>

            <div className="flex items-center">
              <h2 className="font-bold">PAN Card Number</h2>
            </div>
            <div className="flex items-center">:</div>
            <div className="flex items-center">ABCXXXXXX</div>
            <div className="col-span-3">
              <hr />
            </div>
          </div>

          <div className="flex flex-col items-start mt-5 p-5">
            <div className="flex flex-row items-start mb-4">
              <div className="mr-2">
                <Checkbox onClick={handleDeclarationCheckbox}/>
              </div>
              <div>
                <p className="text-sm">
                  I affirm that the information I have provided in this form is
                  accurate and complete to the best of my knowledge. मैं पुष्टि
                  करता/करती हूँ कि मैंने इस फॉर्म में दी गई जानकारी मेरे ज्ञान
                  के अनुसार सही और पूर्ण है।
                </p>
              </div>
            </div>

            {/* <div className="flex flex-row items-start">
              <div className="mr-2">
                <Checkbox />
              </div>
              <div>
                <p className="text-sm">
                  I affirm that the information I have provided in this form is
                  accurate and complete to the best of my knowledge. मैं पुष्टि
                  करता/करती हूँ कि मैंने इस फॉर्म में दी गई जानकारी मेरे ज्ञान
                  के अनुसार सही और पूर्ण है।
                </p>
              </div>
            </div> */}
                {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <Button className="bg-black text-white rounded-lg">Back</Button>
            <Button
            className="bg-blue-600 text-white rounded-lg"
            onClick={handleSaveAndNext}
            // disabled={!isDeclarationCheckBox} 
          >
            Save & Next
          </Button>
          </div>
        </div>
      </div>
  
  );
}
