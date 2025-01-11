import { auth } from "@/auth";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session || !session?.user) {
    redirect("/");
  }
  return (
    <>
      <Hero
        heading="Your Personalized Profile"
        description="Your all blogs are present here"
        search={null}
      />
      <div className="flex md:grid md:grid-cols-[370px,1fr]  space-y-10 flex-col justify-center my-10 px-10">
        <ProfileCard />

        <div className="flex  gap-10  flex-wrap">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default page;
