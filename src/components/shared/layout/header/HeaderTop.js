import React from "react";

import PropTypes from "prop-types";
const HeaderTop = ({ MenuSocialIcon, langSelection }) => {
  return (
    <div class="site-header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-8 site-header__top--left no-padding">
            <ul className="site-header__top--social-media ">
              {MenuSocialIcon.map((item, idx) => (
                <li key={idx}>
                  <a href={item.to}>
                    <i class={`fa fa-${item.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
            <div class="nice-select">
              <span class="current">English</span>
              <ul class="list">
                {langSelection.map((lang, idx) => (
                  <li data-value={lang.value} class="option" key={idx}>
                    {lang.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 col-4 site-header__top--right no-padding">
            <a href="#">
              <span class="lnr lnr-phone-handset" />{" "}
              <span class="text">Register /</span>
            </a>
            <a href="#">
              <span class="lnr lnr-envelope" /> <span class="text">Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
HeaderTop.propTypes = {
  /**
   * The menu social icons array.
   */
  menuSocialIcon: PropTypes.array,
  /**
   * The menu lang array.
   */
  langSelection: PropTypes.array
};

HeaderTop.defaultProps = {
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
  ],
  langSelection: [
    {
      value: "arabic",
      text: "ARABIC"
    }
  ]
};

export default HeaderTop;
