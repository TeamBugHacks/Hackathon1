import "./App.css";
import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Landing } from "./components/Landing/Landing";
import { Cart } from "./components/Cart/Cart";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 40) {
      !isVisible &&
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route
            path="/services"
            element={
              <>
                <header className="header-bg">
                  <Navbar />
                  <Header />
                </header>
                <Features data-aos="fade-up" />
                <Download />
                <Subscribe />
                <Faq />
                <Footer />
                {isVisible && (
                  <div className="takeBackToTop">
                    <ArrowUpwardIcon
                      onClick={scrollToTop}
                      font-size="small"
                      sx={{ height: "25px", width: "30px" }}
                    />
                  </div>
                )}
              </>
            }
          />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
