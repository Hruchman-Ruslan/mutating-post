import { formatDate } from "@/lib/format";

import LikeButton from "./like-icon";

export interface PostProps {
  post: {
    id: string;
    image: string;
    title: string;
    userFirstName: string;
    createdAt: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <LikeButton />
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
