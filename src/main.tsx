import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WHATSAPP_URL = "https://wa.me/555191463881?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Cereja%20do%20Bronze%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20bronzeamento%20e%20os%20hor%C3%A1rios%20dispon%C3%ADveis.";
const INSTAGRAM_URL = "https://www.instagram.com/cerejadobronzepoa";

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.46 14.86L2.05 22l5.28-1.49A9.95 9.95 0 1 0 12.04 2Zm0 17.91a8 8 0 0 1-4.08-1.11l-.29-.17-3.13.89.9-3.05-.19-.31a7.86 7.86 0 1 1 6.79 3.75Zm4.36-5.9c-.24-.12-1.42-.69-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.81-.84 1.98 0 1.17.86 2.3.98 2.46.12.16 1.68 2.55 4.07 3.58.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.42-.57 1.62-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r="1" className="fill-dot" /></svg>;
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Cereja do Bronze, início">
          <img src="/assets/logo.png" alt="Cereja do Bronze" className="brand-logo" />
        </a>
        <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar</a>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-bg-wrapper"><img src="/images/cereja/01-hero.jpeg" alt="Equipamento de bronzeamento..." />
             <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <p className="eyebrow eyebrow--cherry"><span /> Cereja do Bronze</p>
            <h1 id="hero-title">Seu bronze perfeito <em>começa aqui.</em></h1>
            <p className="hero-copy">Bronzeamento artificial em Porto Alegre para quem deseja uma marquinha linda, resultado uniforme e aquela cor de verão sem precisar se expor ao sol.</p>
            <div className="hero-actions">
              <a className="button button--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar meu bronze</a>
              <a className="button button--ghost" href="#resultados">Ver resultados</a>
            </div>
          </div>
        </section>

        <section className="intro section" id="sobre" aria-labelledby="intro-title">
          <p className="eyebrow"><span /> Nossa essência</p>
          <h2 id="intro-title">Um espaço criado para <em>realçar sua beleza</em></h2>
          <div className="art-detail"></div>
          <div className="intro-copy">
            <p>A Cereja do Bronze nasceu de um sonho e de uma vontade real de fazer acontecer. Depois de esperar o momento certo, novos caminhos se encontraram e esse sonho ganhou novas raízes.</p>
            <p>Hoje, a Cereja floresce em Porto Alegre como um espaço pensado para proporcionar beleza, autoestima e uma experiência especial para cada cliente.</p>
            <p>Cada detalhe foi criado com carinho, cuidado e dedicação para fazer você se sentir ainda mais linda.</p>
          </div>
        </section>

        <section className="statement" id="destaque" aria-labelledby="statement-title">
          <h2 id="statement-title">“Aquela cor de verão sem precisar se expor ao sol.”</h2>
        </section>

        <section className="results section" id="resultados">
          <div className="results-header">
             <p className="eyebrow eyebrow--cherry"><span /> Resultados Reais</p>
             <h2>Sua marquinha linda</h2>
          </div>
          <div className="gallery-grid">
             <div className="gallery-item">
                <img src="/assets/resultado-1.jpg" alt="Resultado de marquinha de bronzeamento" />
             </div>
             <div className="gallery-item">
                <img src="/assets/resultado-2.jpg" alt="Resultado de marquinha de bronzeamento" />
             </div>
             <div className="gallery-item">
                <img src="/assets/resultado-3.jpg" alt="Resultado de marquinha de bronzeamento" />
             </div>
          </div>
        </section>

        <section className="section equipment" id="experiencia">
           <div className="eq-image">
              <img src="/assets/equipamento.jpg" alt="Nossa máquina de bronzeamento artificial" />
           </div>
           <div className="eq-content">
              <p className="eyebrow"><span /> A Experiência</p>
              <h2>Conforto e cuidado em <em>cada detalhe.</em></h2>
              <p>Descubra uma forma prática de conquistar seu bronze com cuidado, conforto e um espaço pensado para você relaxar enquanto realça a sua beleza.</p>
              <div className="feature-list">
                 <div className="feature-item"><span>✓</span> Atendimento exclusivo focado no seu resultado.</div>
                 <div className="feature-item"><span>✓</span> Resultados visíveis e cor uniforme.</div>
                 <div className="feature-item"><span>✓</span> Ambiente acolhedor e totalmente feminino.</div>
              </div>
           </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <p className="eyebrow eyebrow--cherry"><span /> Agende o seu momento</p>
          <h2 id="final-title">Sua marquinha dos sonhos está a uma mensagem de distância.</h2>
          <a className="button button--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar meu bronze</a>
          <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "var(--text-muted)" }}>📍 Porto Alegre, Rio Grande do Sul</p>
        </section>
      </main>

      <footer>
        <div className="brand" aria-label="Cereja do Bronze, início">
          <img src="/assets/logo.png" alt="Cereja do Bronze" className="brand-logo" />
        </div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@cerejadobronzepoa</a>
      </footer>

      <nav className="floating-actions" aria-label="Redes sociais e agendamento">
        <a className="float-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram da Cereja do Bronze"><InstagramIcon /></a>
        <a className="float-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>Seu bronze aqui</span></a>
      </nav>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
