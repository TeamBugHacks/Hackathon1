import "./ServiceDetails.css";

const ServiceDetails = ({ logo, icon, title, description, img, sublist }) => {
  return (
    <div className="serviceDetails">
      <nav className="nav">
        <div className="logo">{logo}</div>
      </nav>
      <hr />

      <main className="main">
        <div className="main__content">
          <div className="chip">
            {icon}
            {logo}
          </div>
          <h2 className="main__title">{title}</h2>
          <p>{description}</p>
        </div>

        <main className="img">
          <img src={img} alt={logo} />
        </main>
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
