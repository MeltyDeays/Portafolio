import React, { useState, useEffect } from 'react';
import BackToHome from '../../../components/BackToHome';
import zenithHero from '../../../assets/zenith_watch_hero.png';
import './ZenithView.css';

export default function ZenithView({ onViewChange }) {
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('caliber');
  const [reserveSubmitted, setReserveSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate hands angles
  const getSecondsAngle = () => {
    return time.getSeconds() * 6;
  };
  const getMinutesAngle = () => {
    return time.getMinutes() * 6 + time.getSeconds() * 0.1;
  };
  const getHoursAngle = () => {
    return (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  };

  const specifications = {
    caliber: {
      title: 'Calibre Zenith 920',
      description: 'Cronómetro automático de manufactura propia con escape de silicio y masa oscilante calada. Posee una reserva de marcha de 72 horas y palpita a una frecuencia alternada de 4 Hz (28,800 alternancias por hora).'
    },
    materials: {
      title: 'Titanio Grado 5 y Oro de 18K',
      description: 'La caja de 41 mm está forjada en titanio aeroespacial cepillado con un bisel de oro macizo. El cristal es de zafiro abombado con tratamiento antirreflejos de doble capa en ambas caras.'
    },
    dial: {
      title: 'Esfera de Cristal Aventurina',
      description: 'El fondo del dial simula un firmamento estrellado mediante cristal aventurina natural azul profundo, adornado con índices facetados y manecillas recubiertas con oro pulido.'
    }
  };

  const handleReserve = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReserveSubmitted(true);
    }, 1500);
  };

  return (
    <div className="zenith-landing">
      <BackToHome onViewChange={onViewChange} />

      {/* Hero */}
      <section className="zenith-hero">
        <div className="zenith-container">
          <div className="zenith-hero-grid">
            <div className="zenith-hero-text">
              <span className="zenith-badge-gold">CRONOMETRÍA MECÁNICA EXCLUSIVA</span>
              <h1 className="zenith-title">La Vanguardia del Tiempo</h1>
              <p className="zenith-desc">
                Presentamos la serie limitada Zenith Aventurine. Una obra maestra de la alta relojería que combina la dureza del titanio grado 5 con el brillo natural de las estrellas en su dial de aventurina.
              </p>
              
              <div className="zenith-cta-group">
                <a href="#reservar" className="btn-zenith-primary">Agendar Presentación Privada</a>
                <a href="#especificaciones" className="btn-zenith-secondary">Especificaciones</a>
              </div>
            </div>

            <div className="zenith-watch-showcase">
              <div className="watch-display-wrapper">
                <div className="mechanical-clock" aria-label="Reloj mecánico en tiempo real">
                  <div className="clock-face">
                    <div className="marker-12"></div>
                    <div className="marker-3"></div>
                    <div className="marker-6"></div>
                    <div className="marker-9"></div>
                    <div className="inner-ring"></div>
                    
                    {/* Hands */}
                    <div 
                      className="hand hours" 
                      style={{ transform: `rotate(${getHoursAngle()}deg)` }}
                    ></div>
                    <div 
                      className="hand minutes" 
                      style={{ transform: `rotate(${getMinutesAngle()}deg)` }}
                    ></div>
                    <div 
                      className="hand seconds" 
                      style={{ transform: `rotate(${getSecondsAngle()}deg)` }}
                    ></div>
                    
                    <div className="center-pin"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones y Foto */}
      <section className="zenith-specs-section" id="especificaciones">
        <div className="zenith-container">
          <div className="zenith-section-header">
            <span className="gold-sub">// DETALLES E INGENIERÍA</span>
            <h2>Artesanía de Manufactura</h2>
          </div>

          <div className="specs-grid-layout">
            <div className="specs-image-side">
              <div className="gold-shadow-glow"></div>
              <img 
                src={zenithHero} 
                alt="Detalle de engranajes y acabados de oro del reloj Zenith" 
                className="specs-watch-img"
                width="500"
                height="400"
              />
            </div>

            <div className="specs-tabs-side">
              <div className="specs-tabs-buttons">
                {Object.keys(specifications).map((tabKey) => (
                  <button
                    key={tabKey}
                    className={`spec-tab-btn ${activeTab === tabKey ? 'active' : ''}`}
                    onClick={() => setActiveTab(tabKey)}
                    type="button"
                  >
                    {tabKey === 'caliber' ? 'El Calibre' : tabKey === 'materials' ? 'Materiales' : 'Esfera'}
                  </button>
                ))}
              </div>

              <div className="spec-content-card">
                <h3>{specifications[activeTab].title}</h3>
                <p>{specifications[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserva Privada */}
      <section className="zenith-reserve" id="reservar">
        <div className="zenith-container">
          <div className="reserve-card-gold">
            <div className="reserve-header">
              <h2>Solicitud de Adquisición</h2>
              <p>Nuestras piezas de edición limitada se presentan únicamente en visualización privada presencial. Proporciona tus datos para coordinar una cita con nuestro asesor regional.</p>
            </div>

            {reserveSubmitted ? (
              <div className="reserve-success" aria-live="polite">
                <h3>SOLICITUD REGISTRADA</h3>
                <p>Un concierge de Zenith Watches se pondrá en contacto con usted en las próximas 24 horas hábiles mediante llamada confidencial.</p>
              </div>
            ) : (
              <form onSubmit={handleReserve} className="reserve-form">
                <div className="form-group-gold">
                  <label htmlFor="zenith-name">Nombre Completo del Titular</label>
                  <input
                    id="zenith-name"
                    type="text"
                    className="input-gold"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. SANTIAGO DE LAS CASAS"
                    required
                    name="client-name"
                    disabled={loading}
                    spellCheck={false}
                  />
                </div>

                <div className="form-group-gold">
                  <label htmlFor="zenith-phone">Teléfono de Contacto Directo</label>
                  <input
                    id="zenith-phone"
                    type="tel"
                    className="input-gold"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g. +34 600 000 000"
                    required
                    name="client-phone"
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn-gold-submit" disabled={loading}>
                  {loading ? 'REGISTRANDO EN BASE DE DATOS…' : 'CONFIRMAR AGENDAMIENTO PRIVADO'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="zenith-footer">
        <div className="zenith-container">
          <p>© {new Date().getFullYear()} Zenith Haute Horlogerie. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
