"use client";

import { NextUIProvider } from "@nextui-org/react";
import Cursor from "./Cursor";

export default function Provider({ children }) {
  return (
    <>
      <NextUIProvider>
        <Cursor />
        {children}
      </NextUIProvider>
    </>
  );
}
