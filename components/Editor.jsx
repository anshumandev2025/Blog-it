"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Editor() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
}
