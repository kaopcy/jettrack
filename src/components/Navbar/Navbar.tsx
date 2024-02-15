import LoginButton from "@/components/Navbar/LoginButton";
import Icon from "@/libs/icon";

const Navbar = () => {
  return (
    <div className="flex h-[100px] items-center font-product">
      <h1 className="text-xl ">Question</h1>
      <div className="ml-auto">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
