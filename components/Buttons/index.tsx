"use client";
import React from "react";
import { useQuizConfig } from "@/store";

export default function Button() {
  const changeStatus = useQuizConfig((state:any) => state.changeStatus);
const handleStart = () => {
  changeStatus("start")
}
  return (
    <>
      <button
        onClick={handleStart}
        type="button"
        className="m-auto text-lg font-medium text-gray-300 bg-black rounded-xl shadow-lg hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-700 py-4 px-10 w-2/3"

        >
        Start Quiz Now.
      </button>
    </>
  );
}
