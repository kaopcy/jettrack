import CarImage from "../_section/CarImage";
import HistoryLog from "../_section/HistoryLog";
import LicenseImage from "../_section/LicenseImage";
import SearchEventLog from "../_section/SearchEventLog";

const RealTimeDashBoardPage = () => {
  return (
    <div className="flex h-full w-full gap-x-2">
      <div className="flex h-full w-full flex-col gap-y-2">
        <SearchEventLog />
        <HistoryLog />
      </div>
      <div className="flex w-full flex-col gap-y-2 ">
        <CarImage />
        <LicenseImage />
      </div>
    </div>
  );
};

export default RealTimeDashBoardPage;
