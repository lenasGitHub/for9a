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
          <section class="banner-area detials-banner relative opportunity-banner cairo-arabic-font ">
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

                            <ul class="short_description cairo-arabic-font">
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

                  <ul class="nd_learning_section" role="tablist">
                    <li class="nd_learning_display_inline_block  ui-tabs-active">
                      <h4>
                        <a class="nd_learning_display_inline_block " href="#!">
                          وصف
                        </a>
                      </h4>
                    </li>

                    <li class="nd_learning_display_inline_block  ">
                      <h4>
                        <a class="nd_learning_display_inline_block " href="#!">
                          شروط المتقدم
                        </a>
                      </h4>
                    </li>

                    <li class="nd_learning_display_inline_block  ">
                      <h4>
                        <a class="nd_learning_display_inline_block " href="#!">
                          معلومات الفرصة
                        </a>
                      </h4>
                    </li>

                    <li class="nd_learning_display_inline_block  ">
                      <h4>
                        <a class="nd_learning_display_inline_block " href="#!">
                          الشروط التعليمية
                        </a>
                      </h4>
                    </li>
                  </ul>

                  <div class="nav-tap-area">
                    <div class="nav-tap-area__container">
                      <div class="featured-badges">
                        <div class="badge">
                          <img src={item.organization.image} />
                        </div>
                      </div>
                      <div className="description-area-left">
                        <h3 class="nav-tap-area__title">Course Description</h3>
                        <div class="nav-tap-area__description">
                          <p>
                            Vivamus volutpat eros pulvinar velit laoreet, sit
                            amet egestas erat dignissim. Sed quis rutrum tellus,
                            sit amet viverra felis. Cras sagittis sem sit amet
                            urna feugiat rutrum. Nam nulla ipsum, venenatis
                            malesuada felis quis, ultricies convallis neque.
                            Pellentesque tristique fringilla tempus. Vivamus
                            bibendum nibh in dolor pharetra, a euismod nulla
                            dignissim. Aenean viverra tincidunt nibh, in
                            imperdiet nunc. Suspendisse eu ante pretium,
                            consectetur leo at, congue quam. Nullam hendrerit
                            porta ante vitae tristique. Vestibulum ante ipsum
                            primis in faucibus orci luctus et ultrices posuere
                            cubilia Curae; Vestibulum ligula libero, feugiat
                            faucibus mattis eget, pulvinar et ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 detials-area__right">
                  <div class="widget widget_recent_entries ul-li-block clearfix">
                    <div className="widget__top">
                      <div class="icon-holder">
                        <img
                          src="https://www.for9a.com/images/oprt_cat/Vocational-and-Technical-Trainings.svg"
                          alt=""
                          class="icon"
                        />
                      </div>
                      <h2 class="widget_title heading">اخترنا لكم</h2>
                    </div>
                    <div className="widget__contain">
                      <ul className="widget_list">
                        <li>
                          <a href="#!">الدراسة بالخارج</a>
                        </li>
                        <li>
                          <a href="#!">تنمية المهارات</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="widget widget_recent_entries ul-li-block clearfix">
                    <div className="widget__top">
                      <div class="icon-holder">
                        <img
                          src="https://www.for9a.com/images/oprt_cat/Events-Festivals-and-Conferences.svg"
                          alt=""
                          class="icon"
                        />
                      </div>
                      <h2 class="widget_title heading">فرص مميزة</h2>
                    </div>
                    <div className="widget__contain">
                      توفر لكم منصة تعلم العديد من المقالات التي قام بجمعها فريق
                      بحث موقع فرصة من عدة مصادر موثوقة بهدف تنمية مهاراتكم
                      الشخصية والحياتية التي يتوقف عليها نجاحكم في الكثير
                      المجالات سواء على الصعيد الأكاديمي أو المهني أو الشخصي،
                      وتحقيق الاستفادة من الفرص التي يتيحها لكم الموقع، والتأكد
                      من أن عملية التقديم قد تمت بالشكل الصحيح
                    </div>
                  </div>

                  <div class="widget widget_recent_entries ul-li-block clearfix">
                    <div className="widget__top">
                      <div class="icon-holder">
                        <img
                          src="https://www.for9a.com/images/oprt_cat/Internships.svg"
                          alt=""
                          class="icon"
                        />
                      </div>
                      <h2 class="widget_title heading">فرص السفر للخارج </h2>
                    </div>
                    <div className="widget__contain">
                      توفر لكم منصة تعلم العديد من المقالات التي قام بجمعها فريق
                      بحث موقع فرصة من عدة مصادر موثوقة بهدف تنمية مهاراتكم
                      الشخصية والحياتية التي يتوقف عليها نجاحكم في الكثير
                      المجالات سواء على الصعيد الأكاديمي أو المهني أو الشخصي،
                      وتحقيق الاستفادة من الفرص التي يتيحها لكم الموقع، والتأكد
                      من أن عملية التقديم قد تمت بالشكل الصحيح
                    </div>
                  </div>

                  <div class="widget widget_recent_entries ul-li-block clearfix">
                    <div className="widget__top">
                      <div class="icon-holder">
                        <img
                          src="https://image.flaticon.com/icons/png/512/1874/1874882.png"
                          alt=""
                          class="icon"
                        />
                      </div>
                      <h2 class="widget_title heading">كلمات دلالية </h2>
                    </div>
                    <div className="widget__contain">
                      <ul className="widget_tags">
                        <li>
                          <a href="#">code</a>
                        </li>
                        <li>
                          <a href="#">design</a>
                        </li>
                        <li>
                          <a href="#">typography</a>
                        </li>
                        <li>
                          <a href="#">development</a>
                        </li>
                        <li>
                          <a href="#">creative</a>
                        </li>
                        <li>
                          <a href="#">codehack</a>
                        </li>
                      </ul>
                    </div>
                  </div>

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
