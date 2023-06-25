import React from "react";
import "../landing/Landing.scss";
import Logo from "../../resources/img/ExpLogo.png";
import Dev from "../../resources/img/Devs.jpg";
import Category from "../../resources/img/Category.png";
import Assistant from "../../resources/img/Assitant.png";
import Track from "../../resources/img/Track.png";
import Transactions from "../../resources/img/Transactions.png";


const Landing = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="logo">
            <img src={Logo} alt="Expense Tracker Logo" />
            Expense Tracker
          </h1>
          <ul className="nav-links">
            <li>
              <a href="/register">Registrarse</a>
            </li>
            <li>
              <a href="/login">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="banner bg-primary text-white text-center py-5">
        <div className="container">
          <h2>
            Mantén una mejor gestión de tus gastos con la aplicación Expense
            Tracker
          </h2>
        </div>
      </section>

      <section className="services py-5">
        <div className="container">
          <h2 className="text-center mb-5">Servicios</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service text-center">
                <h3>Registros de Ingresos y Gastos</h3>
                <div className="service-content">
                  <img src={Transactions} alt="Imagen del servicio 1" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat velit vel metus tempus, sit amet faucibus
                    massa luctus. Nullam scelerisque, nisl ac fermentum aliquam,
                    lectus lacus fringilla justo, eget pellentesque lorem neque
                    eget odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service text-center">
                <h3>Historial de Movimientos</h3>
                <div className="service-content">
                  <img src={Track} alt="Imagen del servicio 2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat velit vel metus tempus, sit amet faucibus
                    massa luctus. Nullam scelerisque, nisl ac fermentum aliquam,
                    lectus lacus fringilla justo, eget pellentesque lorem neque
                    eget odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service text-center">
                <h3>Clasificación de gastos</h3>
                <div className="service-content">
                  <img src={Category} alt="Imagen del servicio 3" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat velit vel metus tempus, sit amet faucibus
                    massa luctus. Nullam scelerisque, nisl ac fermentum aliquam,
                    lectus lacus fringilla justo, eget pellentesque lorem neque
                    eget odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="service text-center">
                <h3>Asistente de presupuesto</h3>
                <div className="service-content">
                  <img src={Assistant} alt="Imagen del servicio 4" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat velit vel metus tempus, sit amet faucibus
                    massa luctus. Nullam scelerisque, nisl ac fermentum aliquam,
                    lectus lacus fringilla justo, eget pellentesque lorem neque
                    eget odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us py-5">
        <div className="container">
          <h2 className="text-center mb-5">Acerca de nosotros</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="about-us-content">
                <div className="about-us-image">
                  <img src={Dev} alt="Imagen de Acerca de nosotros" />
                </div>
                <div className="about-us-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat velit vel metus tempus, sit amet faucibus
                    massa luctus. Nullam scelerisque, nisl ac fermentum aliquam,
                    lectus lacus fringilla justo, eget pellentesque lorem neque
                    eget odio.
                  </p>
                  <p>
                    Maecenas dictum semper ligula, at tempor enim pellentesque
                    eget. Aenean maximus dolor id neque mattis, nec egestas odio
                    eleifend. Ut vestibulum enim vitae enim interdum, eu
                    eleifend ex dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
