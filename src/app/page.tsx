"use client";
import React, { use } from "react";
import { LoginButton, LogoutButton } from "@/components/AuthButton";
import IsLoggedin from "@/components/IsLoggedin";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="text-center">
        <p className="text-4xl font-bold">NextAuth + Google + Cognito</p>
        <br />
        <IsLoggedin />
        <LoginButton />
        <LogoutButton />
      </div>
      <div></div>
    </main>
  );
}
