import React from 'react';
import whatsappIcon from '../../assets/WhatsApp.svg'; 

const Chatbot = () => {
  const whatsappNumber = '919966764646';

  return (
    <div
      className="fixed-bottom p-3 d-flex flex-column align-items-end"
      style={{ zIndex: 1000 }}
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-circle"
        style={{
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          style={{ width: '40px', height: '40px' }}
        />
      </a>
    </div>
  );
};

export default Chatbot;
