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
          <p>ID：{session.user.id}</p>
          <p>ユーザー名：{session.user?.name}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>アイコン：</span>
            {session.user?.image && (
              <img
                src={session.user?.image}
                alt=""
                style={{ marginLeft: "8px" }}
              />
            )}
          </div>
        </div>
      ) : (
        "読み込み中..."
      )}
    </div>
  );
}
