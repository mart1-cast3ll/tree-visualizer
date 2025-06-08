"use client";

import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <div className="inline-block">
        <Link href="/">
          <div className="flex items-center">
            <h1 className="mr-5 inline-block border-r border-black/30 pr-6 align-top text-2xl font-medium leading-[49px] dark:border-white/30">
              ERROR
            </h1>
            <div className="inline-block text-left">
              <h2 className="text-sm font-normal leading-[24px]">
                Oops - Something went wrong.
              </h2>
              <h2 className="text-sm font-normal leading-[24px]">
                There was an error processing your request.
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
