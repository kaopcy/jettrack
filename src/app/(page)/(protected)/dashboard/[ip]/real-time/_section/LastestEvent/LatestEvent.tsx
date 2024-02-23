import Image from "next/image";

import Card from "@/components/Card";
import { Column, Header, Row } from "@/components/Table/Table";
import dateFormatter from "@/utils/dateFormatter";

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
    <Card className="flex  h-full w-full flex-col bg-white px-2">
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
              <Column>{dateFormatter(event.dateAndTime)}</Column>
              <Column>{event.licensePlate}</Column>
              <Column>{event.province}</Column>
              <Column>{event.brand}</Column>
              <Column className="py-2">
                <div className="relative mx-auto h-[55px] w-[140px]">
                  <Image alt="" fill src={event.licenseImage} className="object-cover" />
                </div>
              </Column>
            </Row>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default LatestEvent;
