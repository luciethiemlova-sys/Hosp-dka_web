import React, { useState } from 'react'

function App() {
  const images = {
    logo: '/assets/logo hospoda.png',
    hero: '/assets/cover logo.png',
    gallery: [
      '/assets/foto2.jpeg',
      '/assets/foto3.jpeg',
      '/assets/hřiště foto.jpeg'
    ]
  }

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.gallery.length) % images.gallery.length);
  };

  return (
    <div className="app">
      <header className="main-header">
        <div className="container header-grid">
          <nav className="nav-left">
            <ul className="nav-links">
              <li><a href="#domu">Domů</a></li>
              <li><a href="#nabidka">Nabídka</a></li>
            </ul>
          </nav>

          <div className="header-center">
            <img src={images.logo} alt="Logo" className="top-logo" />
            <div className="header-phone">
              <a href="tel:+420733321346">
                <span className="phone-icon">📞</span> +420 733 321 346
              </a>
            </div>
          </div>

          <nav className="nav-right">
            <ul className="nav-links">
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="domu" className="hero-section">
          <div className="hero-bg-overlay"></div>
          <div className="container hero-content">
            <img src={images.logo} alt="Logo" className="hero-logo" />
            <div className="hero-badge">Dolní Benešov - Zábřeh</div>
            <h1>
              Kamarád <span className="highlight-text">fotbalu</span>,<br />
              dětí i cyklistů.
            </h1>
            <p className="hero-description">
              Pivko po zápase, zmrzlina pro děti a klidný koutek u cyklostezky.
              Vše, co potřebujete pro perfektní den.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn-primary">Najdete nás</a>
              <a href="#nabidka" className="btn-secondary">Naše nabídka</a>
            </div>
          </div>
        </section>

        {/* OPENING HOURS */}
        <section id="info" style={{ background: 'var(--bg-gradient)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ marginBottom: '3rem' }}>Otevírací doba</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-premium)' }}>
                <h3 style={{ color: 'var(--pitch-green)', marginBottom: '1rem' }}>Standard</h3>
                <p>Út – Pá: 15:30 – 20:00</p>
                <p>So – Ne: 14:00 – 20:00</p>
              </div>
              <div style={{ background: 'var(--pitch-green)', color: 'white', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-premium)' }}>
                <h3 style={{ color: 'var(--beer-gold)', marginBottom: '1rem' }}>Zápasové dny</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>+30 minut před zápasem!</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                  (např. zápas je v 9:00, otevřeno máme od 8:30 😉)
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                  Aktuální změny a časy zápasů sledujte na našem <a href="https://www.facebook.com/profile.php?id=61588335413462" target="_blank" rel="noreferrer" style={{ color: 'var(--beer-gold)', textDecoration: 'underline', fontWeight: 700 }}>FB</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="nabidka">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Naše Nabídka</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <h3 style={{ borderBottom: '2px solid var(--beer-gold)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>K pití</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '1rem' }}><strong>Radegast 10 / Ratar / Birell Pomelo Grep</strong> - Točené</li>
                  <li style={{ marginBottom: '1rem' }}><strong>Nealko pro všechny</strong> - Malinovka, limonády, džusy</li>
                  <li style={{ marginBottom: '1rem' }}><strong>Káva & Teplé nápoje</strong> - Espresso, Cappuccino, Latté</li>
                </ul>
              </div>
              <div>
                <h3 style={{ borderBottom: '2px solid var(--pitch-green)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>K jídlu & chuti</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '1rem' }}><strong>Středeční speciality</strong> - Každou středu chystáme něco na grilu nebo jinou pochoutku</li>
                  <li style={{ marginBottom: '1rem' }}><strong>Víkendové menu</strong> - Klobásky, makrely, párky, placky (info na <a href="https://www.facebook.com/profile.php?id=61588335413462" target="_blank" rel="noreferrer" style={{ color: 'var(--pitch-green)', textDecoration: 'underline', fontWeight: 700 }}>FB</a>)</li>
                  <li style={{ marginBottom: '1rem' }}><strong>Točená zmrzlina</strong> - Každý den čerstvá osvěžující radost</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61588335413462" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: '#1877F2' }}>
                Aktuální menu na Facebooku
              </a>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galerie" style={{ background: 'var(--bg-gradient)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>

            <div className="gallery-scroll-container">
              <div className="gallery-track">
                {images.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img src={img} alt={`Galerie ${index}`} />
                    <div className="gallery-overlay">
                      <div className="gallery-icon">🔍</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
              <div className="lightbox" onClick={() => setSelectedIndex(null)}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                  <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>&times;</button>

                  <button className="lightbox-nav prev" onClick={prevImage}>
                    &#10094;
                  </button>

                  <img src={images.gallery[selectedIndex]} alt="Zvětšený náhled" />

                  <button className="lightbox-nav next" onClick={nextImage}>
                    &#10095;
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="kontakt">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Kde nás najdete</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Adresa:</strong><br />U Hřiště 194, Dolní Benešov - Zábřeh, 747 22</p>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Telefon:</strong><br /><a href="tel:+420733321346" style={{ color: 'var(--pitch-green)', textDecoration: 'none', fontWeight: 700 }}>+420 733 321 346</a></p>
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--ice-cream-cream)', borderRadius: '15px', border: '1px dashed var(--pitch-green)' }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Platba kartou?</p>
                  <p>Přijímáme QR platby pro vaše pohodlí.</p>
                </div>
              </div>
              <div style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
                {/* Embedded Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.623490977218!2d18.1068832!3d49.9103988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471158d6978417eb%3A0xe9f75f68f5c69789!2zVSBIxZlpxaB0xJsgMTk0LCA3NDcgMjIgRG9sbsOtIEJlbmXFoW92!5e0!3m2!1scs!2scz!4v1709999999999!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', background: '#1a1a1a', color: 'white' }}>
        <div className="container">
          <img src={images.logo} alt="Logo" style={{ height: '60px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
          <p style={{ opacity: 0.7 }}>&copy; 2026 Hospůdka na hřišti. Všechna práva vyhrazena.</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="https://www.facebook.com/profile.php?id=61588335413462" target="_blank" rel="noreferrer" style={{ color: 'var(--beer-gold)', textDecoration: 'none' }}>Sledujte nás na Facebooku</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
