import "./App.css";

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";

function App() {
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
    </>
  );
}

export default App;
