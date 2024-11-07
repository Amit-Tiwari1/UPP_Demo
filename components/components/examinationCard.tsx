import { Button } from "@nextui-org/button";
import React from "react";

type Props = {
  job: String;
  startDate: String;
  endDate: String;
};

const ExaminationCard = ({}: Props) => {
  return (
    <div className="border border-slate-200 font-medium p-5 rounded-3xl">
      <h6 className="text-sm mb-12">
        कम्प्यूटर ऑपरेटर ग्रेड-ए के पदों पर सीधी भर्ती-2023
      </h6>

      <p className="text-sm font-medium mb-6">
        <span>Application Start Date</span>
        <br />
        <span>05/09/2024</span>
      </p>

      <p className="text-sm font-medium">
        <span>Application End Date</span>
        <br />
        <span>14/10/2024 (up to 11:00 PM)</span>
      </p>

      <div className="flex justify-end mt-4">
        <Button className="bg-black text-white px-9 font-medium">Apply</Button>
      </div>
    </div>
  );
};

export default ExaminationCard;
