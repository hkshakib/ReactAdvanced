import { useState } from "react";
import usePost from "./hooks/usePosts";

const PostList = () => {
  const [userId, selectUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePost(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => selectUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">USER 1</option>
        <option value="2">USER 2</option>
        <option value="3">USER 3</option>
      </select>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
