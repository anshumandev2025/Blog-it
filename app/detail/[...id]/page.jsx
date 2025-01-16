import { PortableText } from "@portabletext/react";
import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";
import {
  BLOG_VIEWS_QUERY,
  FETCH_BLOG_CONTENT_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import { convertDate } from "@/utils/convertDate";
import { Avatar } from "@nextui-org/avatar";
import { notFound } from "next/navigation";
import { after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";
const page = async ({ params }) => {
  const id = (await params).id[0];
  console.log("id-->", id);
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(BLOG_VIEWS_QUERY, {
      id,
    });
  console.log("totalViews-->", totalViews);
  after(async () => {
    console.log("hihi");
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });
  const content = await client.fetch(FETCH_BLOG_CONTENT_BY_ID_QUERY, { id });

  if (!content) {
    return notFound();
  }
  console.log("converted date-->", convertDate(content?._createdAt));
  return (
    <>
      <Hero
        title={convertDate(content?._createdAt)}
        heading={content?.title}
        description={content?.description}
        search={null}
      />
      <div className="flex px-3 md:px-10 my-10 flex-col gap-10">
        <img
          alt="blog-image"
          src={content?.image}
          width={100}
          height={50}
          className="object-cover w-full rounded-lg"
        />
        <div className="px-2 md:px-10">
          <div className="flex justify-between">
            <div className="flex gap-x-4">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={content?.author?.image}
              />
              <div className="flex flex-col text-xs md:text-sm">
                <h1 className="font-bold">{content?.author?.name}</h1>
                <p>{content?.author?.email}</p>
              </div>
            </div>
            <div className="bg-[#FFE8F0] rounded-2xl p-2">
              {content?.category}
            </div>
          </div>
          <div className="space-y-5 mt-10">
            {content?.content ? (
              <PortableText value={content?.content} />
            ) : (
              <p>No details provided</p>
            )}
          </div>
        </div>
      </div>
      <div className="fixed w-fit bottom-4 right-4 px-3 py-2 bg-[#FFE8F0] rounded-2xl font-bold">
        Views:{content?.views}
      </div>
      <hr />
    </>
  );
};

export default page;
