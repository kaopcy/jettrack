import TextInput from "@/app/(page)/(protected)/dashboard/history/_section/SearchEventLog/TextInput";
import Card from "@/components/Card";

const HistoryConfiguration = () => {
  return (
    <Card className="flex h-fit w-full flex-col items-start p-2 pb-6">
      <h1 className="ml-4 mt-4  text-2xl font-bold">History Configuration</h1>
      <div className="my-4 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-y-4 px-4">
        <h2 className="text-xl font-bold">Export Image Quality</h2>
        <div className="flex w-full items-end gap-x-4">
          <div className="flex w-full max-w-[60%] flex-col gap-2">
            <TextInput
              labelClassName="font-medium"
              icon="material-symbols:arrow-drop-down-rounded"
              iconClassName="w-6 h-6"
              containerClassName="w-full max-w-none"
              label="Export to"
            />
            <div className="flex w-full justify-between">
              <TextInput
                labelClassName="font-medium"
                icon="material-symbols:arrow-drop-down-rounded"
                iconClassName="w-6 h-6"
                containerClassName="max-w-[130px]"
                label="Image Size"
              />
              <TextInput
                labelClassName="font-medium"
                icon="material-symbols:arrow-drop-down-rounded"
                iconClassName="w-6 h-6"
                containerClassName="max-w-[130px]"
                label="Image Format"
              />
            </div>
          </div>
          <button className="rounded-md bg-[#1D3557] px-4 py-1 font-bold text-white hover:bg-[#111c2c]">Apply</button>
        </div>
      </div>
      <div className="my-4 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Events</h2>
        <div className="flex w-full  gap-4 ">
          <div className="flex w-full max-w-[60%] items-end justify-between gap-x-4">
            <TextInput
              labelClassName="font-medium"
              icon="material-symbols:arrow-drop-down-rounded"
              iconClassName="w-6 h-6"
              containerClassName="max-w-[130px]"
              label="Save events"
            />
            <TextInput
              labelClassName="font-medium"
              icon="material-symbols:arrow-drop-down-rounded"
              iconClassName="w-6 h-6"
              containerClassName="max-w-[130px]"
              label="Delete"
            />
          </div>
          <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-bold text-white hover:bg-[#111c2c]">
            Apply
          </button>
        </div>
      </div>
    </Card>
  );
};

export default HistoryConfiguration;
