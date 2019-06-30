import React from "react";

export function PostDetialsInfo(props) {
  const item = props.item;
  return (
    <div className="rental">
      <h1 className="rental-title">{item.title}</h1>
    </div>
  );
}
