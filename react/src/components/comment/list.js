import React from "react";
import CommentItem from "./item";

export function CommentsList({ comments }) {
  if(!comments.length) {
    return <div style={{fontSize: 25}} className="text-center">... نظری داده نشده</div>
  }
  return (
    <ul className="list-group list-group-flush">
      {comments.map((comment, index) => (
        <li className="list-group-item" key={index}>
          <CommentItem {...comment} />
        </li>
      ))}
    </ul>
  );
}
