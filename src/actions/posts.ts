"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary";

export async function createPost(_: any, formData: FormData) {
  const title = formData.get("title") as string | null;
  const image = formData.get("image") as File | null;
  const content = formData.get("content") as string | null;

  let errors: string[] = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    if (image) {
      imageUrl = await uploadImage(image);
    } else {
      throw new Error("Image is not a valid file.");
    }
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId: number) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
