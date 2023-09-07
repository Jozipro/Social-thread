import React, { useState } from "react";

const LikePost = ({ post, userId }) => {
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.include(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
  }, [userId]);

  const likePost = () => {
    axios.patch(+post._id, { userId });

    setUserLiked(true);
  };

  const dislikePost = () => {
    axios.patch("http://localhost:5000/post/like-post/" + post._id, { userId });

    setUserLiked(false);
  };

  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>

      {userLiked ? (
        <span id="dislike-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;

//49 min
