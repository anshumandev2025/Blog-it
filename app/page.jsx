import React from "react";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { FETCH_BLOG_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
// import { sanityFetch } from "@/sanity/lib/live";
const page = async ({ searchParams }) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const blogs = await client.fetch(FETCH_BLOG_QUERY, params);
  // const { data: blogs } = await sanityFetch(FETCT_BLOG_QUERY, params);
  return (
    <>
      <div className="flex flex-col">
        <Hero
          title="Write, Learn, And Grow"
          heading="Share Your Ideas and Connect with Like-Minded Innovators to Turn Dreams into Reality!"
          description="Write Blogs, Vote on Blogs, and Get Noticed in Virtual Competitions"
          search="search"
          query={query}
        />
        <div className="m-10 px-5 space-y-10">
          <h2 className="text-2xl">Recommended Startups</h2>
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
