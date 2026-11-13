import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DC from "../assets/img/DC.png";
import img_MARVEL from "../assets/img/MARVEL.png";
import heroImages from "../assets/heroImages";
import HeroDataService from "../services/HeroDataService";
import "./HeroSection.css";

const featuredSlugs = [
  "batman",
  "spider",
  "superman",
  "iron",
  "wonder",
  "hulk",
];

const getImage = (hero) => heroImages[hero.assetPath] || null;

function HeroImage({ hero, className = "", loading = "lazy" }) {
  const [hasError, setHasError] = useState(false);
  const image = getImage(hero);

  if (!image || hasError) {
    return <div className={`hero-image-fallback ${className}`}>{hero.name}</div>;
  }

  return (
    <img
      className={className}
      src={image}
      alt={`${hero.name}, personaje de ${hero.universe}`}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}

function HeroSection() {
  const [heroes, setHeroes] = useState([]);
  const [state, setState] = useState("loading");
  const [error, setError] = useState(null);
  const [discoveredHero, setDiscoveredHero] = useState(null);

  useEffect(() => {
    let active = true;

    Promise.all([
      HeroDataService.getHeroes("Marvel"),
      HeroDataService.getHeroes("DC"),
    ])
      .then(([marvelHeroes, dcHeroes]) => {
        if (!active) return;
        setHeroes([...marvelHeroes, ...dcHeroes]);
        setState("success");
      })
      .catch((loadError) => {
        if (!active) return;
        setError(loadError);
        setState("error");
      });

    return () => {
      active = false;
    };
  }, []);

  const featuredHeroes = useMemo(() => {
    const selected = featuredSlugs
      .map((slug) => heroes.find((hero) => hero.slug === slug))
      .filter(Boolean);

    return selected.length >= 6 ? selected : heroes.slice(0, 6);
  }, [heroes]);

  const discoverHero = () => {
    if (!heroes.length) return;

    const availableHeroes = heroes.filter(
      (hero) => hero.id !== discoveredHero?.id,
    );
    const pool = availableHeroes.length ? availableHeroes : heroes;
    const nextHero = pool[Math.floor(Math.random() * pool.length)];
    setDiscoveredHero(nextHero);
  };

  if (state === "loading") {
    return <p className="home-status">Cargando universo...</p>;
  }

  if (state === "error") {
    return (
      <p className="home-status home-status--error" role="alert">
        No se pudo cargar el universo: {error.message}
      </p>
    );
  }

  return (
    <main className="home-page">
      <section
        className="home-hero"
        style={{ "--hero-background": `url(${DC})` }}
        aria-labelledby="home-title"
      >
        <div className="home-hero__content">
          <p className="eyebrow">HEROES / ENCICLOPEDIA DIGITAL</p>
          <h1 id="home-title">EL UNIVERSO DE LOS HÉROES</h1>
          <p className="home-hero__description">
            Descubre las historias, poderes y personajes que marcaron
            generaciones.
          </p>
          <div className="home-actions">
            <a className="home-button home-button--primary" href="#featured">
              Explorar personajes
            </a>
            <a className="home-button home-button--ghost" href="#universes">
              Descubrir universos
            </a>
          </div>
        </div>
        <span className="home-hero__glow home-hero__glow--blue" />
        <span className="home-hero__glow home-hero__glow--red" />
      </section>

      <section className="home-section" id="universes" aria-labelledby="universes-title">
        <div className="section-heading">
          <p className="eyebrow">EXPLORA</p>
          <h2 id="universes-title">Dos universos. Infinitas historias.</h2>
        </div>
        <div className="universe-grid">
          <Link className="universe-card universe-card--dc" to="/dc">
            <img src={DC} alt="Personajes del universo DC Comics" />
            <div className="universe-card__content">
              <span className="universe-card__tag">DC COMICS</span>
              <h3>Un universo de leyendas, héroes y villanos.</h3>
              <span className="text-link">Explorar universo →</span>
            </div>
          </Link>
          <Link className="universe-card universe-card--marvel" to="/marvel">
            <img src={img_MARVEL} alt="Personajes del universo Marvel" />
            <div className="universe-card__content">
              <span className="universe-card__tag">MARVEL</span>
              <h3>Historias extraordinarias y héroes legendarios.</h3>
              <span className="text-link">Explorar universo →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-section" id="featured" aria-labelledby="featured-title">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">ELIGE TU PRÓXIMA HISTORIA</p>
            <h2 id="featured-title">Personajes destacados</h2>
          </div>
          <Link className="text-link" to="/marvel">
            Ver todos →
          </Link>
        </div>
        <div className="featured-grid">
          {featuredHeroes.map((hero) => (
            <Link
              className="featured-card"
              key={hero.id}
              to={`/${hero.universe.toLowerCase()}/${hero.slug}`}
            >
              <HeroImage hero={hero} className="featured-card__image" />
              <div className="featured-card__overlay">
                <span>{hero.universe}</span>
                <h3>{hero.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="discover-section" aria-labelledby="discover-title">
        <div className="discover-section__copy">
          <p className="eyebrow">MODO ALEATORIO</p>
          <h2 id="discover-title">¿A QUIÉN DESCUBRIRÁS HOY?</h2>
          <p>Déjate sorprender por un personaje de nuestro catálogo.</p>
          <button className="home-button home-button--primary" type="button" onClick={discoverHero}>
            {discoveredHero ? "Descubrir otro héroe" : "Descubrir héroe"}
          </button>
        </div>
        {discoveredHero && (
          <article className="discovered-card" aria-live="polite">
            <HeroImage hero={discoveredHero} className="discovered-card__image" />
            <div className="discovered-card__content">
              <span>{discoveredHero.universe}</span>
              <h3>{discoveredHero.name}</h3>
              <p>{discoveredHero.details?.description || discoveredHero.description}</p>
              <Link
                className="text-link"
                to={`/${discoveredHero.universe.toLowerCase()}/${discoveredHero.slug}`}
              >
                Ver ficha completa →
              </Link>
            </div>
          </article>
        )}
      </section>

      <section className="home-section" aria-labelledby="categories-title">
        <div className="section-heading">
          <p className="eyebrow">PRÓXIMAMENTE</p>
          <h2 id="categories-title">Explora por categorías</h2>
        </div>
        <div className="feature-grid">
          {["Superhéroes", "Villanos", "Equipos", "Poderes y habilidades"].map(
            (category) => (
              <article className="feature-card feature-card--disabled" key={category}>
                <span className="feature-card__icon">✦</span>
                <h3>{category}</h3>
                <p>Esta categoría aún no está disponible en el catálogo.</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="compare-section" aria-labelledby="compare-title">
        <div>
          <p className="eyebrow">EN CONSTRUCCIÓN</p>
          <h2 id="compare-title">Compara a tus héroes favoritos</h2>
          <p>
            El comparador estará disponible cuando el catálogo incluya
            estadísticas verificables.
          </p>
        </div>
        <button className="home-button home-button--ghost" type="button" disabled>
          Próximamente
        </button>
      </section>
    </main>
  );
}

export default HeroSection;
