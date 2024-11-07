"use client";
import ApplicationCard from "@/components/applicationCard";
import ExaminationCard from "@/components/examinationCard";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/react";
import React from "react";

type Props = {};

const data = [
  {
    job: "कम्प्यूटर ऑपरेटर ग्रेड-ए के पदों पर सीधी भर्ती-2023",
    startDate: "05/09/2024",
    endDate: "14/10/2024 (up to 11:00 PM)",
  },
  {
    job: "कम्प्यूटर ऑपरेटर ग्रेड-ए के पदों पर सीधी भर्ती-2023",
    startDate: "05/09/2024",
    endDate: "14/10/2024 (up to 11:00 PM)",
  },
];

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-9">
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center gap-6">
          <div className="profile w-[120px] h-[120px] rounded-full bg-gray-300 my-3 "></div>

          <div className="fw-medium font-bold flex flex-col gap-2">
            <p>Mr. Manish Sharma</p>
            <p>
              DOB: <span>01/01/2000</span>
            </p>
            <p>
              Phone: <span>9721XXXX00</span>
            </p>
            <p>
              Email: <span>abc@gmail.com</span>
            </p>
            <p>
              Aadhaar Verified: <span>yes</span>
            </p>
          </div>

          <Button variant="bordered" className="px-16 py-5 mt-6">
            View Profile
          </Button>
        </div>

        <div className="col-span-2">
          <div className="bg-white p-8 rounded-3xl grid grid-cols-2 gap-5 mb-9">
            <Button
              radius="full"
              size="lg"
              className="font-semibold text-white"
              style={{
                background: "linear-gradient(180deg, #007BFF 0%, #0063CC 100%)",
              }}
            >
              Admit Card
            </Button>
            <Button
              radius="full"
              size="lg"
              className="font-semibold text-white"
              style={{
                background: "linear-gradient(180deg, #6C5CE7 0%, #4D41A4 100%)",
              }}
            >
              <span className="material-symbols-rounded">view_quilt</span> Admit
              Result
            </Button>
          </div>

          <div className="bg-white p-8 rounded-3xl mb-9">
            <h1 className="text-2xl font-semibold mb-4">Examinations</h1>
            <div className="grid grid-cols-2 gap-8">
              {data.map((item, index) => (
                <ExaminationCard
                  key={index}
                  job={item?.job}
                  startDate={item?.startDate}
                  endDate={item.endDate}
                />
              ))}
            </div>

            <div className="pagination flex justify-end mt-5">
              <Pagination
                showControls
                size="lg"
                total={3}
                initialPage={1}
                radius="full"
                classNames={{
                  cursor: "bg-white text-black",
                }}
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h1 className="text-2xl font-semibold mb-4">My Applications</h1>
            <div className="grid grid-cols-2 gap-8">
              {data.map((item, index) => (
                <ApplicationCard
                  key={index}
                  job={item?.job}
                  startDate={item?.startDate}
                  endDate={item.endDate}
                />
              ))}
            </div>

            <div className="pagination flex justify-end mt-5">
              <Pagination
                showControls
                size="lg"
                total={3}
                initialPage={1}
                radius="full"
                classNames={{
                  cursor: "bg-white text-black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
