import { NavLink, useSearchParams } from "react-router-dom";
import "./Blog.css";
export const Blogs = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const posts = [
    {
      blogId: 1,
      title: "Getting Started with React",
      category: "development",
      description:
        "Learn the basic concepts of React and how components help you build modern user interfaces.",
      date: "2026-08-15",
    },
    {
      blogId: 2,
      title: "Understanding JavaScript Promises",
      category: "development",
      description:
        "A simple introduction to promises, async/await, and handling asynchronous operations in JavaScript.",
      date: "2026-08-17",
    },
    {
      blogId: 3,
      title: "Building Better Web Applications",
      category: "design",
      description:
        "Explore practical techniques for creating clean, responsive, and maintainable web applications.",
      date: "2026-08-20",
    },
  ];
  const filteredPosts = posts
    .filter((post) => {
      return post.category === category;
    })
    .map((post) => {
      return (
        <div className="allPosts" key={post.blogId}>
          <p>ID : {post.blogId}</p>
          <p>Title : {post.title}</p>
          <p>Description : {post.description}</p>
          <p>Date Posted : {post.date}</p>
        </div>
      );
    });
  const displayedPosts = posts.map((post) => {
    return (
      <div className="allPosts" key={post.blogId}>
        <p>ID : {post.blogId}</p>
        <p>Title : {post.title}</p>
        <p>Description : {post.description}</p>
        <p>Date Posted : {post.date}</p>
      </div>
    );
  });
  return (
    <>
      <div className="blogs">
        <div className="showBox">
          <NavLink className="showBtn" to="/blogs?category=development">
            Show development posts
          </NavLink>
        </div>
        {category === null && displayedPosts}
        <div className="filter"> {category && filteredPosts}</div>
      </div>
    </>
  );
};
