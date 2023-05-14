import React from "react";
import "../landing/Landing.scss";
import LogIn from "../log-in/LogIn";
import SignUp from "../sign-up/SignUp";
import Category from "../../resources/img/Category.png";
import Assistant from "../../resources/img/Assitant.png";
import Track from "../../resources/img/Track.png";
import Transactions from "../../resources/img/Transactions.png";
import Logo from "../../resources/img/ExpLogo.png";
import Dev from "../../resources/img/Devs.jpg";

const Landing = () => {

  return (
    <>
      <nav>
        <div class="navbar">
          <h1 class="logo">
            <img src={Logo} />
            Expense Tracker
          </h1>
          <ul class="nav-links">
            <li>
              <a href='/register'>Registrarse</a>
            </li>
            <li>
              <a href='/login'>Iniciar Sesión</a>
            </li>
           
          </ul>
        </div>
      </nav>

      <section class="banner">
        <div class="banner-content">
          <h2>
            Mantén una mejor gestión de tus gastos con la aplicación Expense
            Tracker
          </h2>
        </div>
      </section>

      <section class="services">
        <h2>Servicios</h2>
        <div class="service">
          <h3>Registros de Ingresos y Gastos</h3>
          <div class="service-content">
            <img src={Transactions} alt="Imagen del servicio 1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat velit vel metus tempus, sit amet faucibus massa luctus.
              Nullam scelerisque, nisl ac fermentum aliquam, lectus lacus
              fringilla justo, eget pellentesque lorem neque eget odio.
            </p>
          </div>
        </div>
        <div class="service">
          <h3>Historial de Movimientos</h3>
          <div class="service-content">
            <img src={Track} alt="Imagen del servicio 2" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat velit vel metus tempus, sit amet faucibus massa luctus.
              Nullam scelerisque, nisl ac fermentum aliquam, lectus lacus
              fringilla justo, eget pellentesque lorem neque eget odio.
            </p>
          </div>
        </div>
        <div class="service">
          <h3>Clasificación de gastos</h3>
          <div class="service-content">
            <img src={Category} alt="Imagen del servicio 3" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat velit vel metus tempus, sit amet faucibus massa luctus.
              Nullam scelerisque, nisl ac fermentum aliquam, lectus lacus
              fringilla justo, eget pellentesque lorem neque eget odio.
            </p>
          </div>
        </div>
        <div class="service">
          <h3>Asistente de presupuesto</h3>
          <div class="service-content">
            <img src={Assistant} alt="Imagen del servicio 4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat velit vel metus tempus, sit amet faucibus massa luctus.
              Nullam scelerisque, nisl ac fermentum aliquam, lectus lacus
              fringilla justo, eget pellentesque lorem neque eget odio.
            </p>
          </div>
        </div>
      </section>

      <section class="about-us">
        <h2>Acerca de nosotros</h2>
        <div class="about-us-content">
          <div class="about-us-image">
            <img src={Dev} alt="Imagen de Acerca de nosotros" />
          </div>
          <div class="about-us-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat velit vel metus tempus, sit amet faucibus massa luctus.
              Nullam scelerisque, nisl ac fermentum aliquam, lectus lacus
              fringilla justo, eget pellentesque lorem neque eget odio.
            </p>
            <p>
              Maecenas dictum semper ligula, at tempor enim pellentesque eget.
              Aenean maximus dolor id neque mattis, nec egestas odio eleifend.
              Ut vestibulum enim vitae enim interdum, eu eleifend ex dignissim.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;