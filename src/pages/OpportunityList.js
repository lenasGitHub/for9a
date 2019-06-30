import React from "react";

import { Search } from "../components/shared/Search";
import { Banner } from "../components/shared/Banner";

import PostListing from "../components/post/post-listing/PostListing";

export function OpportunityList(props) {
  return (
    <div>
      <Banner />
      <Search />
      <section class="section-gap  inner-opportunity-area">
        <div class="container">
          <div class="row">
            <PostListing />
          </div>
        </div>
      </section>
    </div>
  );
}
