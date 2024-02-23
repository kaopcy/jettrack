import DetailsCard from "./_section/DetailsCard";
import IpWithStatus from "./_section/IpWithStatus";
import LatestEvent from "./_section/LastestEvent";
import RealTimeCarImage from "./_section/RealTimeCarImage";
import RealTimeLicenseImage from "./_section/RealTimeLicenseImage";

const RealTimeDashBoardPage = () => {
  return (
    <div className="flex h-full w-full gap-2">
      <div className="flex h-full w-full flex-col gap-2">
        <IpWithStatus />
        <RealTimeCarImage />
        <div className="flex w-full gap-2">
          <RealTimeLicenseImage />
          <DetailsCard />
        </div>
      </div>
      <div className="w-full">
        <LatestEvent />
      </div>
    </div>
  );
};

export default RealTimeDashBoardPage;
