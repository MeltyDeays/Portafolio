import React, { useState, useEffect } from 'react';
import BackToHome from '../../../components/BackToHome';
import apexHero from '../../../assets/apex_space_hero.png';
import './ApexView.css';

export default function ApexView({ onViewChange }) {
  const [countdown, setCountdown] = useState(86400 * 14 + 3600 * 4); // countdown in seconds
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Dynamic telemetry metrics
  const [telemetry, setTelemetry] = useState({
    thrust: 1420000,
    pressure: 14.7,
    gForce: 1.0
  });

  const [formData, setFormData] = useState({
    name: '',
    gravityExp: 'Sin exposición previa a la fuerza G',
    flightClass: 'Explorador Suborbital (4 min de gravedad cero)'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      
      // Simulate live fluctuating metrics
      setTelemetry({
        thrust: Math.round(1420000 + (Math.random() - 0.5) * 5000),
        pressure: Number((14.7 + (Math.random() - 0.5) * 0.1).toFixed(2)),
        gForce: Number((1.0 + (Math.random() - 0.5) * 0.05).toFixed(2))
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = () => {
    const days = Math.floor(countdown / 86400);
    const hours = Math.floor((countdown % 86400) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${days}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`;
  };

  const flightPhases = [
    {
      title: 'ENCENDIDO DE PROPULSORES',
      altitude: '0 km',
      velocity: 'Mach 0',
      desc: 'Los propulsores de oxígeno líquido y queroseno se encienden generando 1.4 millones de libras de empuje, acelerando la cápsula tripulada a Mach 3 en 90 segundos.'
    },
    {
      title: 'MAX-Q Y SEPARACIÓN',
      altitude: '42 km',
      velocity: 'Mach 3.2',
      desc: 'La presión aerodinámica alcanza su punto máximo. El propulsor principal se apaga y un sistema neumático libera la cápsula para continuar flotando hacia el espacio.'
    },
    {
      title: 'APOGEO Y GRAVEDAD CERO',
      altitude: '104 km',
      velocity: 'Mach 0.1',
      desc: 'Cruce exitoso de la Línea de Kármán. Los tripulantes pueden desabrocharse los arneses para experimentar 4 minutos de ingravidez real y vistas panorámicas de la Tierra.'
    },
    {
      title: 'REINGRESO Y ATERRIZAJE',
      altitude: '15 km',
      velocity: '240 km/h',
      desc: 'La compresión atmosférica frena la cápsula. Los paracaídas se despliegan en fases, culminando en un suave aterrizaje amortiguado por retrocohetes en el desierto.'
    }
  ];

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 1500);
  };

  return (
    <div className="apex-landing">
      <BackToHome onViewChange={onViewChange} />

      {/* Hero Section */}
      <section className="apex-hero">
        <div className="grid-overlay"></div>
        <div className="apex-container">
          <div className="apex-hero-grid">
            <div className="apex-hero-text">
              <span className="apex-badge">COMPATIBLE CON VENTANA DE LANZAMIENTO</span>
              <h1 className="apex-title">OPERACIONES ESPACIALES CIVILES</h1>
              <p className="apex-desc">
                Apex Flight Systems ofrece misiones privadas suborbitales cruzando la línea de Kármán. Entrena como astronauta, cruza la atmósfera y experimenta vistas planetarias inmersivas.
              </p>
              
              <div className="hud-countdown-box">
                <div className="hud-label">// PRÓXIMA APERTURA DE VENTANA</div>
                <div className="hud-time">{formatCountdown()}</div>
              </div>

              <div className="apex-cta-group">
                <a href="#solicitud" className="btn-apex-primary">Postular al Vuelo</a>
                <a href="#cronograma" className="btn-apex-secondary">Cronograma de Misión</a>
              </div>
            </div>

            <div className="apex-hud-display">
              <div className="hud-panel">
                <div className="hud-panel-header">
                  <span>TELEMETRÍA_VIVA</span>
                  <span className="blink-dot">● GRAVANDO</span>
                </div>
                
                {/* Embedded Hero Image as HUD Visual Feed */}
                <div className="hud-visual-feed-wrapper">
                  <div className="hud-scanline-effect"></div>
                  <img 
                    src={apexHero} 
                    alt="Cápsula suborbital Apex orbitando la Tierra" 
                    className="hud-live-camera-img"
                    width="400"
                    height="200"
                  />
                  <span className="hud-cam-tag">CAM_EXT_A</span>
                </div>

                <div className="hud-panel-body">
                  <div className="telemetry-row">
                    <span>EMPUJE_PROP</span>
                    <span>{telemetry.thrust.toLocaleString()} LBF</span>
                  </div>
                  <div className="telemetry-row">
                    <span>PRESION_CABINA</span>
                    <span>{telemetry.pressure} PSI (NOMINAL)</span>
                  </div>
                  <div className="telemetry-row">
                    <span>FUERZA_G_MÁX</span>
                    <span>{telemetry.gForce} G</span>
                  </div>
                  <div className="hud-radar-simulation">
                    <div className="radar-sweep"></div>
                    <div className="radar-target"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Phases Timeline */}
      <section className="apex-timeline" id="cronograma">
        <div className="apex-container">
          <div className="apex-section-header">
            <span className="apex-sub">// PERFIL DE MISIÓN SUBORBITAL</span>
            <h2>Fases de la Trayectoria de Vuelo</h2>
          </div>

          <div className="timeline-grid-layout">
            <div className="timeline-selector-side">
              {flightPhases.map((phase, idx) => (
                <button
                  key={idx}
                  className={`timeline-step-btn ${selectedPhase === idx ? 'active' : ''}`}
                  onClick={() => setSelectedPhase(idx)}
                  type="button"
                >
                  <span className="step-index">FASE 0{idx + 1}</span>
                  <span className="step-title">{phase.title}</span>
                </button>
              ))}
            </div>

            <div className="timeline-desc-side">
              <div className="hud-data-card">
                <div className="data-card-grid">
                  <div>
                    <span className="data-lbl">ALTITUD DE DISEÑO</span>
                    <span className="data-val">{flightPhases[selectedPhase].altitude}</span>
                  </div>
                  <div>
                    <span className="data-lbl">VELOCIDAD ESTIMADA</span>
                    <span className="data-val">{flightPhases[selectedPhase].velocity}</span>
                  </div>
                </div>
                <div className="data-body-desc">
                  <h3>{flightPhases[selectedPhase].title}</h3>
                  <p>{flightPhases[selectedPhase].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="apex-specs">
        <div className="apex-container">
          <div className="apex-grid-3">
            <div className="apex-spec-card">
              <span className="card-num">// 01</span>
              <h3>Escudo Compuesto 904L</h3>
              <p>Estructura reforzada con aleación de titanio y baldosas térmicas de doble redundancia para soportar temperaturas de reingreso superiores a 1,600°C.</p>
            </div>
            
            <div className="apex-spec-card">
              <span className="card-num">// 02</span>
              <h3>Miradores Panorámicos</h3>
              <p>Ventanas de vidrio de silicato templado con triple capa de presión, representando los portillos ópticos más grandes jamás volados en el espacio suborbital.</p>
            </div>

            <div className="apex-spec-card">
              <span className="card-num">// 03</span>
              <h3>Escape en Lanzamiento</h3>
              <p>Motores de combustible sólido montados en la torre superior, capaces de alejar la cápsula tripulada del propulsor en 0.8s en caso de anomalía.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="apex-apply" id="solicitud">
        <div className="apex-container">
          <div className="apply-card-hud">
            <div className="apply-header-hud">
              <h2>POSTULACIÓN A TRIPULANTE CIVIL</h2>
              <p>Completa tus métricas de aptitud. El acceso a las ranuras de vuelo requiere aprobación médica rigurosa y entrenamiento físico presencial.</p>
            </div>

            {applied ? (
              <div className="apply-success-hud" aria-live="polite">
                <h3>EXPEDIENTE DE POSTULACIÓN LOGUEADO</h3>
                <p>Estado: En Revisión. Tu firma y perfil han sido registrados en la cola de asignación de slots de vuelo. Aguarda comunicación oficial para las pruebas físicas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="apply-form-hud">
                <div className="form-group-hud">
                  <label htmlFor="apex-name">Nombre Completo del Postulante</label>
                  <input
                    id="apex-name"
                    type="text"
                    className="input-hud"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. CAP. JAMES HOLDEN"
                    required
                    name="astronaut-name"
                    disabled={loading}
                    spellCheck={false}
                  />
                </div>

                <div className="form-group-hud">
                  <label htmlFor="apex-gravity">Historial de Exposición G</label>
                  <select
                    id="apex-gravity"
                    className="input-hud"
                    value={formData.gravityExp}
                    onChange={(e) => setFormData({...formData, gravityExp: e.target.value})}
                    name="gravity-experience"
                    disabled={loading}
                  >
                    <option value="Sin exposición previa a la fuerza G">Sin exposición previa a la fuerza G</option>
                    <option value="Certificación en centrífuga centrada">Certificación en centrífuga centrada</option>
                    <option value="Experiencia en vuelos acrobáticos militares">Experiencia en vuelos acrobáticos militares</option>
                  </select>
                </div>

                <div className="form-group-hud">
                  <label htmlFor="apex-class">Clase de Ranura de Vuelo</label>
                  <select
                    id="apex-class"
                    className="input-hud"
                    value={formData.flightClass}
                    onChange={(e) => setFormData({...formData, flightClass: e.target.value})}
                    name="flight-class"
                    disabled={loading}
                  >
                    <option value="Explorador Suborbital (4 min de gravedad cero)">Explorador Suborbital (4 min de gravedad cero)</option>
                    <option value="Pionero Orbital (3 días en órbita baja terrestre)">Pionero Orbital (3 días en órbita baja terrestre)</option>
                  </select>
                </div>

                <button type="submit" className="btn-hud-submit" disabled={loading}>
                  {loading ? 'TRANSMITIENDO EXPEDIENTE…' : 'TRANSMITIR DATOS DE POSTULACIÓN'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="apex-footer">
        <div className="apex-container">
          <p>© {new Date().getFullYear()} Apex Flight Systems. Operaciones clasificadas de entrenamiento civil.</p>
        </div>
      </footer>
    </div>
  );
}
