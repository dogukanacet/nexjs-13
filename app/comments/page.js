"use client";

import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await fetch(`/api/comments`);
    const data = await res.json();

    setComments(data);
  };

  const renderComments = () => {
    if (comments) {
      return comments.map((comment) => {
        return (
          <div key={comment.id} className="comment-wrapper">
            {`${comment.id}:  ${comment.name}`}
          </div>
        );
      });
    }
  };

  return <div className="comments-container">{renderComments()}</div>;
};

export default Comments;
