import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
const ProfileCard = () => {
  return (
    <>
      <Card className="max-w-[340px] w-fit h-fit py-5 relative border-4 bg-[#EE2B69] border-black  drop-shadow-2xl">
        <CardHeader className="justify-center">
          <div className="px-3 absolute -top-2 py-2 bg-white text-black stroke-black stroke- text-xl  font-extrabold rounded-xl w-full text-center">
            Nathan Smith
          </div>
        </CardHeader>
        <CardBody className=" py-0 space-y-3 ">
          <div className="flex items-center justify-between">
            <Avatar
              className="w-full h-full object-cover"
              isBordered
              radius="full"
              size="lg"
              src="https://avatar.iran.liara.run/public/boy"
            />
          </div>
          <h1 className="text-white text-xl text-center font-bold">
            @nathansmith
          </h1>
          <p className="text-white text-center text-xs font-bold">
            Next.js Enthusiast & Educator
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileCard;
