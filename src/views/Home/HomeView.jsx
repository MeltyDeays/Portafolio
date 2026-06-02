import React from 'react';
import './HomeView.css';

export default function HomeView({ onViewChange }) {
  const projects = [
    {
      id: 'aether',
      title: 'Aether AI',
      industry: 'SAAS Y ORQUESTACIÓN DE IA',
      styleBadge: 'Glassmorphic Cyber-Oscuro',
      colors: 'Azul Cobalto y Violeta Neón',
      desc: 'Plataforma de orquestación de agentes autónomos con simulador interactivo de consola CLI.',
      colorClass: 'aether-theme'
    },
    {
      id: 'bioroot',
      title: 'BioRoot Systems',
      industry: 'BIOTECNOLOGÍA Y AGRO-SISTEMAS',
      styleBadge: 'Minimalismo Orgánico Cálido',
      colors: 'Verde Oliva y Terracota',
      desc: 'Portal de nutrición vegetal regenerativa con simulador interactivo de órbita bacteriana.',
      colorClass: 'bioroot-theme'
    },
    {
      id: 'zenith',
      title: 'Zenith Watches',
      industry: 'RELOJERÍA DE LUJO',
      styleBadge: 'Alto Contraste Premium',
      colors: 'Monocromo y Oro Cepillado',
      desc: 'Catálogo exclusivo de cronometría mecánica con reloj analógico activo en tiempo real.',
      colorClass: 'zenith-theme'
    },
    {
      id: 'finflow',
      title: 'FinFlow',
      industry: 'FINTECH Y MICRO-INVERSIONES',
      styleBadge: 'Neo-Cyberpunk Vibrante',
      colors: 'Verde Ácido y Rosa Neón',
      desc: 'Motor financiero para la Generación Z con tarjeta virtual 3D y simulador dinámico de rendimientos.',
      colorClass: 'finflow-theme'
    },
    {
      id: 'apex',
      title: 'Apex Flight Systems',
      industry: 'AEROESPACIAL CIVIL',
      styleBadge: 'HUD Táctico Sci-Fi',
      colors: 'Rojo Carmesí y Gris Espacial',
      desc: 'Plataforma de turismo espacial suborbital con telemetría viva y fases del perfil de misión.',
      colorClass: 'apex-theme'
    }
  ];

  return (
    <div className="home-portal">
      <div className="portal-glow-1"></div>
      <div className="portal-glow-2"></div>
      
      <div className="portal-container">
        <header className="portal-header">
          <span className="portal-meta-tag">// PORTAFOLIO DE SISTEMAS DE DISEÑO</span>
          <h1 className="portal-main-title">Showcase de Landings MVP</h1>
          <p className="portal-subtitle">
            Cinco productos digitales independientes desarrollados con identidades visuales exclusivas, interacciones complejas en CSS y UX a medida.
          </p>
        </header>

        <main className="portal-showcase-grid">
          {projects.map((project) => (
            <div key={project.id} className={`showcase-card ${project.colorClass}`}>
              <div className="showcase-card-inner">
                <span className="card-industry">{project.industry}</span>
                <h2 className="card-title">{project.title}</h2>
                <p className="card-desc">{project.desc}</p>
                
                <div className="card-meta">
                  <div className="meta-row">
                    <span>Estilo UI:</span>
                    <span className="meta-val">{project.styleBadge}</span>
                  </div>
                  <div className="meta-row">
                    <span>Paleta:</span>
                    <span className="meta-val">{project.colors}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onViewChange(project.id)}
                  className="btn-launch-landing"
                  type="button"
                >
                  Explorar Landing Page
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="btn-arrow-icon"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
