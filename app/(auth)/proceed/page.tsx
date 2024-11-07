"use client";
import React, { useState } from "react";
import ProgressBar from "@/components/progressbarforOTR";
import Note from "@/components/Note";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import PersonalDetailsIcon from "../../../assets/images/Personal_Details.svg";
import EducationalQualificationIcon from "../../../assets/images/Educational_Qualification.svg";
import VerificationIcon from "../../../assets/images/Verification.svg";
import DeclarationIcon from "../../../assets/images/Declaration.svg";
import InfoIcon from "../../../assets/images/circle-info-solid.svg";
import faqData from "@/components/Data/faqData";

const totalSteps = 5;
const currentStep = 1;
const isCompleted = false;

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [instructions] = useState([
    {
      note: "Candidate must register in DIGI-locker...",
    },
    {
      note: "अभ्यर्थी को स्वयं को DIGI-लॉकर...",
    },
    {
      note: "Candidates are advised to have good quality Web-Cam...",
    },
    {
      note: "उम्मीदवारों को सलाह दी जाती है...",
    },
    {
      note: "Candidates are advised to exercise utmost care...",
    },
    {
      note: "अभ्यर्थी को पंजीकरण फॉर्म भरते समय...",
    },
  ]);

  const registrationLink = "/registration";

  return (
    <div className="grid grid-cols-1 border-3 border-gray-200 border rounded-t-lg">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        isCompleted={isCompleted}
      />

      <div className="flex items-cente bg-green-600 text-white p-4 shadow-lg rounded-t-lg">
        <Image
          src={InfoIcon}
          width={45}
          height={45}
          alt="Info"
          className="mr-2"
        />
        <h1 className="text-3xl font-bold">New candidate registration</h1>
      </div>
      <div className="border border-slate-300 rounded-sm px-4 md:px-8 py-6 md:py-10 bg-white">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <div className="flex flex-col gap-6">
          {instructions.map((item, index) => (
            <Note note={item.note} key={index} />
          ))}
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Steps for One Time Registration
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
            <Image
              src={PersonalDetailsIcon}
              width={50}
              height={50}
              alt="Personal Details"
            />
            <p className="mt-2">Personal Details</p>
            <p>व्यक्तिगत विवरण</p>
          </div>
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
            <Image
              src={EducationalQualificationIcon}
              width={50}
              height={50}
              alt="Education"
            />
            <p className="mt-2">Educational Qualification</p>
            <p>शैक्षणिक योग्यता</p>
          </div>
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
            <Image
              src={VerificationIcon}
              width={50}
              height={50}
              alt="Verification"
            />
            <p className="mt-2">Verification</p>
            <p>सत्यापन</p>
          </div>
          <div className="border border-gray-200 bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
            <Image
              src={DeclarationIcon}
              width={50}
              height={50}
              alt="Declaration"
            />
            <p className="mt-2">Declaration</p>
            <p>घोषणा</p>
          </div>
        </div>

        {/* Registration button */}
        <Link href={registrationLink}>
          <Button className="bg-black text-white w-full my-8">
            Proceed with Registration
          </Button>
        </Link>

        {/* FAQ Section */}
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <Accordion variant="bordered" className="border">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={`Question - ${index + 1}`}
              title={`Question - ${index + 1}`}
            >
              <strong>{faq.question}</strong>
              <div>
                <strong>Answer:- </strong> {faq.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default RegistrationPage;
