"use server";
import { Post } from "./page";

// Server action
export async function saveDataToDatabase(data: Post) {
  console.log(">>> Server action runs...");
  const response = await fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to save post data");
  }

  return response.json();
}
