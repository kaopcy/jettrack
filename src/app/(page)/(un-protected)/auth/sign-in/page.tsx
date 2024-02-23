import Image from "next/image";

import SigninSection from "./_section/SigninSection";

const SignIn = () => {
  return (
    <div className="flex h-full w-full font-google text-[#575757]">
      <div className="relative h-full  w-full">
        <Image alt="signin" src="/images/signin-image.jfif" fill className="object-cover" />
      </div>

      <div className="flex w-full max-w-[500px] shrink-0 flex-col items-center justify-center gap-10  bg-[#284B63] px-2">
        <div className="relative mr-3">
          <Image width={250} height={50} alt="icon" className="h-auto" src="/images/icon.svg" />
        </div>
        <SigninSection />
      </div>
    </div>
  );
};

export default SignIn;
