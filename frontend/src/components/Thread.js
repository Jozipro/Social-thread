import React, { useEffect, useState } from "react";
import Post from "./Post";

const Thread = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  //quand composant Thread monté, apparait
  useEffect(() => {
    axios
      .get("http://localhost:5000/post/") // pas de parametre, car lecture
      .then((res) => setPosts(res.data)); // asynch, attend, sur un type de données
  }, []);

  return (
    <div class="thread-container">
      {post
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} userId={userId} />
        ))}
      // mappage des messages
    </div>
  );
};

export default Thread;
<h1>THREAD</h1>;
