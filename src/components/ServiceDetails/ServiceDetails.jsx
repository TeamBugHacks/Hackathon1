import WebIcon from "@mui/icons-material/Web";
import './ServiceDetails.css'

const ServiceDetails = ({logo, icon, title, description, img, sublist}) => {
  return (
    <div className="serviceDetails">
      <nav className="nav">
        <div className="logo">
          <span>web</span>
        </div>
      </nav>
      <hr />

      <main className="main">
        <div className="main__content">
          <div className="chip">
            <WebIcon />
            Web
          </div>
          <h2 className="main__title">Web services at its peek.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            cumque possimus nisi.
          </p>
        </div>

        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
            alt=""
          />
        </div>
      </main>

      <hr />

      <div className="services__sublist">
        <div className="sublist__item">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg"
            alt=""
            className="listItem__img"
          />
          <div className="listItem__title">Frontend</div>
        </div>
        <div className="sublist__item">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg"
            alt=""
            className="listItem__img"
          />
          <div className="listItem__title">Backend</div>
        </div>
        <div className="sublist__item">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg"
            alt=""
            className="listItem__img"
          />
          <div className="listItem__title">Devops</div>
        </div>
        <div className="sublist__item">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg"
            alt=""
            className="listItem__img"
          />
          <div className="listItem__title">Api development</div>
        </div>
        <div className="sublist__item">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,h_64,fl_progressive:steep,q_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg"
            alt=""
            className="listItem__img"
          />
          <div className="listItem__title">DBMS</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ServiceDetails;
