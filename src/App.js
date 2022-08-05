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
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import ContentDetails from "./components/ContentDetails/ContentDetails";
import LogoDetails from "./components/LogoDetails/LogoDetails";
import DigitalDetails from "./components/DigitalDetails/DigitalDetails";
import WebsiteDetails from "./components/WebsiteDetails/WebsiteDetails";
import MobileDetails from "./components/MobileDetails/MobileDetails";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import {auth, db} from "./firebase/config";

// export class App extends Component {

//   state-{
//     user: null
//   }

//   componentDidMount(){
//     auth.onAuthStatechanged(user->{
//       if(user){
//         db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot->{
//           this.setState({
//             user: snapshot.data().Name
//           })
//         })
//       }
//       else{
//         this.setState({
//           user: null
//         })
//       }
//     })
//   }

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
          <Route path='/' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/service' element={<ServiceDetails/>}/>
          <Route path='/logo-making' element={<LogoDetails/>}/>
          <Route path='/content-writing' element={<ContentDetails/>}/>
          <Route path='/digital-marketing' element={<DigitalDetails/>}/>
          <Route path='/website-designing' element={<WebsiteDetails/>}/>
          <Route path='/mobile-application' element={<MobileDetails/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
