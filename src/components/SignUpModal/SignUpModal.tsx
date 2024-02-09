"use client";

import dynamic from "next/dynamic";

import SignUpModalWrapper from "@/components/SignUpModal/SignUpModalWrapper";

const Loading = () => {
  return <div className="">loading</div>;
};

const SignUpModalContent = dynamic(() => import("@/components/SignUpModal/SignUpModalContent"), {
  loading: () => <Loading />,
});

const SignUpModal = () => {
  return (
    <SignUpModalWrapper>
      <div className="rounded-xl bg-background-medium p-8   md:px-14 md:py-14">
        <SignUpModalContent />
      </div>
    </SignUpModalWrapper>
  );
};

export default SignUpModal;
