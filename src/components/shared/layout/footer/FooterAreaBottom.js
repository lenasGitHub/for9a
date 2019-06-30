import React from "react";

import PropTypes from "prop-types";

export function FooterAreaBottom({ copyright, MenuSocialIcon }) {
  return (
    <section class="section-gap footer-area--3">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="third-footer__widget">
              <h4>Top Products</h4>
              <ul>
                <li>
                  <a href="#">Managed Website</a>
                </li>
                <li>
                  <a href="#">Manage Reputation</a>
                </li>
                <li>
                  <a href="#">Power Tools</a>
                </li>
                <li>
                  <a href="#">Marketing Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="third-footer__widget">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="third-footer__widget">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Brand Assets</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="third-footer__widget">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Experts</a>
                </li>
                <li>
                  <a href="#">Agencies</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4  col-md-6 col-sm-6">
            <div class="third-footer__widget">
              <h4>Newsletter</h4>
              <p>Stay update with our latest</p>
              <div class="">
                <form target="_blank" action="#" method="get">
                  <div class="third-footer__input-group">
                    <input
                      type="text"
                      class="third-footer__form-control"
                      name="EMAIL"
                      placeholder="Enter Email Address"
                    />

                    <div class="third-footer__input-group-btn">
                      <button class="btn btn-default" type="submit">
                        <span class="lnr lnr-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="third-footer__bottom row align-items-center justify-content-between">
          <p class="footer-text m-0 col-lg-6 col-md-12">
            {copyright} <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="#" target="_blank">
              For9a
            </a>
          </p>
          <div class="col-lg-6 col-sm-12 footer-social">
            {MenuSocialIcon.map((item, idx) => (
              <a href={item.to} key={idx}>
                <i class={`fa fa-${item.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

FooterAreaBottom.propTypes = {
  /**
   * The menu social icons array.
   */
  menuSocialIcon: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

FooterAreaBottom.defaultProps = {
  copyright:
    "Copyright © 2019 All rights reserved | This template is made with",
  MenuSocialIcon: [
    {
      icon: "facebook",
      to: "#"
    },
    {
      icon: "twitter",
      to: "#"
    },
    {
      icon: "youtube",
      to: "#"
    },
    {
      icon: "linkedin",
      to: "#"
    }
  ]
};
