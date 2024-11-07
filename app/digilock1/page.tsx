"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import useNotifications from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";

const DigilockerResponsePage = () => {
  const { notifySuccess, notifyError } = useNotifications();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const getParamsFromURL = new URLSearchParams(window.location.search);
      const code = getParamsFromURL.get("code");

      if (code) {
        const loginDigiLocker = async () => {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/digilocker/login?code=${code}`,
              {}
            );

            if (response.data.token && response.data.data.sessionId) {
              localStorage.setItem("sessionId", response.data.data.sessionId);
              localStorage.setItem("loginToken", response.data.token);

              notifySuccess("Login successful!");
              router.push("https://upp-demo-1lij4ip3q-tech-amits-projects.vercel.app/proceed");
            } else {
              notifyError(`Login failed: ${response.data.message}`);
            }
          } catch (error) {
            console.error("Error details:", error);
            notifyError("Error: Something went wrong");
          } finally {
            setIsLoading(false);
          }
        };

        loginDigiLocker();
      } else {
        notifyError("Missing code.");
        setIsLoading(false);
      }
    }
  }, [isClient, notifySuccess, notifyError, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="text-center">
          <ClipLoader size={50} color="#4A90E2" loading={isLoading} />
          <p className="mt-4 text-lg font-semibold">Login</p>
        </div>
      ) : null}
    </div>
  );
};

export default DigilockerResponsePage;
