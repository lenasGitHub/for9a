import React from "react";

export function Banner(props) {
  return (
    <section class="banner-area relative opportunity-banner" id="home">
      <div class="overlay overlay-bg" />
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="banner-area__content col-lg-12 u-margin-top-big">
            <h1 class="text-white banner-area__content--title u-margin-top-small">
              Popular Opportunity
            </h1>
            <p class="text-white link-nav u-margin-top-medium">
              <a href="index.html" className="link-nav--1">
                Home
              </a>

              <a href="courses.html" className="link-nav--2">
                Popular Opportunity
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
