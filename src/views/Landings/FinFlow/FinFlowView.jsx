import React, { useState } from 'react';
import BackToHome from '../../../components/BackToHome';
import finflowHero from '../../../assets/finflow_card_hero.png';
import './FinFlowView.css';

export default function FinFlowView({ onViewChange }) {
  const [monthlyInv, setMonthlyInv] = useState(150);
  const [years, setYears] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  // Compound interest simulation (8% annual return estimated)
  const calcTotalYield = () => {
    const r = 0.08 / 12;
    const n = years * 12;
    let total = 0;
    for (let i = 0; i < n; i++) {
      total = (total + monthlyInv) * (1 + r);
    }
    return Math.round(total);
  };

  const calcInvestedAmount = () => {
    return monthlyInv * 12 * years;
  };

  const calcProfit = () => {
    return calcTotalYield() - calcInvestedAmount();
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="finflow-landing">
      <BackToHome onViewChange={onViewChange} />

      {/* Hero */}
      <section className="fin-hero">
        <div className="fin-container">
          <div className="fin-hero-grid">
            <div className="fin-hero-text">
              <span className="fin-badge">EL FUTURO DE LA INVERSIÓN</span>
              <h1 className="fin-title">Haz Crecer Tu Dinero Sin Complicaciones</h1>
              <p className="fin-desc">
                FinFlow es el motor de micro-inversiones diseñado para la Generación Z. Invierte tus vueltos, define aportes recurrentes automáticos y observa cómo tu rendimiento crece de forma compuesta.
              </p>
              
              <div className="fin-cta-group">
                <a href="#calculadora" className="btn-fin-primary">Simular Mi Rendimiento</a>
                <a href="#descargar" className="btn-fin-secondary">Solicitar Acceso Temprano</a>
              </div>
            </div>

            <div className="fin-card-interactive-wrapper">
              <div className="fin-visual-card-3d">
                <div className="card-shine-effect"></div>
                <img 
                  src={finflowHero} 
                  alt="Tarjeta holográfica FinFlow flotando en red financiera neón" 
                  className="fin-card-hero-img"
                  width="500"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora Interactiva */}
      <section className="fin-calculator-section" id="calculadora">
        <div className="fin-container">
          <div className="fin-section-header">
            <span className="purple-sub">// CALCULADORA DE APORTE COMPUESTO</span>
            <h2>Proyecta Tu Crecimiento</h2>
            <p>Ajusta los controles deslizantes a continuación y visualiza el retorno estimado en base a un rendimiento anual del 8%.</p>
          </div>

          <div className="calc-grid">
            <div className="calc-controls-panel">
              <div className="slider-group">
                <div className="slider-header">
                  <span>Aporte Mensual</span>
                  <span className="slider-val">${monthlyInv} USD</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={monthlyInv}
                  onChange={(e) => setMonthlyInv(Number(e.target.value))}
                  className="fin-slider"
                  aria-label="Aporte mensual en dólares"
                />
              </div>

              <div className="slider-group">
                <div className="slider-header">
                  <span>Plazo de Inversión</span>
                  <span className="slider-val">{years} Años</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="fin-slider"
                  aria-label="Plazo de inversión en años"
                />
              </div>
            </div>

            <div className="calc-results-panel">
              <div className="results-metrics-grid">
                <div>
                  <span className="res-lbl">Monto Invertido</span>
                  <span className="res-val">${calcInvestedAmount().toLocaleString()}</span>
                </div>
                <div>
                  <span className="res-lbl">Ganancia Estimada</span>
                  <span className="res-val green-text">+${calcProfit().toLocaleString()}</span>
                </div>
              </div>

              <div className="results-total-box">
                <span className="res-lbl">Saldo Total Proyectado</span>
                <span className="res-val-big">${calcTotalYield().toLocaleString()} USD</span>
              </div>

              {/* Dynamic bar charts */}
              <div className="dynamic-bar-container">
                <div 
                  className="bar invested" 
                  style={{ height: `${Math.min(100, (calcInvestedAmount() / calcTotalYield()) * 100)}%` }}
                  title={`Invertido: $${calcInvestedAmount()}`}
                >
                  <span className="bar-tag">Invertido</span>
                </div>
                <div 
                  className="bar profit" 
                  style={{ height: `${Math.min(100, (calcProfit() / calcTotalYield()) * 100)}%` }}
                  title={`Ganancia: $${calcProfit()}`}
                >
                  <span className="bar-tag">Ganancia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceso Temprano Form */}
      <section className="fin-apply" id="descargar">
        <div className="fin-container">
          <div className="apply-card-neon">
            <div className="apply-header-neon">
              <h2>Comienza a Construir Tu Futuro</h2>
              <p>Proporciona tu número de teléfono para recibir un enlace directo de descarga e invitación exclusiva cuando la aplicación esté disponible en tu región.</p>
            </div>

            {submitted ? (
              <div className="apply-success-neon" aria-live="polite">
                <h3>¡REGISTRO EXITOSO!</h3>
                <p>Tu solicitud de acceso temprano ha sido guardada. Recibirás un mensaje SMS en cuanto liberemos las invitaciones para tu dispositivo.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="apply-form-neon">
                <div className="form-group-neon">
                  <label htmlFor="fin-phone">Número de Teléfono Móvil</label>
                  <input
                    id="fin-phone"
                    type="tel"
                    className="input-neon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +56 9 1234 5678"
                    required
                    name="phone-number"
                    disabled={loading}
                  />
                </div>
                <button type="submit" className="btn-neon-submit" disabled={loading}>
                  {loading ? 'ENVIANDO REGISTRO…' : 'SOLICITAR INVITACIÓN'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fin-footer">
        <div className="fin-container">
          <p>© {new Date().getFullYear()} FinFlow App. La inversión inteligente está sujeta a riesgos de mercado.</p>
        </div>
      </footer>
    </div>
  );
}
