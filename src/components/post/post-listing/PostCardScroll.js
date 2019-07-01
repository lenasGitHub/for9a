import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProcessImage from "react-imgpro";
import LinesEllipsis from "react-lines-ellipsis";

import ShareIcon from "../../shared/common/ShareIcon";
import FavoriteIcon from "../../shared/common/FavoriteIcon";

class PostCardScroll extends Component {
  state = { src: "", err: null, selectedItem: {} };
  handleClick = item => {
    var date = new Date(item);
    var months = [
      "يناير",
      "فبراير",
      "مارس",
      "إبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر"
    ];
    var days = [
      "اﻷحد",
      "اﻷثنين",
      "الثلاثاء",
      "اﻷربعاء",
      "الخميس",
      "الجمعة",
      "السبت"
    ];
    let delDateString =
      days[date.getDay()] +
      ", " +
      date.getDate() +
      " " +
      months[date.getMonth()] +
      ", " +
      date.getFullYear();

    return delDateString;
  };

  render() {
    const item = this.props.item;
    return (
      <div class="single-item scroll-single-item">
        <div class="relative single-item__img img-container">
          <div class="relative">
            <div class="overlay overlay-bg" />
            <ProcessImage
              quality={100}
              image={item.images.lg}
              resize={{ width: 360, height: 300 }}
              scaleToFit={{ width: 360, height: 300 }}
              processedImage={(src, err) => this.setState({ src, err })}
            />
          </div>
          <a
            href={item.category.url}
            class="item-badge bg-default-lightblue cairo-arabic-font"
          >
            {item.category.title}
          </a>
          <FavoriteIcon />
          <div class="meta d-flex justify-content-between">
            <div class="single-item__brand brand">
              <a class="brand__link cairo-arabic-font" href="#!">
                <span class="brand__image">
                  <img src={item.organization.image} alt="image_not_found" />
                </span>
                {item.organization.name}
              </a>
            </div>
          </div>
        </div>
        <div class="single-item__content u-margin-bottom-small">
          <Link to={`/opportunity/${item.id}`}>
            <h4 className="single-item__title u-margin-top-small cairo-arabic-font">
              <LinesEllipsis
                text={item.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </h4>
          </Link>
        </div>
        <div className="single-item__footer d-flex justify-content-between">
          <p className="item-date cairo-arabic-font">
            آخر موعد للتقديم: <span>{this.handleClick(item.deadline)}</span>
          </p>
          <ShareIcon />
        </div>
      </div>
    );
  }
}

export default PostCardScroll;
