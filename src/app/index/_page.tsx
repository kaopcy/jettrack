import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="font-product flex w-full  gap-4 text-xl">
      <div className="flex flex-col items-start gap-2">
        <div className="bg-gradient-to-r from-[#4a82ee]  via-[#b06cab] to-[#d46477] bg-clip-text py-4">
          <span className=" text-[56px] font-bold text-transparent">สวัสดี คุณ Kao</span>
        </div>
        <div className="mx-auto text-[56px] font-bold text-[#444746]">วันนี้มีอะไรให้ช่วยบ้าง</div>
      </div>
    </div>
  );
};

export default Home;
