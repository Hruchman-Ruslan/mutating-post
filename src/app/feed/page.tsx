import { getPosts } from "@/lib/posts";

import Posts from "@/components/posts";

export interface FeedPageProps {}

export default async function FeedPage({}: FeedPageProps) {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
