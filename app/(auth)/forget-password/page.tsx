"use client";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import captcha from "@/assets/images/image.png";
import { Button } from "@nextui-org/button";

type Props = {};

const ForgetPassword = (props: Props) => {
  return (
    <div className="login_wrapper flex flex-col">
      <div className="login_card w-full md:w-[600px] mx-auto border rounded-xl md:rounded-3xl overflow-hidden mb-12">
        <div className="py-3 md:py-5 px-4 md:px-10 bg-green-600 text-white">
          <h1 className="font-medium text-lg md:text-2xl">
            Create New Password
          </h1>
        </div>
        <div className="flex flex-col gap-8 px-4 md:px-6 py-8 bg-white">
          <div className="flex gap-3">
            <span className="material-symbols-rounded">info</span>
            <p className="text-slate-500 text-sm md:text-medium">
              Please create a new password before accessing your account for the
              first time. Choose a strong password to help keep your account
              secure.
            </p>
          </div>
          <Input
            type="text"
            label="New password"
            labelPlacement="outside"
            placeholder="Enter new password"
            radius="sm"
            variant="bordered"
            endContent={<span className="material-symbols-rounded">key</span>}
            isRequired
          />
          <Input
            type="text"
            label="Confirm new password"
            labelPlacement="outside"
            placeholder="Confirm new password"
            radius="sm"
            variant="bordered"
            endContent={<span className="material-symbols-rounded">key</span>}
            isRequired
          />

          <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <div className="w-[200px] h-[80px] border">
              <Image src={captcha} alt="img" className="object-contain" />
            </div>
            <Input
              type="text"
              placeholder="Enter captcha"
              radius="sm"
              variant="bordered"
              className="w-fit"
              isRequired
            />
          </div>

          <div className="border-t-1 pt-4 md:pt-8">
            <Button
              className="bg-black text-white font-medium w-full mx-auto"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
