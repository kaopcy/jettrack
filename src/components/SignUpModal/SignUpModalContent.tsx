import GoogleSignInButton from "@/components/SignUpModal/form/GoogleSignInButton";
import UsernamePasswordForm from "@/components/SignUpModal/form/UsernamePasswordForm";

const SignUpModalContent = () => {
  return (
    <div className="flex flex-col font-mono">
      <h2 className="mb-3 text-2xl font-semibold">Log In</h2>
      <div>
        <span>By continuing, you agree to our</span>{" "}
        <a href="" className="text-blue-500 hover:underline">
          User Agreement
        </a>{" "}
        <span>and acknowledge that you understand the</span>{" "}
        <a href="" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
      </div>
      <div className="flex w-full flex-col gap-3 py-6">
        <GoogleSignInButton />
      </div>
      <div className="flex w-full items-center">
        <div className="h-[1px] w-full bg-text-3"></div>
        <span className="px-2 text-text-3">OR</span>
        <div className="h-[1px] w-full bg-text-3"></div>
      </div>
      <div className="flex w-full flex-col gap-3 py-6">
        <UsernamePasswordForm />
      </div>
    </div>
  );
};

export default SignUpModalContent;
