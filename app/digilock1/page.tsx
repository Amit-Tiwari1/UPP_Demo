"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useNotifications from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";

const DigilockerResponsePage = () => {
  const { notifySuccess, notifyError } = useNotifications();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const getParamsFromURL = new URLSearchParams(window.location.search);
      const code = getParamsFromURL.get("code");
      console.log("code is getting ", code);

      if (code) {
        const loginDigiLocker = async () => {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}user/registration/digilocker/login?code=${code}`,
              {}
            );
            console.log("response is getting from DigiLocker", response.data);

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
            setIsLoading(false); // Stop loading after request is complete
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
    <div>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
};

export default DigilockerResponsePage;
