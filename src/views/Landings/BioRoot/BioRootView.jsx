import React, { useState, useEffect } from 'react';
import BackToHome from '../../../components/BackToHome';
import bioHero from '../../../assets/bioroot_hero.png';
import './BioRootView.css';

export default function BioRootView({ onViewChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [simRunning, setSimRunning] = useState(true);
  const [nutrientCount, setNutrientCount] = useState(12);

  useEffect(() => {
    let interval;
    if (simRunning) {
      interval = setInterval(() => {
        setNutrientCount((prev) => (prev < 24 ? prev + 1 : 8));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [simRunning]);

  const steps = [
    {
      title: 'Inoculación de la Semilla',
      phase: 'FASE 01',
      desc: 'Los cultivos se recubren con una emulsión rica en microbios activos BioRoot. La envoltura microbiana entra en estado de latencia protectora protegiendo la semilla.'
    },
    {
      title: 'Colonización de la Raíz',
      phase: 'FASE 02',
      desc: 'Al germinar, los microbios despiertan y colonizan la rizosfera. Establecen una red simbiótica que expande la capacidad de absorción de agua de la raíz.'
    },
    {
      title: 'Fijación Acelerada de Nutrientes',
      phase: 'FASE 03',
      desc: 'El enjambre bacteriano procesa el nitrógeno atmosférico y solubiliza el fósforo inorgánico del suelo, entregando alimento directo y orgánico a la planta.'
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bioroot-landing">
      <BackToHome onViewChange={onViewChange} />

      {/* Hero */}
      <section className="bio-hero">
        <div className="bio-container">
          <div className="bio-hero-grid">
            <div className="bio-hero-text">
              <span className="bio-badge">TECNOLOGÍA DE CULTIVO SUSTENTABLE</span>
              <h1 className="bio-title">Bio-Inteligencia Regenerativa para Suelos y Cultivos</h1>
              <p className="bio-desc">
                BioRoot Systems combina microbiología activa y nano-nutrientes para catalizar el rendimiento agrícola sin fertilizantes químicos sintéticos. Rediseñamos la agricultura moderna de raíz.
              </p>
              <div className="bio-cta-group">
                <a href="#solicitar" className="btn-bio-primary">Solicitar Kit de Prueba</a>
                <a href="#ciencia" className="btn-bio-secondary">Ver Proceso Científico</a>
              </div>
            </div>

            <div className="bio-hero-image-container">
              <div className="bio-image-border-decoration"></div>
              <img 
                src={bioHero} 
                alt="Planta brotando de la tierra con raíces luminosas saludables" 
                className="bio-hero-img"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simulador de Ciencia Interactiva */}
      <section className="bio-science-section" id="ciencia">
        <div className="bio-container">
          <div className="bio-section-header-center">
            <span className="bio-badge-sec">// LABORATORIO VIRTUAL BIOROOT</span>
            <h2>Interacción Microbiológica Activa</h2>
            <p>Monitorea cómo las bacterias simbióticas solubilizan micronutrientes para el núcleo de la raíz.</p>
          </div>

          <div className="science-grid">
            <div className="science-visual-panel">
              <div className="science-canvas">
                <div className={`cell-nucleus ${simRunning ? 'pulse' : ''}`}>
                  <span className="nucleus-label">RAÍZ</span>
                </div>
                {Array.from({ length: nutrientCount }).map((_, idx) => {
                  const angle = (idx * 360) / nutrientCount;
                  const distance = 80 + (idx % 3) * 20;
                  const x = Math.cos((angle * Math.PI) / 180) * distance;
                  const y = Math.sin((angle * Math.PI) / 180) * distance;
                  return (
                    <div
                      key={idx}
                      className="microbe-particle"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${idx * 0.15}s`
                      }}
                    ></div>
                  );
                })}
              </div>

              <div className="science-controls">
                <button
                  onClick={() => setSimRunning(!simRunning)}
                  className="btn-control-science"
                  type="button"
                >
                  {simRunning ? 'Pausar Simulación' : 'Reanudar Simulación'}
                </button>
                <div className="science-status">
                  Estado: <span className={simRunning ? 'active' : 'paused'}>{simRunning ? 'Flujo de Nutrientes Activo' : 'Pausado'}</span>
                </div>
              </div>
            </div>

            <div className="science-info-panel">
              <div className="step-accordion">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`accordion-item ${activeStep === idx ? 'expanded' : ''}`}
                  >
                    <button
                      className="accordion-trigger"
                      onClick={() => setActiveStep(idx)}
                      type="button"
                    >
                      <span className="step-phase">{step.phase}</span>
                      <span className="step-title-text">{step.title}</span>
                    </button>
                    <div className="accordion-content">
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas de Métricas de Cultivo */}
      <section className="bio-metrics">
        <div className="bio-container">
          <div className="bio-grid-3">
            <div className="metric-card">
              <span className="metric-num">32%</span>
              <h3>Aumento de Biomasa</h3>
              <p>Incremento constatado en la masa seca radicular y aérea en cultivos de maíz y trigo durante las primeras 6 semanas.</p>
            </div>

            <div className="metric-card">
              <span className="metric-num">40%</span>
              <h3>Ahorro de Agua</h3>
              <p>La red microbiana retiene humedad en la rizosfera, permitiendo al suelo resistir periodos prolongados de sequía.</p>
            </div>

            <div className="metric-card">
              <span className="metric-num">0%</span>
              <h3>Impacto Químico</h3>
              <p>Fórmula 100% biodegradable que regenera el microbioma nativo del suelo sin contaminar mantos acuíferos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solicitar Kit de Prueba */}
      <section className="bio-apply-section" id="solicitar">
        <div className="bio-container">
          <div className="apply-card-bio">
            <div className="apply-header-bio">
              <h2>Solicita un Kit de Prueba BioRoot</h2>
              <p>Envía tus datos y recibe una dosis de inoculante líquido para realizar un ensayo controlado en 1 hectárea de cultivo.</p>
            </div>

            {submitted ? (
              <div className="apply-success-bio" aria-live="polite">
                <h3>¡Solicitud de Kit Registrada!</h3>
                <p>Tu solicitud ha sido procesada por nuestro equipo de agrónomos. Te contactaremos por correo electrónico para coordinar la entrega física del kit.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="apply-form-bio">
                <div className="form-group-bio">
                  <label htmlFor="bio-email">Correo Electrónico de Contacto</label>
                  <input
                    id="bio-email"
                    type="email"
                    className="input-bio"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@agricola.com"
                    required
                    name="grower-email"
                    disabled={loading}
                    spellCheck={false}
                  />
                </div>
                <button type="submit" className="btn-bio-submit" disabled={loading}>
                  {loading ? 'Procesando Envío…' : 'Solicitar Inoculante de Prueba'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bio-footer">
        <div className="bio-container">
          <p>© {new Date().getFullYear()} BioRoot Systems SL. Innovación para la agricultura regenerativa mundial.</p>
        </div>
      </footer>
    </div>
  );
}
