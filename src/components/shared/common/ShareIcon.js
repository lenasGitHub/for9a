import React from "react";

import PropTypes from "prop-types";
const ShareIcon = ({ MenuSocialIcon, shareText }) => {
  return (
    <div class="share-animation">
      {MenuSocialIcon.map((item, idx) => (
        <div class="share-animation__icon" key={idx}>
          <i class={`fa fa-${item.icon}`} />
        </div>
      ))}

      <div class="share-animation__label">
        <i class="fa fa-share-square" />
        {shareText}
      </div>
    </div>
  );
};
ShareIcon.propTypes = {
  shareText: PropTypes.string,
  /**
   * The menu social icons array.
   */
  menuSocialIcon: PropTypes.array
};

ShareIcon.defaultProps = {
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
      icon: "whatsapp",
      to: "#"
    }
  ],
  shareText: "Share"
};

export default ShareIcon;
