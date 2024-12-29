type Post = {
  username: string;
  title: string;
  likes: number;
};

export default async function Page() {
  const drawData = await fetch("http://localhost:8000/posts", {
    cache: "no-store", // @important
  });
  const posts = (await drawData.json()) as Post[];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.username}>
          <p style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
          </p>
          <small>
            {post.username} - Likes: {post.likes}
          </small>
        </li>
      ))}
    </ul>
  );
}
