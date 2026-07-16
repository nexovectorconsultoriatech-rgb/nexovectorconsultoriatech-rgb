/* ==========================================================================
   NEXOVECTOR TECH — main.js
   Interactividad compartida: navbar, scroll reveal, foro (localStorage),
   validación de formularios inline, canvas de nodos (firma visual), back-to-top
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initScrollReveal();
  initBackToTop();
  initForumBoards();
  initGenericFormValidation();
  initNodeCanvas();
  initBlogFilters();
  markActiveNavLink();
});

/* ---------- Navbar: clase .scrolled al hacer scroll ---------- */
function initNavbarScroll() {
  const nav = document.querySelector(".navbar-nexo");
  if (!nav) return;
  const toggle = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* ---------- Marca el link activo del menú según la página actual ---------- */
function markActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nexo .nav-link, .navbar-nexo .dropdown-item").forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.split("#")[0] === path) {
      link.classList.add("active");
    }
  });
}

/* ---------- Animación de aparición al hacer scroll (IntersectionObserver) ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  items.forEach(el => observer.observe(el));
}

/* ---------- Botón volver arriba ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ==========================================================================
   FORO / BANDEJA DE MENSAJES — persistido en localStorage
   Puede haber más de un foro por sitio (index + contacto), cada uno con su
   propio data-forum-id para no mezclar mensajes.
   ========================================================================== */
function initForumBoards() {
  const boards = document.querySelectorAll("[data-forum-id]");
  boards.forEach(board => {
    const forumId = board.getAttribute("data-forum-id");
    const storageKey = `nexovector_forum_${forumId}`;
    const form = board.querySelector(".forum-form");
    const list = board.querySelector(".forum-list");
    if (!form || !list) return;

    const render = () => {
      const comments = getComments(storageKey);
      list.innerHTML = "";
      if (!comments.length) {
        list.innerHTML = `<p class="forum-empty">Todavía no hay comentarios. Sé la primera persona en escribir.</p>`;
        return;
      }
      comments.slice().reverse().forEach(c => {
        const item = document.createElement("div");
        item.className = "forum-comment";
        item.innerHTML = `
          <div class="comment-head">
            <span class="comment-author">${escapeHtml(c.name)}</span>
            <span class="comment-date">${c.date}</span>
          </div>
          <p>${escapeHtml(c.message)}</p>
        `;
        list.appendChild(item);
      });
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('[name="forum-name"]');
      const msgInput = form.querySelector('[name="forum-message"]');
      let valid = true;

      if (!nameInput.value.trim()) {
        setFieldInvalid(nameInput, "Escribe tu nombre.");
        valid = false;
      } else setFieldValid(nameInput);

      if (!msgInput.value.trim() || msgInput.value.trim().length < 5) {
        setFieldInvalid(msgInput, "El mensaje debe tener al menos 5 caracteres.");
        valid = false;
      } else setFieldValid(msgInput);

      if (!valid) return;

      const comments = getComments(storageKey);
      comments.push({
        name: nameInput.value.trim(),
        message: msgInput.value.trim(),
        date: new Date().toLocaleString("es-EC", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
      });
      saveComments(storageKey, comments);
      render();
      form.reset();
      form.querySelectorAll(".form-control").forEach(f => f.classList.remove("is-valid"));

      const successMsg = board.querySelector(".form-success-msg");
      if (successMsg) {
        successMsg.classList.add("show");
        setTimeout(() => successMsg.classList.remove("show"), 3500);
      }
    });

    render();
  });
}

function getComments(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch { return []; }
}
function saveComments(key, comments) {
  localStorage.setItem(key, JSON.stringify(comments));
}
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================================
   VALIDACIÓN DE FORMULARIOS GENÉRICOS (eventos, empleo, cursos)
   Validación en tiempo real, mensajes inline, sin alert()
   ========================================================================== */
function initGenericFormValidation() {
  const forms = document.querySelectorAll("form[data-validate]:not(.forum-form)");

  forms.forEach(form => {
    const fields = form.querySelectorAll("[required]");

    fields.forEach(field => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let allValid = true;
      fields.forEach(field => {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        const firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const successMsg = form.parentElement.querySelector(".form-success-msg") || form.querySelector(".form-success-msg");
      form.reset();
      fields.forEach(f => f.classList.remove("is-valid", "is-invalid"));
      if (successMsg) {
        successMsg.classList.add("show");
        setTimeout(() => successMsg.classList.remove("show"), 4500);
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let valid = true;
  let message = "Este campo es obligatorio.";

  if (!value) {
    valid = false;
  } else if (field.type === "email") {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    valid = re.test(value);
    message = "Ingresa un correo electrónico válido.";
  } else if (field.type === "tel") {
    const re = /^[0-9+\-\s()]{7,15}$/;
    valid = re.test(value);
    message = "Ingresa un teléfono válido (7 a 15 dígitos).";
  } else if (field.tagName === "SELECT") {
    valid = value !== "";
    message = "Selecciona una opción.";
  } else if (field.hasAttribute("minlength")) {
    const min = parseInt(field.getAttribute("minlength"), 10);
    valid = value.length >= min;
    message = `Escribe al menos ${min} caracteres.`;
  }

  if (valid) {
    setFieldValid(field);
  } else {
    setFieldInvalid(field, message);
  }
  return valid;
}

function setFieldInvalid(field, message) {
  field.classList.remove("is-valid");
  field.classList.add("is-invalid");
  const feedback = field.parentElement.querySelector(".invalid-feedback-inline");
  if (feedback) feedback.textContent = message;
}
function setFieldValid(field) {
  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
}

/* ==========================================================================
   CANVAS DE NODOS — firma visual de la marca (red de puntos conectados)
   Ligero, sin librerías externas, respeta prefers-reduced-motion.
   ========================================================================== */
function initNodeCanvas() {
  const canvas = document.getElementById("nodeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, nodes;
  const COUNT = 34;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height;
  }

  function makeNodes() {
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = Math.min(w, h) * 0.28;

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!reduceMotion) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(0, 224, 160, ${0.18 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 224, 160, 0.85)";
      ctx.fill();
    });

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  makeNodes();
  draw();
  window.addEventListener("resize", () => { resize(); makeNodes(); if (reduceMotion) draw(); }, { passive: true });
}

/* ---------- Filtros del blog (chips por categoría) ---------- */
function initBlogFilters() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".blog-card[data-cat]");
  if (!chips.length || !cards.length) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.filter;
      cards.forEach(card => {
        const show = cat === "todos" || card.dataset.cat === cat;
        card.classList.toggle("hidden-cat", !show);
      });
    });
  });
}
