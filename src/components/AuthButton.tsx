"use client";
import Cognito from "next-auth/providers/cognito";
import { signIn, signOut } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("cognito")}
      className="mt-4 bg-blue-500 hover:bg-blue-300 active:scale-90 transition-all duration-200 text-white py-2 px-4 rounded-full mx-auto"
    >
      Googleでログイン
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="mt-4 bg-red-500 hover:bg-red-300 active:scale-90 transition-all duration-200 text-white py-2 px-4 rounded-full mx-auto"
      onClick={() => signOut()}
    >
      ログアウト
    </button>
  );
};
