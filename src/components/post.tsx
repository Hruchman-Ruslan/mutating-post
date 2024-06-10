import Image from "next/image";

import { formatDate } from "@/lib/format";

import LikeButton from "./like-icon";

export interface PostProps {
  post: {
    id: number;
    image: string;
    title: string;
    userFirstName: string;
    createdAt: string;
    content: string;
    isLiked?: boolean;
  };
  action: (postId: number) => void;
}

export default function Post({ post, action }: PostProps) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} fill alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
