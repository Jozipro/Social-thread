import React from 'react';

const DeletePost = ({postId}) => {
    axios.delete("http://localhost:5000/post/like-post/"+ postId)
}

    return <span id="delete-btn"onClick={()=>handleDelete()}>
        &#10010;
        </span>
        );
    
};

export default DeletePost;