import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-full w-full items-center justify-center">
      <div className="flex flex-1 flex-col gap-5 p-4 items-center justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-14 min-w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Loading;
