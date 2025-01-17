import { auth } from "@/auth";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import { client } from "@/sanity/lib/client";
import { FETCH_PERSONAL_BLOG_QUERY } from "@/sanity/lib/queries";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session || !session?.user) {
    redirect("/");
  }
  console.log("session-->", session);
  const blogs = await client.fetch(FETCH_PERSONAL_BLOG_QUERY);
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
          {blogs?.map((blog, index) => (
            <BlogCard
              key={index}
              date={blog?._createdAt}
              id={blog?._id}
              views={blog?.views}
              authorName={blog?.author.name}
              authorImage={blog?.author?.image}
              description={blog?.description}
              category={blog?.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
