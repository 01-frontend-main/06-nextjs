"use client";
import { useState } from "react";
import { saveDataToDatabase } from "./actions";

export type Post = {
  username: string;
  title: string;
  likes: number;
};

export default function Page() {
  const [data, setData] = useState("");

  const handleSave = async () => {
    try {
      const result = await saveDataToDatabase({
        username: "adani-susam",
        title: "New post from Adani Susam",
        likes: 102,
      });
      console.log("Data saved:", result);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter some data"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
