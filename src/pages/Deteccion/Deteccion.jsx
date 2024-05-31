import React from 'react';
import { Link } from 'react-router-dom';
import chatbotIcon from '../../assets/icons/chatbot.svg';
import deteccionIcon from '../../assets/icons/deteccion.svg';
import homeIcon from '../../assets/icons/home.svg';
import './Deteccion.scss';

const Deteccion = () => {
  return (
    <div className="deteccion-page">
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
        <h1>Detección</h1>
        <div className="detection-window">
          <div className="buttons">
            <button>Subir</button>
            <button>Analizar</button>
            <button>Enviar</button>
            <button>Reset</button>
          </div>
          <div className="detection-area"></div>
        </div>
      </div>
    </div>
  );
};

export default Deteccion;
