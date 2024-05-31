import React from 'react';
import { Link } from 'react-router-dom';
import chatbotIcon from '../../assets/icons/chatbot.svg';
import deteccionIcon from '../../assets/icons/deteccion.svg';
import homeIcon from '../../assets/icons/home.svg';
import video from '../../assets/video/video.mp4'; // Importa el video
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="sidebar">
        <Link to="/">
          <div className="icon-text">
            <img src={homeIcon} alt="Home" />
            <div>Home</div>
          </div>
        </Link>
        <Link to="/chatbot">
          <div className="icon-text">
            <img src={chatbotIcon} alt="Chatbot" />
            <div>Chatbot</div>
          </div>
        </Link>
        <Link to="/deteccion">
          <div className="icon-text">
            <img src={deteccionIcon} alt="Detección" />
            <div>Detección</div>
          </div>
        </Link>
      </div>
      <div className="content">
        <h1>Universidad Nacional de Ingeniería</h1>
        <p>Desarrollo de un Sistema de Detección de Cáncer de Tórax y Chatbot Asistente para Recomendación de Tratamiento</p>
        <p>Ghiggo de la Cruz Víctor Benjamín 20190128H</p>
        <p>5/31/2024</p>
      </div>
    </div>
  );
};

export default Home;
