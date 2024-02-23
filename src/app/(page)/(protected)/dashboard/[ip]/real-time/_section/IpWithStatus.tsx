"use client";

import { useParams, useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useRef } from "react";

import Card from "@/components/Card";
import { routes } from "@/configs/routes.config";

const IpWithStatus = () => {
  const { ip } = useParams<{ ip: string }>();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const input = inputRef.current?.value;

    if (input && input.length > 0) {
      router.push(routes.dashBoard.ip(input).realTime);
    }
  };

  return (
    <Card className="shrink-0px-6 w-full py-4">
      <form onSubmit={onSubmit} className="flex w-full items-center justify-between ">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold ">Insert URL</h1>
          <div className="flex">
            <input ref={inputRef} type="text" defaultValue={ip} className="rounded-l-md bg-[#d9d9d999] px-4 py-1.5" />
            <button type="submit" className="rounded-r-md bg-primary px-3 py-1 font-bold text-white">
              Connect
            </button>
          </div>
        </div>

        <span className="font-bold">
          Status: <span className="text-green-500">Connected</span>
        </span>
      </form>
    </Card>
  );
};

export default IpWithStatus;
