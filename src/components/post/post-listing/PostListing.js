import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions";
import PostList from "./PostList";

class PostListing extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchPosts());
  }
  render() {
    return <PostList items={this.props.items} />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.data
  };
}
export default connect(mapStateToProps)(PostListing);
