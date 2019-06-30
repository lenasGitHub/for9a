import React from "react";

import HeaderImagebg from "./layout/header/HeaderImagebg";

import banner_bg from "../../images/top-banner-background.jpg";

export function Banner(props) {
  return (
    <HeaderImagebg title="Popular Opportunity" backgroundImage={banner_bg} />
  );
}
