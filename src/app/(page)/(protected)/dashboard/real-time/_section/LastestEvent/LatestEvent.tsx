import Image from "next/image";
import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, TdHTMLAttributes } from "react";

const _mockLatestEvent = [
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "กรุงเทพมหานคร",
    brand: "Unknown",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "นครนายก",
    brand: "",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const LatestEvent = () => {
  return (
    <section className="flex  h-full w-full flex-col bg-white px-2">
      <h2 className="py-4 pl-6 text-xl font-bold">Latest event</h2>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <Header>Date and time</Header>
            <Header>License plate</Header>
            <Header>Province</Header>
            <Header>Brand</Header>
            <Header>License Image</Header>
          </tr>
        </thead>
        <tbody>
          {_mockLatestEvent.map((event, index) => (
            <Row key={index}>
              <Column>{event.dateAndTime}</Column>
              <Column>{event.licensePlate}</Column>
              <Column>{event.province}</Column>
              <Column>{event.brand}</Column>
              <Column>
                <div className="relative mx-auto h-[50px] w-[180px]">
                  <Image alt="" fill src={event.licenseImage} className="object-cover" />
                </div>
              </Column>
            </Row>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const Header: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
> = ({ children, ...props }) => {
  return (
    <th {...props} className="border-b-2 p-4 pt-0 text-center font-semibold">
      {children}
    </th>
  );
};

const Row: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
> = ({ children, ...props }) => {
  return (
    <tr {...props} className="py-4 even:bg-[#EDEBEB]">
      {children}
    </tr>
  );
};

const Column: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
> = ({ children, ...props }) => {
  return (
    <td {...props} className="p-4 text-center text-base">
      {children}
    </td>
  );
};

export default LatestEvent;
