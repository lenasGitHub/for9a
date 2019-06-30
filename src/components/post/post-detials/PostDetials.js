import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../actions";
import ProcessImage from "react-imgpro";
import CarouselSlider from "react-carousel-slider";
import { PostDetialsInfo } from "./PostDetialsInfo";
class PostDetials extends Component {
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
  componentWillMount() {
    const postId = this.props.match.params.id;
    this.props.dispatch(actions.fetchPostById(postId));
  }
  render() {
    let manner = {
      autoSliding: { interval: "3s" },
      duration: "2s"
    };

    let accEleSetting;

    let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
    if (mobileRegx.test(navigator.userAgent)) {
      accEleSetting.button = false;
    }

    let buttonSetting = {
      placeOn: "middle-inside",
      hoverEvent: true,
      style: {
        left: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%"
        },
        right: {
          height: "50px",
          width: "50px",
          color: "#929393",
          background: "rgba(225, 228, 232, 0.8)",
          borderRadius: "50%"
        }
      }
    };
    const item = this.props.item;
    let data = [
      {
        des: "1",
        imgSrc:
          "https://iamniloy.com/html/bariel/assets/images/feature/img-1.jpg"
      },
      {
        des: "2",
        imgSrc:
          "https://www.for9a.com/images/landing_countries/United-States160x109.jpg"
      }
    ];
    if (item.id) {
      return (
        <section>
          <section class="banner-area detials-banner relative opportunity-banner ">
            <div class="overlay overlay-bg" />
            <div class="container">
              <div class="row d-flex align-items-center justify-content-center">
                <div class="detials-banner__content col-lg-12 u-margin-top-big">
                  <div class="breadcrumbs">
                    <div class="">
                      <div class="wrap_float">
                        <a href="#" className="breadcrumbs__first">
                          Home
                        </a>
                        <span class="separator">/</span>
                        <a href="#" class="current">
                          Date &amp; Pricing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="page_content single-page ">
                    <div class="content-head">
                      <div class="wrap">
                        <div class="wrap_float">
                          <div class="main">
                            <div class="title cairo-arabic-font">
                              {item.title}
                            </div>

                            <ul class="short_description">
                              <li class="time">7 days</li>
                              <li class="date ">
                                {" "}
                                آخر موعد للتقديم:{" "}
                                {this.handleClick(item.deadline)}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="detials-area detials-area--gab">
            <div className="container">
              <div className="d-flex  justify-content-between">
                <div class="col-lg-8 col-md-8 detials-area__left relative">
                  <h1>{item.title}</h1>
                  <div className="brand-area">
                    <div class="post-admin">
                      <a class="admin-link" href="#!">
                        <span class="admin-image brand__image">
                          <img
                            src={item.organization.image}
                            alt="image_not_found"
                          />
                        </span>
                        {item.organization.name}
                      </a>
                    </div>
                  </div>
                  <div class="nd_learning_section nd_learning_position_relative relative">
                    <div class="overlay overlay-bg" />

                    <ProcessImage
                      quality={100}
                      image={item.images.lg}
                      resize={{ width: 710, height: 500 }}
                      scaleToFit={{ width: 710, height: 500 }}
                      processedImage={(src, err) => this.setState({ src, err })}
                    />

                    <div class="social-links ul-li-right text-right clearfix">
                      <h3 class="title-text mb-30">
                        Share this opportunity with your friends{" "}
                      </h3>
                      <ul class="clearfix">
                        <li>
                          <a href="#!">
                            <i class="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i class="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i class="fa fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i class="fa fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i class="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <ul
                    class="nd_learning_list_style_none nd_learning_margin_0 nd_learning_padding_0 nd_learning_section nd_learning_border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                    role="tablist"
                  >
                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top ui-tabs-active ui-state-active"
                      role="tab"
                      tabindex="0"
                      aria-controls="nd_learning_single_course_description"
                      aria-labelledby="ui-id-11"
                      aria-selected="true"
                      aria-expanded="true"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_description"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-11"
                        >
                          Descriptions
                        </a>
                      </h4>
                    </li>
                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabindex="-1"
                      aria-controls="nd_learning_single_course_teachers"
                      aria-labelledby="ui-id-12"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_teachers"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-12"
                        >
                          Teachers
                        </a>
                      </h4>
                    </li>

                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabindex="-1"
                      aria-controls="nd_learning_single_course_attendees"
                      aria-labelledby="ui-id-13"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_attendees"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-13"
                        >
                          Attendees
                        </a>
                      </h4>
                    </li>

                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabindex="-1"
                      aria-controls="nd_learning_single_course_comments"
                      aria-labelledby="ui-id-14"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_comments"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-14"
                        >
                          Comments
                        </a>
                      </h4>
                    </li>

                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabindex="-1"
                      aria-controls="nd_learning_single_course_documents"
                      aria-labelledby="ui-id-15"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_documents"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-15"
                        >
                          Program
                        </a>
                      </h4>
                    </li>

                    <li
                      class="nd_learning_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabindex="-1"
                      aria-controls="nd_learning_single_course_reviews"
                      aria-labelledby="ui-id-16"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          class="nd_learning_outline_0 nd_learning_padding_20_15 nd_learning_display_inline_block nd_options_first_font nd_options_color_greydark ui-tabs-anchor"
                          href="#nd_learning_single_course_reviews"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-16"
                        >
                          Reviews
                        </a>
                      </h4>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 col-md-4 detials-area__right">
                  <CarouselSlider slideItems={data} />
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return <h1>Loadinggg {item.id}..</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    item: state.item.data
  };
}
export default connect(mapStateToProps)(PostDetials);
