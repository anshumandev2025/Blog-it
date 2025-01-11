import Hero from "@/components/Hero";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="20 Oct 2024"
        heading="JSM Academy Matery Class"
        description="An online platform offering project-based learning for web developers, aimed at leveling up junior to mid-level developers by focusing on real-world applications."
        search={null}
      />
      <div className="flex px-3 md:px-10 my-10 flex-col  gap-10 ">
        <Image
          alt="blog-image"
          src="/image/hawk.jpg"
          layout="responsive"
          width={100}
          height={50}
          className="object-cover rounded-lg"
        />
        <div className="px-2 md:px-10">
          <div className="flex justify-between">
            <div className="flex gap-x-4 ">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://avatar.iran.liara.run/public/boy"
              />
              <div className="flex flex-col text-xs md:text-sm">
                <h1 className="font-bold">Adrian Hajdin - JS Mastery</h1>
                <p>@adrianhajdin</p>
              </div>
            </div>
            <div className="bg-[#FFE8F0] rounded-2xl p-2">Edtech</div>
          </div>
          <div className="space-y-5 mt-10">
            <h1 className="font-bold">Pitch Details</h1>
            <p>
              EcoCart is an innovative e-commerce platform designed for
              eco-conscious shoppers looking to make a positive environmental
              impact with their purchases.{" "}
            </p>
            <p>
              We connect users with local businesses that offer eco-friendly,
              sustainable products across categories like home goods, fashion,
              beauty, and more.{" "}
            </p>
            <p>
              By partnering with small and medium-sized enterprises committed to
              sustainability, we aim to reduce carbon footprints and promote
              greener consumer choices.
            </p>
            <p>
              Our platform not only helps users find ethically sourced and
              environmentally responsible products but also offers features like
              carbon offset tracking, green certifications, and personalized
              sustainability goals.{" "}
            </p>
            <p>
              EcoCart is built to encourage mindful shopping, making it easier
              for people to reduce waste, support local communities, and
              contribute to a more sustainable future.
            </p>
            <p>
              Our mission is simple: Shop better, live better, and create a
              greener world—one purchase at a time.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default page;
