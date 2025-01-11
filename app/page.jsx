import React from "react";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero
          title="Write, Learn, And Grow"
          heading="Share Your Ideas and Connect with Like-Minded Innovators to Turn Dreams into Reality!"
          description="Write Blogs, Vote on Blogs, and Get Noticed in Virtual Competitions"
          search="search"
        />
        <div className="m-10 px-5 space-y-10">
          <h2 className="text-2xl">Recommended Startups</h2>
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default page;
