import React from "react";

import PropTypes from "prop-types";
const FavoriteIcon = ({ toolTipText }) => {
  return (
    <div class="favorite-icon ul-li-right clearfix">
      <div class="relative">
        <span onclick="void(0);" class="favorite-icon__tooltip tool-tip">
          <span class="lnr lnr-heart" />
          <span class="tool-tip__info">
            <span class="tool-tip__text">
              <b>{toolTipText} </b>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};
FavoriteIcon.propTypes = {
  toolTipText: PropTypes.string
};

FavoriteIcon.defaultProps = {
  toolTipText: "أضف الى المفضلة"
};

export default FavoriteIcon;
