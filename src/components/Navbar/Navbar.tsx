import LoginButton from "@/components/Navbar/LoginButton";
import Icon from "@/libs/icon";

const Navbar = () => {
  return (
    <div className="flex h-[100px] items-center font-mono">
      <Icon className="mr-4 h-8 w-8" icon="tabler:message-2-question" />
      <h1 className="text-2xl font-semibold">QUESTION</h1>
      <div className="ml-auto">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
