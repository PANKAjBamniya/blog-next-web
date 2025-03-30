"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.log("Error component mounted");
  }, [error]);
  return (
    <div className="flex items-center justify-center p-20">
      <h1 className="text-red-500 text-3xl">404 Error</h1>
    </div>
  );
}
