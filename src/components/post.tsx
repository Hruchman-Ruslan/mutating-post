import { formatDate } from "@/lib/format";
import { togglePostLikeStatus } from "@/actions/posts";

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
            <form
              action={togglePostLikeStatus.bind(null, post.id)}
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
