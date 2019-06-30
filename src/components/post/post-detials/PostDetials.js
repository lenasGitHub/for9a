import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions";

import { PostDetialsInfo } from "./PostDetialsInfo";
class PostDetials extends Component {
  componentWillMount() {
    const postId = this.props.match.params.id;
    this.props.dispatch(actions.fetchPostById(postId));
    console.log();
  }
  render() {
    const item = this.props.items;
    console.log(item);
    return <PostDetialsInfo />;
    // if (item.id) {
    //   return (
    //     <section id="rentalDetails">
    //       <div className="upper-section">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <img src={item.image} alt="" />
    //           </div>
    //           <div className="col-md-6">
    //             <img src={item.image} alt="" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="details-section">
    //         <div className="row">
    //           <div className="col-md-8" />
    //           <div className="col-md-4">
    //             {" "}
    //             <PostDetialsInfo item={item} />
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   );
    // } else {
    //   return <h1>Loadinggg {item.id}..</h1>;
    // }
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.data
  };
}
export default connect(mapStateToProps)(PostDetials);
