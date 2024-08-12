"use client";

import { NextUIProvider } from "@nextui-org/react";
import Cursor from "./common/Cursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function Provider({ children }) {
  return (
    <>
      <NextUIProvider>
        <Cursor />
        {children}
        <ToastContainer
          position="bottom-right"
          className="pointer-events-none"
          toastClassName="bg-warning-900 bg-opacity-40 backdrop-blur-lg border border-warning-800 rounded-xl pointer-events-none"
          bodyClassName="text-neutral-300 text-sm"
          hideProgressBar
          icon={false}
          closeButton={false}
        />
      </NextUIProvider>
    </>
  );
}
