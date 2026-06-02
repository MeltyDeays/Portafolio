import React, { useState } from 'react';
import BackToHome from '../../../components/BackToHome';
import aetherHero from '../../../assets/aether_ai_hero.png';
import './AetherView.css';

export default function AetherView({ onViewChange }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Aether Engine v4.8.2 inicializado.' },
    { type: 'system', text: 'Conexión con nodos neuronales activa.' },
    { type: 'info', text: 'Escribe un comando para orquestar agentes (ej. "desplegar", "estado", "optimizar").' }
  ]);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'user', text: `> ${terminalInput}` }];

    if (cmd === 'desplegar') {
      newLogs.push({ type: 'success', text: 'Desplegando enjambre de agentes cognitivos en 12 nodos…' });
      newLogs.push({ type: 'success', text: 'Clúster de agentes desplegado con éxito (latencia: 14ms).' });
    } else if (cmd === 'estado') {
      newLogs.push({ type: 'info', text: 'Carga del sistema: 14.2% | Agentes Activos: 64 | Integridad: 99.98%' });
    } else if (cmd === 'optimizar') {
      newLogs.push({ type: 'info', text: 'Analizando rutas de almacenamiento e indexación en base de datos…' });
      newLogs.push({ type: 'success', text: 'Optimización completada. Incremento del 32% en consultas cognitivas.' });
    } else if (cmd === 'limpiar') {
      setTerminalLogs([{ type: 'system', text: 'Consola limpia.' }]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({ type: 'error', text: `Comando no reconocido: "${cmd}". Disponibles: desplegar, estado, optimizar, limpiar.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="aether-landing">
      <BackToHome onViewChange={onViewChange} />
      
      {/* Sección Hero */}
      <section className="aether-hero">
        <div className="aether-hero-bg">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
        
        <div className="aether-container">
          <div className="aether-hero-grid">
            <div className="aether-hero-text">
              <span className="badge-tech">AETHER COGNITIVE SUITE</span>
              <h1 className="aether-title">Orquesta Agentes Autónomos en Tiempo Real</h1>
              <p className="aether-description">
                Una infraestructura neuronal diseñada para ejecutar, optimizar y escalar miles de trabajadores cognitivos autónomos con aislamiento nativo y latencia ultrabaja.
              </p>
              <div className="aether-cta-group">
                <a href="#waitlist" className="btn-primary-aether">Unirse a la Lista de Espera</a>
                <a href="#console" className="btn-secondary-aether">Ver Demo Interactiva</a>
              </div>
            </div>
            
            <div className="aether-hero-image-wrapper">
              <div className="aether-image-glow-ring"></div>
              <img 
                src={aetherHero} 
                alt="Visualización abstracta de red neuronal y agentes autónomos" 
                className="aether-hero-img"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consola Interactiva */}
      <section className="aether-console-section" id="console">
        <div className="aether-container">
          <div className="aether-console-grid">
            <div className="aether-console-intro">
              <span className="sub-badge">TERMINAL CLI INTERACTIVA</span>
              <h2>Prueba el Control de Nodos en Directo</h2>
              <p>Envía directivas de optimización y despliegue directamente al clúster de agentes simulado en el CLI de la derecha.</p>
              <div className="console-tip">
                <strong>Consejo:</strong> Escribe <code translate="no">desplegar</code> u <code translate="no">optimizar</code> en la consola y presiona Enter.
              </div>
            </div>

            <div className="aether-console-wrapper">
              <div className="console-header">
                <div className="console-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="console-title">aether-interactive-cli</div>
              </div>
              <div className="console-body">
                <div className="console-logs">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={`console-line ${log.type}`}>
                      {log.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleCommandSubmit} className="console-input-form">
                  <span className="prompt-symbol">$</span>
                  <input
                    type="text"
                    className="console-input"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Escribe desplegar, estado u optimizar…"
                    autoComplete="off"
                    name="terminal-cmd"
                    aria-label="Entrada de consola interactiva"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="aether-features">
        <div className="aether-container">
          <div className="aether-section-header">
            <span className="sub-badge">CAPACIDADES CLAVE</span>
            <h2>Arquitectura para Escalado de IA</h2>
            <p>Implementa flujos de trabajo críticos de agentes con aislamiento de nivel empresarial y mínimo consumo de recursos.</p>
          </div>
          
          <div className="aether-features-grid">
            <div className="aether-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>Orquestación de Enjambres</h3>
              <p>Ejecuta miles de agentes cognitivos especializados que colaboran de manera dinámica mediante canales de memoria de alto rendimiento.</p>
            </div>

            <div className="aether-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Caché de Latencia Cero</h3>
              <p>Almacenamiento instantáneo de respuestas de agentes en memoria compartida, reduciendo costos de APIs redundantes hasta en un 60%.</p>
            </div>

            <div className="aether-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Micro-Entornos Seguros</h3>
              <p>Cada agente opera de forma aislada en un entorno micro-VM seguro, evitando escalamientos de privilegios no autorizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifas */}
      <section className="aether-pricing">
        <div className="aether-container">
          <div className="aether-section-header">
            <span className="sub-badge">PLANES DE ACCESO</span>
            <h2>Escalabilidad a tu Medida</h2>
          </div>
          
          <div className="aether-pricing-grid">
            <div className="price-card">
              <div className="price-header">
                <h4>Desarrollador</h4>
                <div className="price-amount">$0<span>/ mes</span></div>
              </div>
              <ul className="price-features">
                <li>Hasta 5 agentes activos concurrentes</li>
                <li>Caché de contexto compartida</li>
                <li>Colas de ejecución estándar</li>
                <li>100k tokens de agente al día</li>
              </ul>
              <a href="#waitlist" className="btn-price">Comenzar Gratis</a>
            </div>
            
            <div className="price-card popular">
              <div className="popular-badge">MÁS ELEGIDO</div>
              <div className="price-header">
                <h4>Escala</h4>
                <div className="price-amount">$89<span>/ mes</span></div>
              </div>
              <ul className="price-features">
                <li>Hasta 100 agentes concurrentes</li>
                <li>Clúster de caché de contexto dedicada</li>
                <li>Colas de latencia ultrabaja prioritarias</li>
                <li>Tokens de agentes locales ilimitados</li>
                <li>Despliegue de endpoints de API privados</li>
              </ul>
              <a href="#waitlist" className="btn-price-popular">Actualizar a Escala</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de espera */}
      <section className="aether-waitlist" id="waitlist">
        <div className="aether-container text-center">
          <div className="waitlist-card">
            <h2>Accede a la Beta Privada</h2>
            <p>El acceso a la infraestructura está limitado actualmente. Regístrate en la lista de espera para recibir tu invitación de acceso.</p>
            
            {submitted ? (
              <div className="waitlist-success" aria-live="polite">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="success-check" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3>¡Te has registrado con éxito!</h3>
                <p>Te enviaremos una invitación de acceso pronto. Revisa tu bandeja de entrada.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
                <div className="waitlist-input-group">
                  <input
                    type="email"
                    className="waitlist-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico profesional…"
                    required
                    name="waitlist-email"
                    disabled={loading}
                    spellCheck={false}
                    aria-label="Correo electrónico para lista de espera"
                  />
                  <button type="submit" className="btn-waitlist-submit" disabled={loading}>
                    {loading ? 'Registrando…' : 'Reservar Mi Lugar'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="aether-footer">
        <div className="aether-container">
          <div className="footer-layout">
            <span className="footer-logo">AETHER AI</span>
            <p>© {new Date().getFullYear()} Aether Technologies Inc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
