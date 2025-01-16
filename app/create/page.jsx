"use client";
import Hero from "@/components/Hero";
import { blogCategoryOptions } from "@/constants";
import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";

const page = () => {
  const [aboutBlog, setAboutBlog] = useState("");
  return (
    <>
      <Hero heading="Write Your New Blog Post" search={null} />
      <div className="flex items-center justify-center my-10 flex-col space-y-10">
        <Form
          className="w-full max-w-[40rem] px-10 flex flex-col gap-10"
          // validationErrors={errors}
          // onSubmit={onSubmit}
        >
          <Input
            label="Title"
            labelPlacement="outside"
            name="username"
            variant="bordered"
            placeholder="Enter Your Title"
          />
          <Textarea
            labelPlacement="outside"
            disableAutosize
            classNames={{
              input: "resize-y min-h-[100px]",
            }}
            label="Description"
            placeholder="Shot description about your blog"
            variant="bordered"
          />
          <Select
            labelPlacement="outside"
            variant="bordered"
            label="Category"
            placeholder="Choose a category eg(Tech,Education)"
          >
            {blogCategoryOptions.map((value, index) => (
              <SelectItem key={index} value={value}>
                {value}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Image/Video link"
            labelPlacement="outside"
            name="image"
            variant="bordered"
            placeholder="Paste a link of video/image for your blog "
            type="url"
          />
          <MDEditor
            value={aboutBlog}
            onChange={(value) => setAboutBlog(value)}
            id="pitch"
            preview="edit"
            height={400}
            style={{
              borderRadius: 10,
              overflow: "hidden",
              width: "100%",
              backgroundColor: "white",
              color: "black",
            }}
            textareaProps={{
              placeholder:
                "Write your engaging content and share it with world",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
          <Button
            type="submit"
            className="w-full text-white text-lg font-semibold"
            variant="solid"
            color="success"
          >
            Publish
          </Button>
        </Form>
      </div>
    </>
  );
};

export default page;
