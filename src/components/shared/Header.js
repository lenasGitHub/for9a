import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }
  render() {
    return (
      <header id="header" class="site-header">
        <div
          className={
            this.state.scroll > this.state.top ? "site-header--scrolled" : ""
          }
        >
          <div class="site-header__top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-8 site-header__top--left no-padding">
                  <ul className="site-header__top--social-media ">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <div class="nice-select">
                    <span class="current">English</span>
                    <ul class="list">
                      <li data-value="French" class="option">
                        French
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-4 site-header__top--right no-padding">
                  <a href="#">
                    <span class="lnr lnr-phone-handset" />{" "}
                    <span class="text">Register /</span>
                  </a>
                  <a href="#">
                    <span class="lnr lnr-envelope" />{" "}
                    <span class="text">Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container main-menu site-header__inner">
            <div class="row align-items-center justify-content-between d-flex">
              <div className="site-header__logo">
                <a href="#">
                  <img
                    src="https://www.for9a.com/images/FORSA-logo-white-2.png"
                    alt=""
                    title=""
                  />
                </a>
              </div>
              <div className="site-header__contents">
                <nav className="site-header__nav" id="main-nav">
                  <ul class="site-header__page-list page-list">
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        Home
                      </a>
                    </li>
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        About
                      </a>
                    </li>
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        Courses
                      </a>
                    </li>
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        Events
                      </a>
                    </li>
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        Gallery
                      </a>
                    </li>
                    <li className="page-list__item">
                      <a href="#" className="page-list__link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>



      </header>
    );
  }
}
export default Header;
