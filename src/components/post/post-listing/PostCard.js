import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProcessImage from "react-imgpro";
import LinesEllipsis from "react-lines-ellipsis";

class PostCard extends Component {
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
    // const { handleClick } = this.props;
    const item = this.props.item;
    return (
      <div class="single-item col-lg-4 col-md-6 u-margin-bottom-medium">
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
            href="#!"
            class="item-badge bg-default-lightblue cairo-arabic-font"
          >
            {item.category.title}
          </a>
          <div class="item-label ul-li-right clearfix">
            <div class="relative">
              <span onclick="void(0);" class="item-label__tooltip tool-tip">
                <span class="lnr lnr-heart" />
                <span class="tool-tip__info">
                  <span class="tool-tip__text">
                    <b> أضف الى المفضلة</b>
                  </span>
                </span>
              </span>
            </div>
          </div>
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
          <div class="share">
            <div class="icon first">
              <i class="fa fa-facebook" />
            </div>
            <div class="icon">
              <i class="fa fa-twitter" />
            </div>
            <div class="icon last">
              <i class="fa fa-whatsapp" />
            </div>
            <div class="label">
              <i class="fa fa-share-square" />
              Share
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
