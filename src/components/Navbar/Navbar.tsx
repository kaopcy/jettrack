import LoginButton from "@/components/Navbar/LoginButton";
import Icon from "@/libs/icon";

const Navbar = () => {
  return (
    <div className="flex h-[100px] items-center font-google">
      <h1 className="font-google text-xl font-medium">Question</h1>
      <div className="ml-auto">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
