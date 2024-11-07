"use client";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import captcha from "@/assets/images/image.png";
import digilockerImage from "@/assets/images/DigiLocker Button.svg";
import { Button } from "@nextui-org/button";
import useNotifications from "../hooks/useNotifications";

type Props = {};

const Home = (props: Props) => {
  const [selectedRole, setSelectedRole] = useState("candidate");
  const [sessionId, setSessionId] = useState("");
  const [adminLoginId, setAdminLoginId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const { notifySuccess, notifyError } = useNotifications();

  useEffect(() => {
    const createSession = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/createSession`
        );
        const newSessionId = response.data.data.sessionId;
        
        localStorage.setItem("sessionId",newSessionId)
        setSessionId(newSessionId)
        // notifySuccess("Session created successfully!");
      } catch (error) {
        console.error("Error creating session:", error);
        notifyError(`Failed to create session: ${error}`);
      }
    };

    createSession();
  }, []);

  const handleDigiLockerLogin = () => {
    if (selectedRole === "candidate") {
      if (!sessionId) {
        notifyError("Session ID is not available. Please try again.");
        return;
      }

      const digilockerUrl = process.env.NEXT_PUBLIC_DIGILOCKER_BASE_URL?.replace(
        "{{sessionId}}",
        sessionId
      );
console.log("digilockerUrl is getting",digilockerUrl);

      if (!digilockerUrl) {
        console.error("DigiLocker URL is undefined.");
        notifyError("DigiLocker URL is undefined.");
        return;
      }

      window.location.href = digilockerUrl;
    } else {
      console.log("DigiLocker login attempted without a valid session or selected role is not candidate.");
    }
  };

  const handleAdminLogin = async () => {
    console.log("Admin login attempted with ID:", adminLoginId);
    console.log("Admin login attempted with password:", adminPassword);
    try {
      // Uncomment and modify this line when API endpoint is ready
      // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}admin/login`, {
      //   loginId: adminLoginId,
      //   password: adminPassword
      // });
      console.log("Admin login successful:");
      notifySuccess("Admin login successful");
    } catch (error) {
      console.error("Error during admin login:", error);
      notifyError(`Error during admin login: ${error}`);
    }
  };

  const handleRoleChange = (role: string) => setSelectedRole(role);

  return (
    <div className="login_wrapper flex flex-col">
      <div className="login_card w-full md:w-[600px] mx-auto border rounded-xl md:rounded-3xl overflow-hidden mb-12">
        <div className="py-3 md:py-5 px-4 md:px-10 bg-green-600 text-white">
          <h1 className="font-medium text-lg md:text-2xl">Login</h1>
        </div>
        <div className="h-5 w-full mt-10 flex items-center justify-evenly pt-4 pb-4">
          {["candidate", "admin"].map((role) => (
            <button
              key={role}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleRoleChange(role)}
              type="button"
            >
              <p className={`text-lg font-medium ${selectedRole === role ? "text-green-600" : "text-black"}`}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </p>
              {selectedRole === role && <hr className="w-40 border-t-2 border-green-600 mt-1" />}
            </button>
          ))}
        </div>
        <div className="px-4 md:px-6 py-8 bg-white">
          {selectedRole === "admin" ? (
            <>
              <Input
                type="text"
                label="Login ID"
                labelPlacement="outside"
                placeholder="Enter login ID"
                radius="sm"
                variant="bordered"
                className="mb-5 md:mb-5"
                endContent={<span className="material-symbols-rounded">person</span>}
                value={adminLoginId}
                onChange={(e) => setAdminLoginId(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Password"
                labelPlacement="outside"
                placeholder="Enter password"
                radius="sm"
                variant="bordered"
                className="mb-5"
                endContent={<span className="material-symbols-rounded">key</span>}
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <Link className="text-green-600 font-semibold" href={"/forget-password"}>
                  Forgot Password
                </Link>
              </div>
              <div className="flex justify-center mt-4">
                <Button className="bg-black text-white font-medium w-full" size="lg" onClick={handleAdminLogin}>
                  Login
                </Button>
              </div>
              <hr className="border-t border-gray-300 my-4" />
            </>
          ) : (
            <>
              <div className="flex justify-center my-8" onClick={handleDigiLockerLogin}>
                <Image src={digilockerImage} alt="DigiLocker Login" width={200} height={60} className="object-contain cursor-pointer" />
              </div>
              <div className="flex border-t-1 border-b-1 py-4 md:py-8">
                <Button className="bg-black text-white font-medium w-full" size="lg" onClick={handleDigiLockerLogin}>
                  Login through DigiLocker
                </Button>
              </div>
            </>
          )}

          <div className="flex justify-center items-center flex-col md:flex-row my-6 gap-4">
            <div className="w-[200px] h-[80px] border">
              <Image src={captcha} alt="Captcha" className="object-contain" />
            </div>
            <Input type="text" placeholder="Enter captcha" radius="sm" variant="bordered" className="w-fit" required />
          </div>
          <hr className="border-t border-gray-300 my-4" />

          <p className="font-semibold text-center mt-10">
            {selectedRole === "candidate" ? (
              <>
                Candidates can only log in through DigiLocker. If you don't have an account, please create one there first.
                <br />
                अभ्यर्थी केवल डिजीलॉकर के माध्यम से लॉग इन कर सकते हैं। यदि आपके पास कोई खाता नहीं है, तो कृपया पहले डिजीलॉकर पर अपना खाता बनाएं।
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link className="text-green-600" href="#">
                  New Registration
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
