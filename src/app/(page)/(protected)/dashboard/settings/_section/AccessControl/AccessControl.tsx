import React from "react";

import Card from "@/components/Card";
import TextInput from "@/components/TextInput";

const _mockUserLists = [
  {
    name: "Phomphiriya",
  },
  {
    name: "Thiraphat",
  },
  {
    name: "Jirayut",
  },
  {
    name: "Piyachai",
  },
];

const AccessControl = () => {
  return (
    <Card className="flex h-fit  w-full flex-col items-start p-2 pb-6">
      <h1 className="ml-4 mt-4  text-2xl font-bold">Access Control</h1>
      <div className="my-4 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex h-full w-full flex-col gap-y-4 px-4">
        <h2 className="text-xl font-bold">User</h2>
        <div className="flex h-[230px]  w-full flex-col gap-2 bg-[#D9D9D970] p-4 ">
          {_mockUserLists.map((user) => (
            <span key={user.name}>{user.name}</span>
          ))}
        </div>
      </div>
      <div className="my-6 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Events</h2>
        <div className="flex w-full  gap-4 ">
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex w-full  gap-4">
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
              <TextInput
                labelClassName="font-medium"
                icon="material-symbols:arrow-drop-down-rounded"
                iconClassName="w-6 h-6"
                containerClassName="max-w-[130px]"
                label="Delete"
              />
            </div>
            <div className="flex w-full  gap-4">
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
              <TextInput
                labelClassName="font-medium"
                icon="material-symbols:arrow-drop-down-rounded"
                iconClassName="w-6 h-6"
                containerClassName="max-w-[130px]"
                label="Delete"
              />
            </div>
          </div>
          <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-bold text-white hover:bg-[#111c2c]">
            Apply
          </button>
        </div>
      </div>
      <div className="my-6 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Events</h2>
        <div className="flex w-full  gap-4 ">
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex w-full  gap-4">
              <TextInput
                labelClassName="font-medium"
                icon="material-symbols:arrow-drop-down-rounded"
                iconClassName="w-6 h-6"
                containerClassName="max-w-[130px]"
                label="Delete"
              />
            </div>
          </div>
          <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-bold text-white hover:bg-[#111c2c]">
            Apply
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AccessControl;
