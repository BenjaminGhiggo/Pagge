import React from 'react';
import { Link } from 'react-router-dom';
import chatbotIcon from '../../assets/icons/chatbot.svg';
import chatbotMainIcon from '../../assets/icons/chatbot_main.svg';
import deteccionIcon from '../../assets/icons/deteccion.svg';
import homeIcon from '../../assets/icons/home.svg';
import microphoneIcon from '../../assets/icons/microphone.svg';
import profileIcon from '../../assets/icons/profile.svg';
import sendIcon from '../../assets/icons/send.svg';
import './Chatbot.scss';

const Chatbot = () => {
  return (
    <div className="chatbot-page">
      <div className="sidebar">
        <Link to="/"><div className="icon-text"><img src={homeIcon} alt="Home" /><div>Home</div></div></Link>
        <Link to="/chatbot"><div className="icon-text"><img src={chatbotIcon} alt="Chatbot" /><div>Chatbot</div></div></Link>
        <Link to="/deteccion"><div className="icon-text"><img src={deteccionIcon} alt="Detección" /><div>Detección</div></div></Link>
      </div>
      <div className="content">
        <h1>Chatbot</h1>
        <div className="chat-window">
          <div className="chat-input">
            <img src={chatbotMainIcon} alt="Chatbot Icon" className="chatbot-main-icon" />
            <input type="text" placeholder="Escribe un mensaje..." className="chat-input-text"/>
            <button className="chat-input-button"><img src={microphoneIcon} alt="Microphone" className="icon" /></button>
            <button className="chat-input-button"><img src={sendIcon} alt="Send" className="icon" /></button>
            <button className="chat-input-button"><img src={profileIcon} alt="Profile" className="icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
