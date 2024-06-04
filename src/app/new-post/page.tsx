import { createPost } from "@/actions/posts";

import PostForm from "@/components/post-form";

export interface NewPostPageProps {}

export default function NewPostPage({}: NewPostPageProps) {
  return <PostForm action={createPost} />;
}
