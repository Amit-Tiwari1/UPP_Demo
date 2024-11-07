import React from 'react';
import Image from 'next/image';
import AcceptIcon from '../assets/images/accept-icon copy.svg';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, isCompleted }) => {
  return (
    <div className="w-full my-4 p-4">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompletedStep = stepNumber <= currentStep || (isCompleted && stepNumber === totalSteps);

          return (
            <div key={stepNumber} className="flex items-center w-full">
              {stepNumber > 1 && (
                <div
                  className={`h-1 flex-grow ${currentStep >= stepNumber ? 'bg-green-500' : 'bg-gray-300'}`}
                ></div>
              )}

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                  ${isCompletedStep ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                {isCompletedStep && stepNumber <= currentStep ? (
                  <Image src={AcceptIcon} alt="Completed" className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </div>

              {stepNumber < totalSteps && (
                <div
                  className={`h-1 flex-grow ${currentStep > stepNumber ? 'bg-green-500' : 'bg-gray-300'}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* <p className="text-center mt-2">Step {currentStep} of {totalSteps}</p> */}
    </div>
  );
};

export default ProgressBar;
