import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const posts = [
    {
      Id: 1,
      title: "Getting Started with React",
      category: "development",
      description:
        "Learn the basic concepts of React and how components help you build modern user interfaces.",
      date: "2026-08-15",
    },
    {
      Id: 2,
      title: "Understanding JavaScript Promises",
      category: "development",
      description:
        "A simple introduction to promises, async/await, and handling asynchronous operations in JavaScript.",
      date: "2026-08-17",
    },
    {
      Id: 3,
      title: "Building Better Web Applications",
      category: "development",
      description:
        "Explore practical techniques for creating clean, responsive, and maintainable web applications.",
      date: "2026-08-20",
    },
  ];

  const blogWithId = posts.find((post) => post.Id === blogId);
  return (
    <>
      {blogWithId ? (
        <div>
          <p>Id : {blogWithId.Id}</p>
          <p>Title : {blogWithId.title}</p>
          <p>Description : {blogWithId.description}</p>
          <p>Date Posted : {blogWithId.date}</p>
        </div>
      ) : (
        <p>Post Not Found</p>
      )}
    </>
  );
};
