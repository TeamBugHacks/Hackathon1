import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import AOS from "aos";
import "aos/dist/aos.css";
import { Stack, Autocomplete, TextField } from "@mui/material";

const services = [
  "Web dev",
  "App dev",
  "Digital Marketing",
  "Logo Making",
  "Content writing",
];
const servicesOptions = services.map((service, index) => ({
  id: index + 1,
  label: service,
}));

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [value, setValue] = useState(null);
  const [service, setService] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <section id="header">
        <div className="container header" data-aos="fade-up">
          <h2>IT services, on demand.</h2>
          <form>
            <Autocomplete
              options={servicesOptions}
              renderInput={(params) => (
                <TextField
                  color="primary"
                  variant="filled"
                  {...params}
                  label="Services"
                  sx={{ backgroundColor: "#eee", '&:hover':{
                    backgroundColor: '#fff'
                  },
                  transition: '.3s ease-in'
                 }}
                />
              )}
              value={service}
              onChange={(e, newValue) => {
                setService(newValue);
                navigate("/website-designing");
              }}
            />
          </form>
        </div>
        <div className="services__link">
          <Stack direction="row" spacing={1}>
            <Link to="/logo-making">
              <Chip
                sx={{ cursor: "pointer" }}
                label="Logo Making"
                variant="contained"
                color="primary"
              />
            </Link>
            <Link to="/website-designing">
              <Chip
                sx={{ cursor: "pointer" }}
                label="Web designing"
                variant="contained"
                color="primary"
              />
            </Link>
            <Link to="/mobile-application">
              <Chip
                sx={{ cursor: "pointer" }}
                label="App dev"
                variant="contained"
                color="primary"
              />
            </Link>
            <Link to="/content-writing">
              <Chip
                sx={{ cursor: "pointer" }}
                label="Content writing"
                variant="contained"
                color="primary"
              />
            </Link>
            <Link to="/digital-marketing">
              <Chip
                label="Digital marketing"
                variant="contained"
                color="primary"
              />
            </Link>
          </Stack>
        </div>
      </section>

      <div className="services__container">
        <div className="services__item">
          <Link to="/website-designing">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
              alt=""
            />
            <span>Logo making</span>
          </Link>
        </div>
        <div className="services__item">
          <Link to="/logo-making">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
              alt=""
            />
            <span>Logo making</span>
          </Link>
        </div>
        <div className="services__item">
          <Link to="/mobile-application">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
              alt=""
            />
            <span>App dev</span>
          </Link>
        </div>
        <div className="services__item">
          <Link to="/content-writing">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
              alt=""
            />
            <span>Content Writing</span>
          </Link>
        </div>
        <div className="services__item">
          <Link to="/digital-marketing">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1231/1231223.png"
              alt=""
            />
            <span>Digital marketing</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
