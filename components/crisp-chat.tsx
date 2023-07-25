"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("17c46b05-8ca6-4b3d-9881-05f75fe025e6");
  }, []);

  return null;
}