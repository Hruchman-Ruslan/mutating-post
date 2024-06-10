import { Metadata } from "next";
import { Suspense } from "react";

import { getPosts } from "@/lib/posts";

import Posts from "@/components/posts";

export const metadata: Metadata = {
  title: "Latest Post",
  description: "Browse our latest posts!",
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here is what you might have missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
