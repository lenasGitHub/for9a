import React, { Component } from "react";

import HeaderTop from "./HeaderTop";

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
          <HeaderTop />
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
