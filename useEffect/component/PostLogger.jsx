import React, { useEffect, useState } from "react";
import axios from "axios"; //axios=parameter  from axios=package

function PostLogger() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Runs once when the component mounts

  return (
    <>
      <div>
        <h2>Posts Table</h2>
        <table border="2" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>Body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>

                <td>
                  <button>Edit</button>
                </td>

                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ); // Nothing is rendered on screen
}

export default PostLogger;
