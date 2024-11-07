import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full flex items-center justify-center py-12 bg-black text-white">
      <div className="flex justify-between w-full max-w-7xl">
        <div className="flex gap-[100px]">
          <div className="flex flex-col gap-3">
            <h6>Information</h6>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Support</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h6>Company</h6>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Media</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h6>Policy</h6>
            <Link href={"#"}>Copyright Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Term and Conditions</Link>
          </div>
        </div>
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
