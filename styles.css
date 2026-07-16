/* ==========================================================================
   NEXOVECTOR TECH — Hoja de estilos compartida
   Sistema: Grid + Flexbox + Bootstrap 5 grid utilities
   Firma visual: retícula de nodos conectados (red / vector), eco del nombre
   "NexoVector" y de las áreas de telecomunicaciones / IoT / redes.
   ========================================================================== */

/* ---------- 1. TOKENS ---------- */
:root {
  /* Color */
  --bg-main: #070e1a;
  --bg-card: #111f36;
  --bg-card-hover: #16294a;
  --accent: #00e0a0;
  --accent-dim: #00b581;
  --accent-2: #ff6b35;
  --accent-2-dim: #d9541f;
  --text: #e2e8f0;
  --text-muted: #7a8ba3;
  --border: rgba(226, 232, 240, 0.08);
  --border-strong: rgba(226, 232, 240, 0.16);

  /* Tipografía */
  --font-display: "Space Grotesk", "Segoe UI", sans-serif;
  --font-body: "Inter", "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "Courier New", monospace;

  /* Escala */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-card: 0 10px 30px -12px rgba(0, 0, 0, 0.55);
  --transition: 200ms ease;
}

/* ---------- 2. RESET / BASE ---------- */
* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg-main);
  background-image:
    radial-gradient(circle at 12% 8%, rgba(0, 224, 160, 0.07), transparent 40%),
    radial-gradient(circle at 88% 92%, rgba(255, 107, 53, 0.06), transparent 45%);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
}

a { color: var(--accent); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--accent-2); }

::selection { background: var(--accent); color: #04140f; }

/* Foco visible accesible */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

.eyebrow {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: var(--accent);
}

.text-muted-custom { color: var(--text-muted); }

.section {
  padding: 5rem 0;
  position: relative;
}
.section-alt { background: rgba(17, 31, 54, 0.35); }
.section-title { margin-bottom: .5rem; }
.section-lead { color: var(--text-muted); max-width: 640px; margin-bottom: 2.5rem; }

/* Divisor tipo "nodo" — encarna el nombre NexoVector: un punto que conecta dos líneas */
.node-divider {
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-bottom: 1.25rem;
}
.node-divider::before,
.node-divider::after {
  content: "";
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
}
.node-divider .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(0, 224, 160, .15);
}

/* ---------- 3. NAVBAR ---------- */
.navbar-nexo {
  background: rgba(7, 14, 26, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: .85rem 0;
  transition: background var(--transition), padding var(--transition), border-color var(--transition);
}
.navbar-nexo.scrolled {
  background: rgba(7, 14, 26, 0.94);
  padding: .5rem 0;
  border-bottom-color: var(--border-strong);
}
.navbar-brand-nexo {
  display: flex;
  align-items: center;
  gap: .6rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff !important;
}
.navbar-brand-nexo .brand-mark { width: 34px; height: 34px; }
.navbar-brand-nexo .brand-sub {
  display: block;
  font-family: var(--font-mono);
  font-size: .62rem;
  color: var(--text-muted);
  letter-spacing: .12em;
  font-weight: 400;
  text-transform: uppercase;
}

.navbar-nexo .nav-link {
  color: var(--text) !important;
  font-size: .92rem;
  font-weight: 500;
  padding: .5rem .9rem !important;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
}
.navbar-nexo .nav-link:hover,
.navbar-nexo .nav-link:focus { color: var(--accent) !important; background: rgba(0, 224, 160, .07); }
.navbar-nexo .nav-link.active { color: var(--accent) !important; }

.navbar-nexo .dropdown-menu {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: .5rem;
  box-shadow: var(--shadow-card);
}
.navbar-nexo .dropdown-item {
  color: var(--text);
  border-radius: var(--radius-sm);
  padding: .55rem .75rem;
  font-size: .9rem;
}
.navbar-nexo .dropdown-item:hover,
.navbar-nexo .dropdown-item:focus {
  background: rgba(0, 224, 160, .1);
  color: var(--accent);
}
.navbar-toggler { border-color: var(--border-strong); }
.navbar-toggler:focus { box-shadow: 0 0 0 .2rem rgba(0, 224, 160, .25); }

.btn-nav-cta {
  background: var(--accent);
  color: #04140f !important;
  font-weight: 600;
  border-radius: var(--radius-sm);
  padding: .5rem 1.1rem !important;
}
.btn-nav-cta:hover { background: var(--accent-2); color: #1a0800 !important; }

/* ---------- 4. HERO ---------- */
.hero {
  position: relative;
  min-height: 92vh;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 3rem;
  padding-top: 7rem;
  overflow: hidden;
}
.hero-copy { position: relative; z-index: 2; }
.hero-tagline {
  font-size: clamp(2.1rem, 4.2vw, 3.4rem);
  line-height: 1.08;
  margin-bottom: 1.25rem;
}
.hero-tagline .accent { color: var(--accent); }
.hero-desc { color: var(--text-muted); font-size: 1.05rem; max-width: 46ch; margin-bottom: 2rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.5rem; }

.hero-stats { display: flex; gap: 2rem; flex-wrap: wrap; }
.hero-stats .stat b {
  display: block; font-family: var(--font-mono); font-size: 1.5rem; color: var(--accent);
}
.hero-stats .stat span { font-size: .8rem; color: var(--text-muted); }

.hero-visual {
  position: relative;
  z-index: 1;
  aspect-ratio: 1 / 1;
  max-height: 560px;
  justify-self: center;
  align-self: center;
  width: 100%;
}
#nodeCanvas { width: 100%; height: 100%; display: block; }

.logo-badge {
  width: 190px; height: 190px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: radial-gradient(circle at 35% 30%, rgba(0,224,160,.18), transparent 65%), var(--bg-card);
  border: 1px solid var(--border-strong);
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.logo-badge img { width: 62%; height: auto; }

/* ---------- 5. BOTONES ---------- */
.btn-nexo-primary {
  background: var(--accent);
  border: 1px solid var(--accent);
  color: #04140f;
  font-weight: 600;
  padding: .75rem 1.6rem;
  border-radius: var(--radius-sm);
  transition: transform var(--transition), background var(--transition), box-shadow var(--transition);
}
.btn-nexo-primary:hover { background: var(--accent-dim); color: #04140f; transform: translateY(-2px); box-shadow: 0 10px 24px -10px rgba(0,224,160,.5); }

.btn-nexo-outline {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--text);
  font-weight: 600;
  padding: .75rem 1.6rem;
  border-radius: var(--radius-sm);
  transition: border-color var(--transition), color var(--transition), transform var(--transition);
}
.btn-nexo-outline:hover { border-color: var(--accent-2); color: var(--accent-2); transform: translateY(-2px); }

.btn-nexo-2 {
  background: var(--accent-2);
  border: 1px solid var(--accent-2);
  color: #1a0800;
  font-weight: 600;
  padding: .75rem 1.6rem;
  border-radius: var(--radius-sm);
  transition: transform var(--transition), background var(--transition);
}
.btn-nexo-2:hover { background: var(--accent-2-dim); color: #fff; transform: translateY(-2px); }

.btn-sm-nexo { padding: .45rem 1rem; font-size: .85rem; }

/* ---------- 6. TARJETAS ---------- */
.card-nexo {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.9rem;
  height: 100%;
  transition: transform var(--transition), border-color var(--transition), background var(--transition);
}
.card-nexo:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 224, 160, .35);
  background: var(--bg-card-hover);
}
.card-nexo .icon-wrap {
  width: 52px; height: 52px;
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  background: rgba(0, 224, 160, .1);
  color: var(--accent);
  margin-bottom: 1.1rem;
  font-size: 1.4rem;
}
.card-nexo h3, .card-nexo h4 { font-size: 1.15rem; margin-bottom: .6rem; }
.card-nexo p { color: var(--text-muted); font-size: .92rem; margin-bottom: 0; }

.card-nexo.area-card { display: flex; flex-direction: column; }
.card-nexo.area-card .tag-list { display: flex; flex-wrap: wrap; gap: .4rem; margin: .9rem 0; }
.tag-pill {
  font-family: var(--font-mono);
  font-size: .68rem;
  padding: .25rem .6rem;
  border-radius: 999px;
  background: rgba(122, 139, 163, .12);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

/* ---------- 7. MISIÓN / VISIÓN ---------- */
.mv-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.mv-card::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,224,160,.06), transparent 60%);
  pointer-events: none;
}
.mv-card .mv-icon { font-size: 2rem; color: var(--accent); margin-bottom: 1rem; }
.mv-card.vision .mv-icon { color: var(--accent-2); }
.mv-card.vision::after { background: linear-gradient(135deg, rgba(255,107,53,.06), transparent 60%); }

/* ---------- 8. CEO ---------- */
.ceo-panel {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2.5rem;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}
.ceo-photo-frame {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: var(--radius-md);
  background: linear-gradient(160deg, var(--bg-card-hover), var(--bg-main));
  border: 1px solid var(--border-strong);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted);
  overflow: hidden;
}
.ceo-photo-frame img { width: 100%; height: 100%; object-fit: cover; }
.ceo-name { font-size: 1.6rem; margin-bottom: .1rem; }
.ceo-title { font-family: var(--font-mono); color: var(--accent); font-size: .85rem; margin-bottom: 1rem; letter-spacing: .04em; }
.ceo-bio { color: var(--text-muted); margin-bottom: 1.2rem; }
.ceo-credentials { list-style: none; padding: 0; margin: 0 0 1.3rem; display: flex; flex-direction: column; gap: .5rem; }
.ceo-credentials li { display: flex; gap: .6rem; font-size: .9rem; color: var(--text); }
.ceo-credentials li::before { content: "▹"; color: var(--accent-2); }

/* ---------- 9. VIDEO ---------- */
.video-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: #000;
  aspect-ratio: 16/9;
}
.video-frame iframe,
.video-frame video { width: 100%; height: 100%; border: 0; display: block; }

/* ---------- 10. CONTACTO / REDES ---------- */
.contact-chip {
  display: flex;
  align-items: center;
  gap: .9rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.3rem;
  transition: border-color var(--transition), transform var(--transition);
  color: var(--text);
}
.contact-chip:hover { border-color: var(--accent); transform: translateX(4px); color: var(--text); }
.contact-chip .chip-icon {
  width: 42px; height: 42px; border-radius: 50%;
  background: rgba(0,224,160,.1); color: var(--accent);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.contact-chip small { display: block; color: var(--text-muted); font-family: var(--font-mono); font-size: .72rem; }

/* ---------- 11. FORO / COMENTARIOS ---------- */
.forum-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
}
.forum-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; max-height: 460px; overflow-y: auto; padding-right: .5rem; }
.forum-list::-webkit-scrollbar { width: 6px; }
.forum-list::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
.forum-comment {
  background: rgba(122, 139, 163, .06);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  padding: 1rem 1.2rem;
  animation: fadeInUp .35s ease;
}
.forum-comment .comment-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: .35rem; }
.forum-comment .comment-author { font-weight: 600; color: #fff; font-size: .92rem; }
.forum-comment .comment-date { font-family: var(--font-mono); font-size: .7rem; color: var(--text-muted); }
.forum-comment p { margin: 0; color: var(--text-muted); font-size: .9rem; }
.forum-empty { color: var(--text-muted); font-size: .9rem; font-style: italic; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---------- 12. FORMULARIOS ---------- */
.form-nexo label {
  font-family: var(--font-mono);
  font-size: .74rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: var(--text-muted);
  margin-bottom: .4rem;
}
.form-nexo .form-control,
.form-nexo .form-select,
.form-nexo textarea {
  background: rgba(7, 14, 26, .6);
  border: 1px solid var(--border-strong);
  color: var(--text);
  border-radius: var(--radius-sm);
  padding: .7rem .9rem;
  font-size: .92rem;
}
.form-nexo .form-control:focus,
.form-nexo .form-select:focus,
.form-nexo textarea:focus {
  background: rgba(7, 14, 26, .85);
  border-color: var(--accent);
  color: var(--text);
  box-shadow: 0 0 0 .18rem rgba(0, 224, 160, .18);
}
.form-nexo .form-control::placeholder { color: var(--text-muted); opacity: .7; }
.form-nexo .invalid-feedback-inline {
  display: none;
  font-size: .78rem;
  color: var(--accent-2);
  margin-top: .35rem;
}
.form-nexo .is-invalid ~ .invalid-feedback-inline,
.form-nexo .invalid-feedback-inline.show { display: block; }
.form-nexo .is-invalid { border-color: var(--accent-2) !important; }
.form-nexo .is-valid { border-color: var(--accent) !important; }
.form-success-msg {
  display: none;
  background: rgba(0, 224, 160, .1);
  border: 1px solid rgba(0, 224, 160, .4);
  color: var(--accent);
  border-radius: var(--radius-sm);
  padding: .9rem 1.1rem;
  font-size: .9rem;
  margin-top: 1rem;
}
.form-success-msg.show { display: block; animation: fadeInUp .35s ease; }

/* ---------- 13. PAGE HEADER (páginas internas) ---------- */
.page-header {
  padding: 9rem 0 3.5rem;
  position: relative;
  border-bottom: 1px solid var(--border);
}
.page-header .eyebrow { margin-bottom: .6rem; display: block; }
.breadcrumb-nexo { font-family: var(--font-mono); font-size: .78rem; color: var(--text-muted); }
.breadcrumb-nexo a { color: var(--text-muted); }
.breadcrumb-nexo a:hover { color: var(--accent); }
.breadcrumb-nexo .sep { margin: 0 .4rem; }

/* ---------- 14. TABLA / LISTAS DE ÁREA (consultoría, cursos, empleo) ---------- */
.area-block {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.2rem;
  background: var(--bg-card);
  margin-bottom: 1.75rem;
  scroll-margin-top: 100px;
}
.area-block .area-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.area-block .area-head .icon-wrap { margin-bottom: 0; flex-shrink: 0; }
.area-block ul.check-list { list-style: none; padding: 0; margin: 0; }
.area-block ul.check-list li { display: flex; gap: .6rem; padding: .35rem 0; color: var(--text-muted); font-size: .92rem; }
.area-block ul.check-list li::before { content: "✓"; color: var(--accent); font-weight: 700; }

.job-item, .course-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.4rem;
  margin-bottom: .9rem;
  background: rgba(122,139,163,.04);
  transition: border-color var(--transition), background var(--transition);
}
.job-item:hover, .course-item:hover { border-color: var(--border-strong); background: rgba(122,139,163,.08); }
.job-item h4, .course-item h4 { font-size: 1rem; margin: 0 0 .25rem; }
.job-item .meta, .course-item .meta { font-family: var(--font-mono); font-size: .74rem; color: var(--text-muted); display: flex; gap: 1rem; flex-wrap: wrap; }

.badge-nexo {
  font-family: var(--font-mono);
  font-size: .68rem;
  padding: .3rem .65rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
}
.badge-nexo.open { color: var(--accent); border-color: rgba(0,224,160,.4); background: rgba(0,224,160,.08); }

/* ---------- 15. BLOG ---------- */
.blog-filters { display: flex; flex-wrap: wrap; gap: .6rem; margin-bottom: 2.5rem; }
.filter-chip {
  font-family: var(--font-mono);
  font-size: .78rem;
  padding: .45rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);
}
.filter-chip:hover { color: var(--text); border-color: var(--text-muted); }
.filter-chip.active { background: var(--accent); color: #04140f; border-color: var(--accent); }

.blog-card { display: flex; flex-direction: column; }
.blog-card .blog-thumb {
  height: 160px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(0,224,160,.18), rgba(255,107,53,.12));
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 1.1rem;
}
.blog-card .blog-meta { font-family: var(--font-mono); font-size: .72rem; color: var(--text-muted); margin-bottom: .5rem; }
.blog-card[data-cat] { display: flex; }
.blog-card.hidden-cat { display: none !important; }

/* ---------- 16. MACRO-PROYECTOS ---------- */
.macro-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-card);
  height: 100%;
  display: flex; flex-direction: column;
  transition: transform var(--transition), border-color var(--transition);
}
.macro-card:hover { transform: translateY(-4px); border-color: rgba(0,224,160,.35); }
.macro-card .macro-visual {
  height: 190px;
  background: radial-gradient(circle at 30% 20%, rgba(0,224,160,.25), transparent 55%), var(--bg-main);
  display: flex; align-items: center; justify-content: center;
  font-size: 2.4rem; color: var(--accent);
  border-bottom: 1px solid var(--border);
}
.macro-card .macro-body { padding: 1.6rem; flex: 1; display: flex; flex-direction: column; }
.macro-card .macro-body p { color: var(--text-muted); flex: 1; }

/* ---------- 17. EVENTOS ---------- */
.event-card {
  display: flex;
  gap: 1.3rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.4rem;
  background: var(--bg-card);
  margin-bottom: 1rem;
}
.event-date-block {
  flex-shrink: 0;
  width: 68px; height: 68px;
  border-radius: var(--radius-sm);
  background: rgba(0,224,160,.1);
  color: var(--accent);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font-family: var(--font-mono);
}
.event-date-block .day { font-size: 1.3rem; font-weight: 700; line-height: 1; }
.event-date-block .mon { font-size: .68rem; text-transform: uppercase; }

/* ---------- 18. FOOTER ---------- */
footer.site-footer {
  background: #050a13;
  border-top: 1px solid var(--border);
  padding: 3.5rem 0 1.5rem;
}
footer.site-footer h5 { font-size: .95rem; color: #fff; margin-bottom: 1rem; }
footer.site-footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .55rem; }
footer.site-footer ul li a { color: var(--text-muted); font-size: .88rem; }
footer.site-footer ul li a:hover { color: var(--accent); }
.footer-social { display: flex; gap: .7rem; margin-top: 1rem; }
.footer-social a {
  width: 38px; height: 38px; border-radius: 50%;
  background: var(--bg-card); border: 1px solid var(--border-strong);
  display: flex; align-items: center; justify-content: center;
  color: var(--text);
}
.footer-social a:hover { background: var(--accent); color: #04140f; border-color: var(--accent); }
.footer-bottom {
  border-top: 1px solid var(--border);
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  font-size: .8rem;
  color: var(--text-muted);
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: .6rem;
}

/* ---------- 19. SCROLL REVEAL ---------- */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
.reveal.in-view { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
}

/* ---------- 20. BACK TO TOP ---------- */
.back-to-top {
  position: fixed; right: 1.5rem; bottom: 1.5rem;
  width: 46px; height: 46px; border-radius: 50%;
  background: var(--accent); color: #04140f;
  display: flex; align-items: center; justify-content: center;
  border: none; z-index: 999;
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: all var(--transition);
}
.back-to-top.show { opacity: 1; visibility: visible; transform: translateY(0); }

/* ==========================================================================
   MEDIA QUERIES — breakpoints propios sobre los de Bootstrap
   <=576px móviles | 577-768 tablet vertical | 769-992 tablet horizontal | >=993 escritorio
   ========================================================================== */

/* Escritorio grande ya cubierto por reglas base (>=993px) */

/* Tablet horizontal 769px–992px: 3 columnas, ajusta hero */
@media (max-width: 992px) {
  .hero { grid-template-columns: 1fr; text-align: center; min-height: auto; padding-top: 8rem; padding-bottom: 3rem; }
  .hero-actions, .hero-stats { justify-content: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-visual { order: -1; max-height: 380px; margin-bottom: 1rem; }
  .ceo-panel { grid-template-columns: 1fr; text-align: center; }
  .ceo-photo-frame { max-width: 260px; margin: 0 auto; }
  .ceo-credentials li { justify-content: center; }
}

/* Tablet vertical 577px–768px: 2 columnas */
@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
  .ceo-panel { padding: 1.8rem; }
  .job-item, .course-item { flex-direction: column; align-items: flex-start; }
  .footer-bottom { flex-direction: column; text-align: center; }
}

/* Móviles <=576px: navbar hamburguesa ya provista por Bootstrap, columna única */
@media (max-width: 576px) {
  .hero-tagline { font-size: 2rem; }
  .page-header { padding: 7.5rem 0 2.5rem; }
  .mv-card, .forum-box, .area-block { padding: 1.4rem; }
  .event-card { flex-direction: column; }
  .event-date-block { flex-direction: row; gap: .4rem; width: auto; height: auto; padding: .5rem .8rem; align-self: flex-start; }
  .logo-badge { width: 130px; height: 130px; }
}
