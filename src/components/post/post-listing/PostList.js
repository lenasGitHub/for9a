import React, { Component } from "react";

import PostCard from "./PostCard";

class PostList extends Component {
  renderItems() {
    return this.props.items.map((item, index) => {
      return <PostCard key={index} item={item} />;
    });
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default PostList;
