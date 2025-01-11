"use client";
import Editor from "@/components/Editor";
import Hero from "@/components/Hero";
import { blogCategoryOptions } from "@/constants";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";

const page = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelect = (selected) => {
    console.log("selected-->", selected);
    setSelectedCategories(selected);
  };

  const handleRemove = (value) => {
    setSelectedCategories((prev) =>
      prev.filter((item) => item.value !== value)
    );
  };
  return (
    <>
      <Hero heading="Write Your New Blog Post" search={null} />
      <div className="flex items-center justify-center my-10 flex-col space-y-10">
        <Form
          className="w-full max-w-xs flex flex-col gap-3"
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
              base: "max-w-xs",
              input: "resize-y min-h-[100px]",
            }}
            label="Description"
            placeholder="Shot description about your blog"
            variant="bordered"
          />
          <Select
            className="max-w-xs"
            labelPlacement="outside"
            label="Category"
            placeholder="Choose a category eg(Tech,Education)"
            selectionMode="multiple"
            onChange={handleSelect}
            renderValue={(selectedItems) => (
              <div key={index} className="flex flex-wrap gap-2">
                {selectedItems.map((item) => (
                  <Chip
                    key={item.value}
                    variant="bordered"
                    onClose={() => handleRemove(item.value)}
                  >
                    {item.label}
                  </Chip>
                ))}
              </div>
            )}
          >
            {blogCategoryOptions.map((blog) => (
              <SelectItem key={blog.value} value={blog.value}>
                {blog.label}
              </SelectItem>
            ))}
          </Select>
          <Editor />
          <Button type="submit" variant="flat">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default page;
