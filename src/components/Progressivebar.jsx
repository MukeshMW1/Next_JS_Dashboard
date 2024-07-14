import React from "react";
import { Progress } from "@nextui-org/react";

export  function Progressivebar() {
  return (
    <div className='mt-[150px]'>
    <Progress
      size="sm"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label="Storage"
      value={65}
      showValueLabel={true}
    />
    <h2 className='mt-[5px]'>9.2GB of 10GB used</h2>
    </div>
  );
}
