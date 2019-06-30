import React from "react";
import PropTypes from "prop-types";

const HeaderImagebg = ({ title, backgroundImage, linkNav }) => {
  return (
    <section
      class="banner-area relative opportunity-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div class="overlay overlay-bg" />
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="banner-area__content col-lg-12 u-margin-top-big">
            <h1 class="text-white banner-area__content--title u-margin-top-small">
              {title}
            </h1>
            <p class="text-white link-nav u-margin-top-medium">
              {linkNav.map((nav, idx) => (
                <a href={nav.to} className="link-nav--1" key={idx}>
                  {nav.name}
                </a>
              ))}

              <a href="courses.html" className="link-nav--2">
                {title}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderImagebg.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  /**
   * The menu social icons array.
   */
  langSelection: PropTypes.array
};

HeaderImagebg.defaultProps = {
  linkNav: [
    {
      name: "Home",
      to: "#"
    }
  ]
};
export default HeaderImagebg;
