import React, { useEffect } from "react";
import "./Header.css";

import AOS from "aos";
import "aos/dist/aos.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="header">
        <div className="container header" data-aos="fade-up">
          <h2>IT services, on demand.</h2>
          <form>
            <div className="form-control">
              <div className="search__icon">
                <SearchIcon sx={{ height: "20px", width: "20px" }} />
              </div>
              <input
                type="text"
                placeholder="Search any IT service"
                className="service__input"
              />
              <button className="service__btn">Search</button>
            </div>
          </form>
        </div>
        <div className="services__link">
          <a href="/logo-making"> Logo making</a>
          <a href="/content-writing"> Content Writing</a>
          <a href="/digital-marketing"> Digit Marketing</a>
          <a href="/logo-making"> Logo making</a>
          <a href="/website-designing"> Website designing</a>
        </div>
      </section>

      <div className="services__container">
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
            alt=""
          />
          <a href="/logo-making">Logo making</a>
        </div>
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/38/38002.png"
            alt=""
          />
          <a href="/mobile-application">Mobile Application</a>
        </div>
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684831.png"
            alt=""
          />
          <span>Content Writing</span>
        </div>
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684831.png"
            alt=""
          />
          <span>Logo Making</span>
        </div>
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684831.png"
            alt=""
          />
          <span>content writing</span>
        </div>
        <div className="services__item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684831.png"
            alt=""
          />
          <span>content writing</span>
        </div>
      </div>
    </>
  );
};

export default Header;
