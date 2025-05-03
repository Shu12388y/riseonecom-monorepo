"use client";
import { useState, useEffect } from "react";

export const useSession = () => {
  const [userid, setUserId] = useState("");

  useEffect(() => {
    const uuid = window.sessionStorage.getItem("userid");
    if (uuid) {
      setUserId(uuid);
    }
  }, []);

  return { userid };
};
