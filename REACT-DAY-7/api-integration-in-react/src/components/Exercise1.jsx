import { useEffect, useState } from "react";
function Exercise1() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErrors] = useState("");
    useEffect(() => {
      const timeout = setTimeout(() => {
        async function getPosts() {
          try {
            setLoading(true);
            setErrors("");
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Failed to fetch the data");
            }
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            setErrors(error.message);
          } finally {
            setLoading(false);
          }
        }
        getPosts();
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }, []);
    if (error) {
      return <h3>{error}</h3>;
    }
  return (
    <>
      {" "}
      {loading && <p>Loading....</p>}
      {posts
        .filter((post) => {
          return post.id <= 6;
        })
        .map((post) => (
          <p key={post.id}>
            Title {post.id} : {post.title}
          </p>
        ))}
    </>
  );
}

export default Exercise1;
