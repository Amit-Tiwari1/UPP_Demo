"use client";
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
} from "@nextui-org/react";

export default function page() {
  return (
    <div className="registration_form_wrapper lg:mx-[150px]">
      <div className="border border-slate-300 rounded-3xl px-8 py-10 mb-8 bg-white">
        <h1 className="font-semibold text-3xl">Upload Documents</h1>
        <p className="text-slate-500 my-5">
          Clearly fill the form below. Fields marked with * are mandatory to
          fill:
        </p>
        <p className="text-slate-500">
          नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
          अनिवार्य है:
        </p>

        <form action="">
          <div className="mt-6 pt-8">
            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Upload Photograph फ़ोटोग्राफ़ अपलोड करें"
                title={
                  <p className="text-xl font-semibold">
                    Upload Photograph फ़ोटोग्राफ़ अपलोड करें
                  </p>
                }
              >
                <div className="grid grid-cols-3 gap-5 py-8">
                  <div className="Col border border-slate-200 bg-slate-100 rounded-3xl px-12 py-6 flex flex-col justify-center items-center">
                    <span className="material-symbols-rounded cam_icon">
                      photo_camera
                    </span>
                    <p>Click here to upload</p>
                  </div>
                  <div className="col-span-2 text-slate-500">
                    <h6 className="font-semibold mb-2">
                      Instructions for Capturing a Live Photo लाइव फोटो खींचने
                      के निर्देश
                    </h6>
                    <ol className="text-sm list-decimal ms-5">
                      <li>
                        Find a location with sufficient lighting. Natural light
                        is ideal. पर्याप्त प्रकाश वाला स्थान खोजें प्राकृतिक
                        प्रकाश आदर्श है।
                      </li>
                      <li>
                        Select a plain white background to ensure you stand out.
                        यह सुनिश्चित करने के लिए कि आप अलग दिखें, एक सादे सफ़ेद
                        पृष्ठभूमि का चयन करें।
                      </li>
                      <li>
                        Make sure your face is centred in the frame and takes up
                        about 70-80% of the photo. सुनिश्चित करें कि आपका चेहरा
                        फ़्रेम के बीच में है और फ़ोटो का लगभग 70-80% हिस्सा लेता
                        हो।
                      </li>
                    </ol>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Upload Signature हस्ताक्षर अपलोड करें"
                title={
                  <p className="text-xl font-semibold">
                    Upload Signature हस्ताक्षर अपलोड करें
                  </p>
                }
              >
                <div className="grid grid-cols-3 gap-5 py-8">
                  <div className="Col border border-slate-200 bg-slate-100 rounded-3xl px-12 py-6 flex flex-col justify-center items-center">
                    <span className="material-symbols-rounded cam_icon">
                      photo_camera
                    </span>
                    <p>Click here to upload</p>
                  </div>
                  <div className="col-span-2 text-slate-500">
                    <h6 className="font-semibold mb-2">
                      Instructions for Capturing a Signature. हस्ताक्षर लेने के
                      निर्देश
                    </h6>
                    <ol className="text-sm list-decimal ms-5">
                      <li>
                        Use a plain white sheet of paper. सादे सफ़ेद कागज का
                        उपयोग करें।
                      </li>
                      <li>
                        Sign with a black or blue pen for clarity. स्पष्टता के
                        लिए काले या नीले पेन का उपयोग करें।
                      </li>
                      <li>
                        Ensure your signature is centred and occupies about
                        70-80% of the page. सुनिश्चित करें कि आपका हस्ताक्षर
                        पृष्ठ के बीच में हो और पृष्ठ का लगभग 70-80% हिस्सा घेरे।
                      </li>
                      <li>
                        Take the photo in a well-lit area, avoiding shadows on
                        the paper. अच्छी रोशनी वाले स्थान में फोटो लें, कागज पर
                        छाया से बचें।
                      </li>
                      <li>
                        Hold the camera directly above the signature, keeping
                        the entire signature visible. कैमरे को सीधे हस्ताक्षर के
                        ऊपर रखें और सुनिश्चित करें कि पूरा हस्ताक्षर दिखाई दे।
                      </li>
                    </ol>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>

            <div>
              <div className="grid grid-cols-2 bg-green-600 text-white px-4 py-3 rounded-t-xl">
                <p>Document name</p>
                <p>File name</p>
              </div>
              <div className="flex flex-col gap-8 mt-8">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>Category certificate or EWS certificate as applicable</p>
                    <p>
                      श्रेणी प्रमाण पत्र या ईडब्ल्यूएस प्रमाण पत्र जैसा लागू हो
                    </p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>10TH / SSC / Other Equivalent Mark-sheet Certificate</p>
                    <p>10वीं / एसएससी / अन्य समकक्ष अंकपत्र प्रमाणपत्र</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>12TH / HSC / Other Equivalent Mark-sheet Certificate</p>
                    <p>12वीं / एचएससी / अन्य समकक्ष अंकपत्र प्रमाणपत्र</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>Graduation Certificate</p>
                    <p>स्नातक स्तर का प्रमाणपत्र</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>Post-Graduation Certificate</p>
                    <p>स्नातकोत्तर स्तर का प्रमाणपत्र</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>Domicile Certificate</p>
                    <p>मूल निवास प्रमाणपत्र</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>PGDCA Certificate</p>
                    <p>PGDCA Certificate</p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                  <div className="Col md:text-sm">
                    <p>
                      O level certificate in computer from DOEACC or NIELIT
                      Society / DOEACC or NIELIT
                    </p>
                    <p>
                      DOEACC या NIELIT सोसायटी / DOEACC या NIELIT से कंप्यूटर
                      में O लेवल प्रमाणपत्र
                    </p>
                  </div>
                  <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
                    <Button
                      variant="bordered"
                      className="text-slate-500 rounded-md"
                    >
                      Select file
                      <span className="material-symbols-rounded ms-12">
                        upload_file
                      </span>
                    </Button>
                    <span>or</span>
                    <Button className="bg-black text-white">
                      Upload by digilocker
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="bg-black text-white w-full mt-10">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
