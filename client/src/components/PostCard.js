import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function PostCard({ post, handleRerender }) {
  const [likes, setLikes] = useState(post.likes);

  function handleDeletePost() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        handleRerender();
      }
    });
  }

  function handleLike() {
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        setLikes(likes + 1);
        handleRerender();
      }
    });
  }

  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src={post.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h6 className="card-title">{post.username}</h6>
        <p className="card-text">{post.caption}</p>
        <a className="btn btn-primary" onClick={handleLike}>
          ♥
        </a>
        <a
          className="btn btn-danger"
          onClick={handleDeletePost}
          style={{ float: "right" }}
        >
          Delete
        </a>
        <p>{post.likes} Likes</p>
        {/* <a
          className="btn btn-danger"
          onClick={handleDeletePost}
          style={{ float: "right" }}
        >
          Delete
        </a> */}
      </div>
    </div>
  );
}

// ♥

export default PostCard;
