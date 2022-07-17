import "./App.css";
import { useRef, useState, useEffect } from "react";

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
      !isVisible && // to limit setting state only the first time
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
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
  );
}

export default App;
