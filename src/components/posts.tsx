import Post from "./post";

export interface PostsProps {
  posts: {
    id: number;
    image: string;
    title: string;
    userFirstName: string;
    createdAt: string;
    content: string;
  }[];
}

export default function Posts({ posts }: PostsProps) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
