"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const SideNav = (Props: Props) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [links, setLinks] = useState([
    { title: "Dashboard", url: "/dashboard" },
    { title: "Event Settings", url: "/dashboard" },
    { title: "Requisition Release", url: "/dashboard" },
    {
      title: "Advertisement Release",
      url: "/superadmin/advertisement-release",
    },
    { title: "Candidate Application", url: "/dashboard" },
    { title: "Exam Center Allocation", url: "/dashboard" },
    { title: "Admit Card Release", url: "/dashboard" },
    { title: "Result Declaration", url: "/dashboard" },
    { title: "DVPST & PET", url: "/dashboard" },
  ]);

  const handleNavigation = (url: string, index: number) => {
    setActiveIndex(index);
    router.push(url);
  };

  return (
    <div
      className={`bg-white p-4 min-h-screen h-full shadow-md w-fit ${show && "min-w-[250px]"} sticky`}
      style={{ top: 0 }}
    >
      <div className="flex mb-4">
        <Button
          onClick={() => setShow(!show)}
          variant="light"
          className="p-0 min-w-fit aspect-square ms-auto"
        >
          <span className="material-symbols-rounded font-bold">
            {show
              ? "keyboard_double_arrow_left"
              : "keyboard_double_arrow_right"}
          </span>
        </Button>
      </div>

      {show && (
        <div className="flex flex-col">
          {links?.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleNavigation(item?.url, index)}
              variant="light"
              className={`min-w-full w-fit font-semibold justify-start ${activeIndex === index && "border border-slate-300 bg-gray-100"}`}
            >
              {activeIndex === index && (
                <span className="material-symbols-rounded">chevron_right</span>
              )}
              {item?.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNav;
