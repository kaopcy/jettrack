import Image from "next/image";
import React from "react";

import { Column, Header, Row } from "@/components/Table/Table";

const _mockHistoryLogs = [
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "กรุงเทพมหานคร",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "นครนายก",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "ฉะเชิงเทรา",
  //   brand: "",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "ฉะเชิงเทรา",
  //   brand: "",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "ฉะเชิงเทรา",
  //   brand: "Unknown",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "กรุงเทพมหานคร",
  //   brand: "Unknown",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "ฉะเชิงเทรา",
  //   brand: "Unknown",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: "101",
  //   dateAndTime: "2023-02-15 10:12:22",
  //   licensePlate: "กต 1234",
  //   province: "นครนายก",
  //   brand: "",
  //   type: "รถยนต์ส่วนบุคคล",
  //   ipAddress: "107.127.7.125",
  //   licenseImage:
  //     "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "กรุงเทพมหานคร",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "Unknown",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "นครนายก",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "101",
    dateAndTime: "2023-02-15 10:12:22",
    licensePlate: "กต 1234",
    province: "ฉะเชิงเทรา",
    brand: "",
    type: "รถยนต์ส่วนบุคคล",
    ipAddress: "107.127.7.125",
    licenseImage:
      "https://images.unsplash.com/photo-1586960240672-3bec2fa9d1c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HistoryLog = () => {
  return (
    <div className="flex h-full min-h-0 w-full gap-4  bg-white px-3 pb-4 pt-4">
      <div className="flex h-full w-full flex-col  items-center justify-start overflow-y-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr>
              <Header>ID</Header>
              <Header>Date and time</Header>
              <Header>License plate</Header>
              <Header>Province</Header>
              <Header>Type</Header>
              <Header>Ip</Header>
            </tr>
          </thead>
          <tbody>
            {_mockHistoryLogs.map((event, index) => (
              <Row className="text-sm even:bg-[#F4F4F4]" key={index}>
                <Column>{event.id}</Column>
                <Column>{event.dateAndTime}</Column>
                <Column>{event.licensePlate}</Column>
                <Column>{event.province}</Column>
                <Column>{event.type}</Column>
                <Column>{event.ipAddress}</Column>
              </Row>
            ))}
          </tbody>
        </table>
      </div>
      <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-medium text-white">Export</button>
    </div>
  );
};

export default HistoryLog;
