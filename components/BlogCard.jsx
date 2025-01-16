import { convertDate } from "@/utils/convertDate";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({
  date,
  id,
  authorName,
  authorImage,
  views,
  description,
  category,
}) => {
  return (
    <>
      <Card className="max-w-[340px] border-4 hover:border-[#EE2B69] border-black  drop-shadow-2xl">
        <CardHeader className="justify-between">
          <div className="bg-[#FFE8F0] rounded-2xl p-2">
            {convertDate(date)}
          </div>
          <div className="flex items-center gap-2">
            <img src="/svg/eye.svg" alt="eye" />
            <p className="text-sm">{views}</p>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 space-y-3 ">
          <div className="flex items-center justify-between">
            <p>{authorName}</p>
            <Avatar isBordered radius="full" size="md" src={authorImage} />
          </div>
          <p className="text-sm">
            {description.split(" ").slice(0, 15).join(" ")}...
          </p>
          <Image
            alt="blog-image"
            src="/image/hawk.jpg"
            width={100}
            height={50}
            className="object-cover h-full w-full rounded-xl "
          />
        </CardBody>
        <CardFooter className="w-full justify-between">
          <div className="bg-[#FFE8F0] rounded-2xl p-2">{category}</div>
          <Link
            href={`detail/${id}`}
            className="px-3 py-2 bg-blue-500 text-white  rounded-xl"
          >
            Read More
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogCard;
