"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useNotifications from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";  // Import the useRouter hook for navigation

const DigilockerResponsePage = () => {
  const { notifySuccess, notifyError } = useNotifications();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();  // Initialize the router

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
              // Save token and sessionId to localStorage
              localStorage.setItem("sessionId", response.data.data.sessionId);
              localStorage.setItem("loginToken", response.data.token);

              notifySuccess("Login successful!");


              if (localStorage.getItem("loginToken")) {
                router.push("http://localhost:3000/proceed");
              }
            } else {
              notifyError(`Login failed: ${response.data.message}`);
            }
          } catch (error) {
            console.error("Error details:", error);
            notifyError("Error: Something went wrong");
          }
        };

        loginDigiLocker();
      } else {
        notifyError("Missing code.");
      }
    }
  }, [isClient, notifySuccess, notifyError, router]);

  return <h1>hello</h1>;
};

export default DigilockerResponsePage;
