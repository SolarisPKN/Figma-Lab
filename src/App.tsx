import { useState } from 'react'

const CONNECTORS = [
  {
    name: 'GitHub',
    emoji: '🐙',
    api: 'REST + GraphQL',
    desc: 'Recolecta métricas detalladas de repositorios: estrellas, forks, issues, pull requests, alertas de Dependabot, corridas de Actions y eventos de seguridad. Soporta GraphQL para optimizar la cantidad de requests necesarios.',
    metrics: ['Stars & forks', 'Issues & Pull Requests', 'Dependabot alerts', 'Actions runs', 'Security events'],
  },
  {
    name: 'Cloudflare',
    emoji: '☁️',
    api: 'Cloudflare REST API',
    desc: 'Extrae estadísticas a nivel de cuenta y zona: volumen de requests, ratios de caché, eventos de seguridad y métricas de rendimiento de Workers. Ideal para proyectos con infraestructura en Cloudflare.',
    metrics: ['Account analytics', 'Zone-level stats', 'Request volume', 'Cache ratios'],
  },
  {
    name: 'PageSpeed',
    emoji: '⚡',
    api: 'PageSpeed Insights API',
    desc: 'Consulta PageSpeed Insights para Core Web Vitals y métricas de rendimiento web. Programado independientemente para no saturar la API.',
    metrics: ['Performance score', 'LCP', 'FID / INP', 'CLS', 'TTFB'],
  },
]

const FEATURES = [
  {
    emoji: '📋',
    label: 'Recolección',
    title: 'Registro centralizado de proyectos',
    body: 'Un único registry.json controla todos los proyectos y sus conectores. Agregar un proyecto nuevo nunca toca el núcleo del sistema.',
  },
  {
    emoji: '💾',
    label: 'Almacenamiento',
    title: 'JSON estructurado y transparente',
    body: 'stats.json para el estado actual, history/ para la serie temporal. Formato abierto listo para dashboards, sitios web o cualquier herramienta de análisis.',
  },
  {
    emoji: '🤖',
    label: 'Automatización',
    title: 'Cero intervención manual',
    body: 'GitHub Actions despliega. Cloudflare Worker recoge según schedules independientes por conector. La operación es invisible una vez configurada.',
  },
  {
    emoji: '🔌',
    label: 'Extensibilidad',
    title: 'Arquitectura de conectores',
    body: 'Nueva plataforma = nuevo conector, sin modificar el núcleo. Nueva combinación de plataformas por proyecto sin límites.',
  },
]

const PHASES = [
  { num: '01', name: 'Core', items: ['Registry', 'Conectores', 'GitHub Actions', 'Worker', 'stats.json'] },
  { num: '02', name: 'Automatización', items: ['Scheduler', 'Actualizaciones incrementales', 'Historial', 'GraphQL optimizado'] },
  { num: '03', name: 'Integración', items: ['Websites', 'Dashboards', 'Herramientas de visualización'] },
  { num: '04', name: 'Ecosistema', items: ['Agregación cross-proyecto', 'Reportes automáticos', 'Integraciones externas'] },
]

export default function App() {
  const [activeConnector, setActiveConnector] = useState(0)

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* NAV */}
      <header
        className="glass"
        style={{
          position: 'sticky',
          top: '1rem',
          margin: '1rem',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderRadius: '24px',
        }}
      >
        <div style={{ fontWeight: 'bold', fontFamily: "'JetBrains Mono', monospace", display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--border-cyan)' }}>⚡</span>
          SolarisPKN
          <span style={{
            background: 'rgba(0,255,204,0.1)',
            border: '1px solid var(--border-cyan)',
            borderRadius: '999px',
            padding: '0.15rem 0.6rem',
            fontSize: '0.75rem',
            color: 'var(--border-cyan)',
            fontFamily: "'JetBrains Mono', monospace",
          }}>Stats</span>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }} aria-label="Navegación">
          <a href="#features" style={{ color: 'var(--border-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>🧪 Características</a>
          <a href="#architecture" style={{ color: 'var(--border-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>🔍 Arquitectura</a>
          <a href="#connectors" style={{ color: 'var(--border-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>📡 Conectores</a>
          <a
            href="https://github.com/SolarisPKN/SolarisPKN-Stats"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass btn-glass-pink"
            style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '4rem 1.5rem',
        position: 'relative',
      }}>
        {/* Radial glow */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,255,204,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <div className="glass" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--border-cyan)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Recolección automatizada · Multi-plataforma · JSON abierto
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}>
            📊 Estadísticas que se{' '}
            <span style={{ color: 'var(--border-cyan)' }}>recolectan solas</span>
          </h1>

          <p style={{ maxWidth: '560px', fontSize: '1.1rem', color: 'rgba(224,224,224,0.8)', margin: '0 auto 2rem' }}>
            SolarisPKN-Stats conecta tus proyectos con GitHub, Cloudflare y PageSpeed Insights.
            Configurás una vez — el sistema recoge, almacena y expone los datos por siempre.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://github.com/SolarisPKN/SolarisPKN-Stats"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Ver en GitHub
            </a>
            <a href="#architecture" className="btn-glass btn-glass-pink">
              Ver arquitectura en vivo →
            </a>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section style={{ padding: '0 1.5rem 4rem', display: 'flex', justifyContent: 'center' }}>
        <div className="glass" style={{ maxWidth: '760px', width: '100%', textAlign: 'center', padding: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Filosofía
          </p>
          <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.7 }}>
            "Configurar una vez, recolectar automáticamente, almacenar con transparencia y usar los datos
            donde sean necesarios."
          </blockquote>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            🧪 Características
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Diseñado para durar sin mantenimiento
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {FEATURES.map((f) => (
            <article key={f.label} className="glass">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.emoji}</div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--border-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {f.label}
              </p>
              <h3 style={{ fontWeight: 600, color: '#fff', marginBottom: '0.6rem', fontSize: '1rem' }}>{f.title}</h3>
              <p style={{ color: 'rgba(224,224,224,0.7)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            🔍 Arquitectura
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Flujo de datos
          </h2>
        </div>

        {/* Flow diagram */}
        <div className="glass" style={{ marginBottom: '1.25rem', padding: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            {[
              { id: 'registry.json', desc: 'Fuente de verdad' },
              { id: 'Scheduler', desc: 'Cloudflare Worker' },
              { id: 'Connector', desc: 'REST / GraphQL' },
              { id: 'stats.json', desc: '+ history/' },
            ].map((step, i, arr) => (
              <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  background: 'rgba(0,255,204,0.08)',
                  border: '1px solid var(--border-cyan)',
                  borderRadius: '12px',
                  padding: '0.6rem 1.1rem',
                  textAlign: 'center',
                  minWidth: '120px',
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--border-cyan)' }}>{step.id}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(224,224,224,0.5)', marginTop: '2px' }}>{step.desc}</div>
                </div>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--accent-pink)', fontSize: '1.2rem', fontWeight: 300 }} aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div className="glass">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--border-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              📁 Estructura de almacenamiento
            </p>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(224,224,224,0.7)', overflowX: 'auto' }}>{`stats/
├── proyecto-a/
│   ├── stats.json
│   └── history/
│       ├── 2024-01.json
│       └── 2024-02.json
└── proyecto-b/
    ├── stats.json
    └── history/`}</pre>
          </div>

          <div className="glass">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--border-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              ⚙️ registry.json — ejemplo
            </p>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(224,224,224,0.7)', overflowX: 'auto' }}>{`{
  "projects": [
    {
      "id": "solarispkn-web",
      "connectors": [
        "github",
        "cloudflare",
        "pagespeed"
      ]
    }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      {/* CONNECTORS */}
      <section id="connectors" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            📡 Conectores
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Plataformas soportadas
          </h2>
        </div>

        <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,255,204,0.2)' }} role="tablist">
            {CONNECTORS.map((c, i) => (
              <button
                key={c.name}
                role="tab"
                aria-selected={activeConnector === i}
                onClick={() => setActiveConnector(i)}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: activeConnector === i ? 'rgba(0,255,204,0.08)' : 'transparent',
                  border: 'none',
                  boxShadow: activeConnector === i ? 'inset 0 -2px 0 var(--border-cyan)' : 'none',
                  color: activeConnector === i ? 'var(--border-cyan)' : 'rgba(224,224,224,0.5)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>{c.emoji}</span>
                {c.name}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.3rem', color: '#fff', marginBottom: '0.3rem' }}>
                {CONNECTORS[activeConnector].emoji} {CONNECTORS[activeConnector].name}
              </h3>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'rgba(224,224,224,0.4)', marginBottom: '1.25rem' }}>
                via {CONNECTORS[activeConnector].api}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(224,224,224,0.75)' }}>
                {CONNECTORS[activeConnector].desc}
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--border-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Métricas recolectadas
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {CONNECTORS[activeConnector].metrics.map((m) => (
                  <li
                    key={m}
                    style={{
                      background: 'rgba(0,255,204,0.05)',
                      border: '1px solid rgba(0,255,204,0.15)',
                      borderRadius: '10px',
                      padding: '0.6rem 0.9rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.82rem',
                      color: 'var(--text-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <span style={{ color: 'var(--accent-green)' }} aria-hidden="true">▸</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            🛠️ Stack Técnico
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Tecnologías
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          {[
            { name: 'GitHub Actions', role: 'CI/CD y despliegue' },
            { name: 'Cloudflare Workers', role: 'Runtime de recolección' },
            { name: 'GitHub REST API', role: 'Métricas de repositorios' },
            { name: 'GitHub GraphQL', role: 'Queries optimizados' },
            { name: 'Cloudflare API', role: 'Estadísticas de plataforma' },
            { name: 'PageSpeed API', role: 'Rendimiento web' },
          ].map((t) => (
            <div key={t.name} className="glass" style={{ flex: '1', minWidth: '140px' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--border-cyan)', marginBottom: '0.3rem' }}>{t.name}</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(224,224,224,0.5)' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            🔐 Seguridad
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Mínimo privilegio por diseño
          </h2>
        </div>

        <div className="glass">
          {[
            'Credenciales almacenadas exclusivamente en GitHub Secrets y Cloudflare Worker Secrets — nunca en el código fuente',
            'Dos tokens de GitHub separados: GITHUB_TOKEN_READ para recolección y GITHUB_TOKEN_WRITE solo para escritura',
            'Principio de mínimo privilegio aplicado en cada conector y plataforma',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: i > 0 ? '1.25rem 0 0' : '0', marginTop: i > 0 ? '1.25rem' : 0, borderTop: i > 0 ? '1px solid rgba(0,255,204,0.1)' : 'none' }}>
              <div style={{
                minWidth: '28px', height: '28px',
                background: 'rgba(0,255,204,0.1)',
                border: '1px solid var(--border-cyan)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--border-cyan)',
                flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(224,224,224,0.8)', paddingTop: '3px' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--border-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            🗺️ Hoja de ruta
          </p>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff' }}>
            Fases del proyecto
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {PHASES.map((phase) => (
            <div key={phase.num} className="glass">
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--border-cyan)', marginBottom: '0.3rem' }}>
                Fase {phase.num}
              </p>
              <h3 style={{ fontWeight: 600, color: '#fff', marginBottom: '1rem', fontSize: '1rem' }}>{phase.name}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {phase.items.map((item) => (
                  <li key={item} style={{ fontSize: '0.82rem', color: 'rgba(224,224,224,0.55)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--accent-pink)', flexShrink: 0, marginTop: '2px' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '2rem 1.5rem 6rem', display: 'flex', justifyContent: 'center' }}>
        <div className="glass" style={{ maxWidth: '700px', width: '100%', textAlign: 'center', padding: '3rem 2rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
            📊 Empezá a medir lo que importa
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(224,224,224,0.7)', marginBottom: '2rem', lineHeight: 1.65 }}>
            Revisá el repositorio, estudiá la arquitectura y sumá tus proyectos al registry.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://github.com/SolarisPKN/SolarisPKN-Stats"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Ver en GitHub
            </a>
            <a href="https://manifiesto.solarispkn.com.ar" target="_blank" rel="noopener noreferrer" className="btn-glass btn-glass-pink">
              Leer el Manifiesto →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glass" style={{ margin: '0 1rem 1rem', textAlign: 'center', fontSize: '0.85rem' }}>
        <p>
          ⚡ Laboratorio transparente —{' '}
          <a href="https://github.com/SolarisPKN/SolarisPKN-Stats" style={{ color: 'var(--border-cyan)', textDecoration: 'none' }}>
            Código abierto
          </a>
          {' '}—{' '}
          <a href="https://manifiesto.solarispkn.com.ar" style={{ color: 'var(--border-cyan)', textDecoration: 'none' }}>
            Manifiesto
          </a>
          {' '}—{' '}
          <a href="https://labs.solarispkn.com.ar/es/" style={{ color: 'var(--border-cyan)', textDecoration: 'none' }}>
            Labs
          </a>
          {' '}—{' '}
          <span style={{ color: 'var(--accent-green)' }}>Estado: operativo</span>
        </p>
      </footer>

    </div>
  )
}
