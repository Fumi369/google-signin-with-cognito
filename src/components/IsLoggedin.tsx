"use client";
import { useSession } from "next-auth/react";
import React from "react";
export default function isLoggedIn() {
  const { data: session } = useSession();

  if (!session) {
    return <p>未ログインです。</p>;
  }

  return (
    <div>
      {session.user ? (
        <div>
          ログイン済みです。
          <p>Email: {session.user.email}</p>
          <p>Name：{session.user.name}</p>
          {session.user.image && <img src={session.user.image} alt="" />}
        </div>
      ) : (
        "読み込み中..."
      )}
    </div>
  );
}
