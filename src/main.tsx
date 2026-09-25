import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const MESSAGE = "Olá! Vim pelo site da Max Barros e gostaria de conhecer as opções disponíveis.";
const WHATSAPP_NUMBER = "554792457760";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

const icons: Record<string, React.ReactNode> = {
  arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
  hanger: <><path d="M12 8.5a2.5 2.5 0 1 0-2.5-2.5M12 8.5 3.5 14a2 2 0 0 0 1.1 3.7h14.8a2 2 0 0 0 1.1-3.7L12 8.5Z" /></>,
  woman: <><circle cx="12" cy="7" r="4"/><path d="M12 11v10M8 15h8M9 21h6"/></>,
  sparkle: <><path d="m12 2 1.5 5.1L18 10l-4.5 2.9L12 18l-1.5-5.1L6 10l4.5-2.9L12 2Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>,
  tag: <><path d="M20 13 13 20l-9-9V4h7l9 9Z"/><circle cx="8" cy="8" r="1"/></>,
  gem: <><path d="m3 9 4-5h10l4 5-9 11L3 9Z"/><path d="m7 4 5 16 5-16M3 9h18"/></>,
  feather: <><path d="M20 4C11 4 5 9 5 17M4 20c4-5 8-8 14-12"/></>,
  heart: <path d="M20.8 5.8a5.4 5.4 0 0 0-7.6 0L12 7l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.6Z" />,
  message: <><path d="M21 11.5a8 8 0 0 1-8.5 8 9 9 0 0 1-4-.9L3 21l1.5-4.5A8.5 8.5 0 1 1 21 11.5Z"/></>,
  package: <><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="m3 8 9 5 9-5v9l-9 5-9-5V8ZM12 13v9"/></>,
};

function Icon({ name }: { name: string }) {
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

function WhatsAppIcon() {
  return <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.1a8 8 0 0 1-4.1-1.1l-.3-.2-3 .9.8-3-.2-.3A8 8 0 1 1 12 20.1Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2 0-.4 0-.5.2l-.8.9c-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.5.6-1 .1-.2 0-.4 0-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.1.8 2.3 1 2.4.1.2 1.7 2.6 4 3.6 1.5.6 2 .7 2.8.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.2 0-.1-.2-.2-.4-.3Z"/></svg>;
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? "brand--compact" : ""}`}><span className="monogram"><span>MB</span></span><span className="brand-name">MAX BARROS<small>MODA MASCULINA E FEMININA</small></span></span>;
}

const looks = [1, 2, 3, 4, 5, 9, 10, 12, 13, 17, 19, 20].map((number) => ({
  id: `R${number}`,
  image: `/r${number}.jpeg`,
}));

function lookWhatsAppUrl(id: string) {
  const message = `Olá! Gostaria de saber mais sobre o Look ${id} da MAX BARROS.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <a href="#inicio" aria-label="Max Barros — início"><Brand compact /></a>
      <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
        <a href="#colecoes" onClick={closeMenu}>Coleções</a>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#experiencia" onClick={closeMenu}>Como comprar</a>
        <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
      </nav>
      <button className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><span/><span/></button>
    </header>

    <main>
      <section className="hero" id="inicio">
        <img className="hero-image" src="/images/max-barros/hero-casal.jpg" alt="Casal vestindo looks elegantes da Max Barros" />
        <div className="hero-orbit hero-orbit--one"/><div className="hero-orbit hero-orbit--two"/>
        <div className="hero-copy-block">
          <p className="eyebrow">Moda para todos os seus momentos</p>
          <h1>Estilo em todas as<br/><em>versões de você.</em></h1>
          <p className="hero-description">Moda masculina e feminina com escolhas que unem qualidade, conforto e personalidade.</p>
          <div className="hero-actions">
            <a className="button button--gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Falar no WhatsApp</a>
            <a className="button button--line" href="#colecoes">Conheça nossas coleções <Icon name="arrow" /></a>
          </div>
        </div>
        <div className="scroll-cue"><span/> DESCUBRA</div>
      </section>

      <section className="section categories" id="colecoes">
        <header className="section-heading showcase-heading"><div><p className="eyebrow">Seleção MAX BARROS</p><h2>Estilo em <em>cada detalhe</em></h2></div><p>Peças selecionadas para diferentes estilos, momentos e versões de você.</p></header>
        <div className="look-list">
          {looks.map((look, index) => <article className="look-card" key={look.id}>
            <div className="look-visual">
              <img src={look.image} alt={`Look ${look.id} da MAX BARROS`} loading="lazy" />
              <span className="look-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="look-content">
              <p className="look-kicker">Estilo MAX BARROS</p>
              <h3>Look {look.id}</h3>
              <p className="look-availability">Disponível sob consulta</p>
              <a className="button button--gold look-button" href={lookWhatsAppUrl(look.id)} target="_blank" rel="noreferrer" aria-label={`Consultar o Look ${look.id} no WhatsApp`}><WhatsAppIcon /> Consultar no WhatsApp</a>
            </div>
          </article>)}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-mark"><img src="/images/max-barros/detalhes-identidade.jpg" alt="Casal com looks confortáveis e coordenados" /></div>
        <div className="about-content"><p className="eyebrow">A essência Max Barros</p><h2>Mais que moda,<br/><em>é atitude.</em></h2><p>Moda masculina e feminina para quem valoriza estilo, conforto e personalidade. Na Max Barros, cada peça é escolhida para acompanhar diferentes momentos e versões de você.</p><div className="signature">Qualidade <span>•</span> Estilo <span>•</span> Conforto</div></div>
      </section>

      <section className="section highlights" id="destaques">
        <div className="section-heading centered"><div><p className="eyebrow">Por que escolher a Max Barros</p><h2>Detalhes que fazem <em>a diferença.</em></h2></div></div>
        <div className="highlights-grid">
          {[['hanger','Moda Masculina','Escolhas versáteis para uma presença marcante.'],['woman','Moda Feminina','Elegância e personalidade em cada composição.'],['sparkle','Novidades','Novas possibilidades para renovar seu estilo.'],['gem','Qualidade','Peças selecionadas com atenção aos detalhes.'],['feather','Conforto','Bem-estar para acompanhar todos os momentos.'],['heart','Estilo','Moda para expressar cada versão de você.']].map(([icon,title,text]) => <article className="highlight" key={title}><span><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="experience" id="experiencia">
        <div className="experience-intro"><p className="eyebrow">Simples, próximo e seguro</p><h2>Seu novo look,<br/><em>em poucos passos.</em></h2><p>Converse diretamente com a gente para conhecer as opções e finalizar sua compra.</p><a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Começar agora <Icon name="arrow"/></a></div>
        <div className="steps">
          {[['01','hanger','Escolha seu estilo','Explore nossas coleções.'],['02','message','Fale conosco','Conte o que você procura.'],['03','heart','Finalize pelo WhatsApp','Combine os detalhes da compra.'],['04','package','Receba seu pedido','Aguarde seu novo look.']].map(([number,icon,title,text]) => <article className="step" key={number}><span className="step-number">{number}</span><span className="step-icon"><Icon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="final-cta"><div className="cta-monogram" aria-hidden="true">MB</div><p className="eyebrow">Uma nova versão espera por você</p><h2>Seu próximo look<br/><em>começa aqui.</em></h2><p>Descubra peças que combinam com seu momento, seu estilo e sua personalidade.</p><a className="button button--gold" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon/> Comprar pelo WhatsApp</a></section>
    </main>

    <footer><div className="footer-top"><Brand/><p>Moda masculina e feminina para todas as versões de você.</p><div className="footer-social"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon/> WhatsApp</a><button type="button" disabled aria-label="Instagram em breve"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg> Instagram <small>em breve</small></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Max Barros</span><span>Loja online • Moda Masculina e Feminina</span></div></footer>

    <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com a Max Barros pelo WhatsApp"><WhatsAppIcon/><span>Fale com a gente</span></a>
  </>;
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
