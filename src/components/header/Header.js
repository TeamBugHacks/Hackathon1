import React, { useEffect } from "react";
import "./Header.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header" data-aos="fade-up">
        <h2>IT services.</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter any IT service" />
            <button>Search</button>
          </div>
        </form>
        </div>
        <div>
          <a>Logo making,</a><a>Digital marketing,</a><a>Website designing,</a><a>etc.</a>
        </div>
    </section>
  );
};

export default Header;

