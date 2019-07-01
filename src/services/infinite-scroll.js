import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import PostCardScroll from "../components/post/post-listing/PostCardScroll";
export class Images extends Component {
  state = {
    images: [],
    count: 2,
    hasMore: true
  };

  componentDidMount() {
    // const { count, start } = this.state;
    // axios
    //   .get(`https://api.for9a.com/opportunity/filter?page=${count}`)
    //   .then(res => console.log(res));
  }

  fetchImages = () => {
    if (this.state.images.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    const { count } = this.state;
    this.setState({
      count: this.state.count + 1
    });
    axios
      .get(`https://api.for9a.com/opportunity/filter?page=${count}`)
      .then(res => {
        this.setState(state => {
          const images = state.images.concat(res.data.result.items);
          return {
            images
          };
        });
      });
  };

  render() {
    console.log(this.state.images.length);
    return (
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={this.state.hasMore}
        loader={
          <div className="loader-area">
            <div class="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        }
      >
        {this.state.images.map(items => {
          return <PostCardScroll key={items.id} item={items} />;
        })}
      </InfiniteScroll>
    );
  }
}

export default Images;
