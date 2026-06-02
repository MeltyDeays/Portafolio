import React from 'react';
import './BackToHome.css';

export default function BackToHome({ onViewChange }) {
  return (
    <button 
      className="back-to-home-btn" 
      onClick={() => onViewChange('home')}
      aria-label="Regresar al portafolio principal"
      type="button"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="back-icon"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      <span className="back-text">Volver al Portafolio</span>
    </button>
  );
}
