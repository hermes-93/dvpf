const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/** Замените src в photos на пути к своим файлам (папка assets/ или внешние URL). */
const PORTFOLIO_DATA = {
  shootings: {
    title: "Съёмки",
    intro:
      "Один проект — шесть вертикальных кадров 3:4: съёмка как цельная линия от арт-дирекции и сета до костюма в кадре.",
    items: [
      {
        title: "От сета до костюма",
        carouselAspect: "3/4",
        description:
          "Я выстраиваю съёмку целиком: арт-дирекция, организация съёмочного дня, сет-дизайн и работа художника по костюму — в одной цепочке, без разрыва между пространством и телом. Кадр получается не набором ролей, а одним решением — когда плоскость декора, свет и силуэт одежды читаются как единая форма.",
        photos: Array.from({ length: 6 }, (_, i) => {
          const n = i + 1;
          return {
            src: `assets/cat5-item${n}.jpg`,
            alt: `Съёмки — арт-дирекция и образ, кадр ${n}`,
          };
        }),
      },
    ],
  },
  millinery: {
    title: "Шляпы",
    intro:
      "Один проект — пять вертикальных кадров 3:4: шляпы, вынесенные из самостоятельного освоения ремесла.",
    items: [
      {
        title: "Сама собрала линию",
        carouselAspect: "3/4",
        description:
          "Я училась делать шляпы сама: от разметки тульи и посадки козырька до финиша края и внутреннего каркаса — шаг за шагом, без заданной траектории, пока объём не начал держать баланс на голове и читаться в профиль. Ниже — пять кадров этой практики, выстроенных в одну вертикальную серию.",
        photos: Array.from({ length: 5 }, (_, i) => {
          const n = i + 1;
          return {
            src: `assets/cat4-item${n}.jpg`,
            alt: `Шляпы — самостоятельное ремесло, кадр ${n}`,
          };
        }),
      },
    ],
  },
  bags: {
    title: "Сумки",
    intro:
      "Один проект: награда в конкурсе по обуви и аксессуарам вывела на курс по сумкам — от выкройки до готового изделия.",
    items: [
      {
        title: "Практика после конкурса",
        description:
          "Победа в конкурсе по дизайну обуви и аксессуаров принесла не только признание, но и подаренный курс — про изготовление и сборку сумки. Я увела эти навыки в реальную вещь: логика ношения, ремесленная посадка фурнитуры и чистота контура так же важны здесь, как в прежней работе с аксессуаром.",
        photos: [
          { src: "assets/cat2-item1-img1.jpg", alt: "Сумки — практика после конкурса, фото 1" },
          { src: "assets/cat2-item1-img2.jpg", alt: "Сумки — практика после конкурса, фото 2" },
          { src: "assets/cat2-item1-img3.jpg", alt: "Сумки — практика после конкурса, фото 3" },
          { src: "assets/cat2-item1-img4.jpg", alt: "Сумки — практика после конкурса, фото 4" },
          { src: "assets/cat2-item1-img5.jpg", alt: "Сумки — практика после конкурса, фото 5" },
          { src: "assets/cat2-item1-img6.jpg", alt: "Сумки — практика после конкурса, фото 6" },
        ],
      },
    ],
  },
  footwear: {
    title: "Обувь",
    intro: "Линия каблука, посадка и материалы верха. Три пары с разным характером.",
    items: [
      {
        title: "Апофеоз войны",
        description:
          "Пара отсылает к полотну В. В. Верещагина: пластика каблука выстраивается как отголосок той самой горы черепов на холсте — плотная, узнаваемая форма, собранная в силуэт парадной обуви и читаемая сбоку в одном дыхании с картиной.",
        photos: [
          { src: "assets/cat1-item1-img1.jpg", alt: "«Апофеоз войны» — кадр 1" },
          { src: "assets/cat1-item1-img2.jpg", alt: "«Апофеоз войны» — кадр 2" },
          { src: "assets/cat1-item1-img3.jpg", alt: "«Апофеоз войны» — кадр 3" },
        ],
      },
      {
        title: "Балетки-пуанты Livide",
        description:
          "Силуэт ведёт к балетным пуантам из французского хоррора «Livide»: узнаваемая пластика пуанты и тревожный, почти гипнотический ритм картины переносятся в пару без каблука — плоская посадка, острый носок и плотный контур верха читаются как отсылка к танцу и к её визуальной тяжести на экране.",
        photos: [
          { src: "assets/cat1-item2-img1.jpg", alt: "«Балетки-пуанты Livide» — фото 1" },
          { src: "assets/cat1-item2-img2.jpg", alt: "«Балетки-пуанты Livide» — фото 2" },
          {
            type: "video",
            src: "assets/cat1-item2-img3.mp4",
            poster: "assets/cat1-item2-img1.jpg",
            alt: "«Балетки-пуанты Livide» — видео",
          },
        ],
      },
      {
        title: "Ботинки — Московская неделя моды",
        description:
          "Пара сделана для показа Лесиа Лисун — выход 17 марта 2025 года в программе Московской недели моды: силуэт, высота и материал верха подчинены подиуму и общему ряду образов, чтобы читаться в движении и в общем свете дефиле.",
        photos: [
          { src: "assets/cat1-item3-img1.jpg", alt: "Ботинки, Московская неделя моды — фото 1" },
          { src: "assets/cat1-item3-img2.jpg", alt: "Ботинки, Московская неделя моды — фото 2" },
          { src: "assets/cat1-item3-img3.jpg", alt: "Ботинки, Московская неделя моды — фото 3" },
        ],
      },
    ],
  },
  garments: {
    title: "Одежда",
    intro:
      "Один проект — двенадцать вертикальных кадров 3:4: линия одежды, сделанная параллельно программам по обуви и сумкам.",
    items: [
      {
        title: "Параллельно курсам",
        carouselAspect: "3/4",
        description:
          "На том же отрезке, где шли занятия по обуви и сумкам, выстраивалась и одежда: выкройки, примерки и силуэт без разрыва с основным обучением. Это не побочный набросок, а соседняя дорожка — те же требования к линии и материалу, перенесённые в масштаб тела; в кадре — двенадцать вертикальных фрагментов этой работы.",
        photos: Array.from({ length: 12 }, (_, i) => {
          const n = i + 1;
          return {
            src: `assets/cat3-item${n}.jpg`,
            alt: `Одежда, параллельно курсам — кадр ${n}`,
          };
        }),
      },
    ],
  },
  sketches: {
    title: "Эскизы",
    intro:
      "Один проект — восемь вертикальных кадров 3:4: листы, где форма ещё звучит линией и пропорцией, до перехода в вещь.",
    items: [
      {
        title: "Мои эскизы",
        carouselAspect: "3/4",
        description:
          "Это мои эскизы — первый слой проекта: силуэт, посадка, ритм шва и намёк материала фиксируются на вертикальном листе до CAD и ателье. Между свободным штрихом и геометрией я держу баланс, чтобы позже перенести в объём без потери нити — кадр за кадром, восемь фрагментов этой линии.",
        photos: Array.from({ length: 8 }, (_, i) => {
          const n = i + 1;
          return {
            src: `assets/cat6-item${n}.jpg`,
            alt: `Эскизы — лист ${n}`,
          };
        }),
      },
    ],
  },
};

function slicePreviewUrls(key) {
  const data = PORTFOLIO_DATA[key];
  if (!data?.items?.length) return [];
  const srcs = [];
  for (const item of data.items) {
    if (!item.photos) continue;
    for (const p of item.photos) {
      if (p.type === "video") {
        if (p.poster) srcs.push(p.poster);
      } else if (p.src) {
        srcs.push(p.src);
      }
    }
  }
  return srcs;
}

function cssUrlForSlice(path) {
  const u = String(path).replace(/\\/g, "/").replace(/"/g, "%22");
  return `url("${u}")`;
}

function initPortfolioSlicePreviews() {
  document.querySelectorAll(".ed-slice[data-portfolio]").forEach((btn) => {
    const key = btn.dataset.portfolio;
    const urls = slicePreviewUrls(key);
    if (!urls.length) return;
    const n = urls.length;
    const top = urls[0];
    let bottom;
    if (key === "millinery") {
      if (n >= 4) bottom = urls[3];
      else if (n >= 3) bottom = urls[2];
      else if (n >= 2) bottom = urls[1];
      else bottom = urls[0];
    } else {
      bottom = n > 1 ? urls[1] : urls[0];
    }
    btn.style.setProperty("--slice-top", cssUrlForSlice(top));
    btn.style.setProperty("--slice-bottom", cssUrlForSlice(bottom));
  });
}

function carouselHtml(photos, carouselAspect) {
  const ratioClass = carouselAspect === "3/4" ? " ed-img-carousel--ar-3-4" : "";
  const imgW = carouselAspect === "3/4" ? 900 : 960;
  const imgH = carouselAspect === "3/4" ? 1200 : 960;
  const slides = photos
    .map((p) => {
      if (p.type === "video") {
        const posterAttr = p.poster ? ` poster="${escapeHtml(p.poster)}"` : "";
        const label = escapeHtml(p.alt || "Видео");
        const srcList = [p.src, p.srcFallback].filter(Boolean);
        const sourcesHtml = srcList
          .map((src) => {
            const mime = /\.mov($|\?)/i.test(src) ? "video/quicktime" : "video/mp4";
            return `<source src="${escapeHtml(src)}" type="${mime}" />`;
          })
          .join("\n        ");
        return `
    <li class="ed-img-carousel__slide">
      <video
        class="ed-img-carousel__media ed-img-carousel__media--video"
        controls
        playsinline
        preload="auto"
        ${posterAttr}
        aria-label="${label}"
      >
        ${sourcesHtml}
      </video>
    </li>`;
      }
      return `
    <li class="ed-img-carousel__slide">
      <img class="ed-img-carousel__media ed-img-carousel__media--img" src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt)}" width="${imgW}" height="${imgH}" loading="lazy" decoding="async" />
    </li>`;
    })
    .join("");

  return `
    <div class="ed-img-carousel${ratioClass}" data-img-carousel tabindex="0">
      <div class="ed-img-carousel__viewport">
        <ul class="ed-img-carousel__track">${slides}</ul>
      </div>
      <div class="ed-img-carousel__controls">
        <button type="button" class="ed-img-carousel__btn" data-carousel-prev aria-label="Предыдущий слайд">←</button>
        <div class="ed-img-carousel__dots" data-carousel-dots></div>
        <button type="button" class="ed-img-carousel__btn" data-carousel-next aria-label="Следующий слайд">→</button>
      </div>
    </div>`;
}

let portfolioModalEscapeHandler = null;
let portfolioLastFocus = null;

function closePortfolioModal() {
  const modal = document.querySelector("[data-portfolio-modal]");
  if (!modal) return;

  modal.setAttribute("hidden", "");
  document.body.style.overflow = "";

  modal.querySelectorAll("video").forEach((video) => video.pause());

  if (portfolioModalEscapeHandler) {
    document.removeEventListener("keydown", portfolioModalEscapeHandler);
    portfolioModalEscapeHandler = null;
  }

  if (portfolioLastFocus && typeof portfolioLastFocus.focus === "function") {
    portfolioLastFocus.focus();
  }
  portfolioLastFocus = null;
}

function openPortfolioModal(key, trigger) {
  const data = PORTFOLIO_DATA[key];
  const modal = document.querySelector("[data-portfolio-modal]");
  if (!data || !modal) return;

  portfolioLastFocus = trigger || document.activeElement;

  const titleEl = modal.querySelector("#ed-modal-title");
  const introEl = modal.querySelector(".ed-modal__intro");
  const bodyEl = modal.querySelector("[data-modal-works]");

  titleEl.textContent = data.title;
  introEl.textContent = data.intro;

  bodyEl.innerHTML = data.items
    .map(
      (item) => `
    <article class="ed-modal__work">
      <h3 class="ed-modal__work-title">${escapeHtml(item.title)}</h3>
      <p class="ed-modal__work-text">${escapeHtml(item.description)}</p>
      ${carouselHtml(item.photos, item.carouselAspect)}
    </article>`,
    )
    .join("");

  modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";

  bodyEl.querySelectorAll("[data-img-carousel]").forEach(initImgCarousel);
  bodyEl.querySelectorAll("video").forEach((video) => {
    try {
      video.load();
    } catch (_) {
      /* ignore */
    }
  });

  const closeBtn = modal.querySelector(".ed-modal__close");
  if (closeBtn) closeBtn.focus();

  portfolioModalEscapeHandler = (event) => {
    if (event.key === "Escape") closePortfolioModal();
  };
  document.addEventListener("keydown", portfolioModalEscapeHandler);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });
  });
});

const heroShot = document.querySelector(".ed-hero__img");

if (heroShot && !prefersReducedMotion.matches) {
  let rafId;
  let shiftTarget = 0;
  let shiftCurrent = 0;
  const maxShift = 72;
  const parallaxGain = 0.05;
  const smooth = 0.14;

  const step = () => {
    shiftCurrent += (shiftTarget - shiftCurrent) * smooth;
    if (Math.abs(shiftTarget - shiftCurrent) < 0.35) shiftCurrent = shiftTarget;
    heroShot.style.transform = `translate3d(0, ${shiftCurrent.toFixed(2)}px, 0) scale(1.04)`;
    if (Math.abs(shiftTarget - shiftCurrent) > 0.02) {
      rafId = window.requestAnimationFrame(step);
    } else {
      rafId = undefined;
    }
  };

  const kick = () => {
    shiftTarget = Math.min(window.scrollY * parallaxGain, maxShift);
    if (!rafId) rafId = window.requestAnimationFrame(step);
  };

  window.addEventListener("scroll", kick, { passive: true });
  kick();
}

/** «Как я работаю»: наблюдаем весь блок контекста — play/pause безопаснее, чем только по <video>. */
const contextRoot = document.querySelector("#context");
const contextVideo = document.querySelector(".ed-context__video");
if (contextRoot && contextVideo) {
  contextVideo.muted = true;
  contextVideo.defaultMuted = true;
  const tryPlayContext = () => {
    if (prefersReducedMotion.matches) return;
    const p = contextVideo.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };
  const onContextObserve = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) tryPlayContext();
      else contextVideo.pause();
    });
  };
  const ioCtx = new IntersectionObserver(onContextObserve, {
    threshold: [0, 0.12, 0.25],
    rootMargin: "0px 0px -8% 0px",
  });
  ioCtx.observe(contextRoot);
}

function initSlider(root) {
  const track = root.querySelector(".ed-slider__track");
  const slides = [...root.querySelectorAll(".ed-slider__slide")];
  const prevBtn = root.querySelector("[data-slider-prev]");
  const nextBtn = root.querySelector("[data-slider-next]");
  const dotsWrap = root.querySelector("[data-slider-dots]");
  const live = root.querySelector("[data-slider-live]");

  if (!track || slides.length === 0 || !prevBtn || !nextBtn || !dotsWrap) return;

  let index = 0;

  slides.forEach((slide, i) => {
    const title = slide.dataset.sliderTitle || `Слайд ${i + 1}`;
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `ed-slider__dot${i === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `${title}, слайд ${i + 1} из ${slides.length}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });

  function announce() {
    if (!live) return;
    const title = slides[index].dataset.sliderTitle || "";
    live.textContent = `${title}. Слайд ${index + 1} из ${slides.length}.`;
  }

  function go(targetIndex) {
    index = (targetIndex + slides.length) % slides.length;
    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
    dotsWrap.querySelectorAll(".ed-slider__dot").forEach((dot, di) => {
      dot.classList.toggle("is-active", di === index);
    });
    announce();
  }

  prevBtn.addEventListener("click", () => go(index - 1));
  nextBtn.addEventListener("click", () => go(index + 1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  });

  announce();
}

function initImgCarousel(root) {
  const track = root.querySelector(".ed-img-carousel__track");
  const slides = [...root.querySelectorAll(".ed-img-carousel__slide")];
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const dotsWrap = root.querySelector("[data-carousel-dots]");

  if (!track || slides.length === 0 || !prevBtn || !nextBtn || !dotsWrap) return;

  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `ed-img-carousel__dot${i === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Слайд ${i + 1} из ${slides.length}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });

  function go(targetIndex) {
    root.querySelectorAll("video").forEach((video) => video.pause());
    index = (targetIndex + slides.length) % slides.length;
    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
    dotsWrap.querySelectorAll(".ed-img-carousel__dot").forEach((dot, di) => {
      dot.classList.toggle("is-active", di === index);
    });
    const activeVideo = slides[index].querySelector("video");
    if (activeVideo) {
      activeVideo.load();
    }
  }

  prevBtn.addEventListener("click", () => go(index - 1));
  nextBtn.addEventListener("click", () => go(index + 1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  });
}

document.querySelectorAll("[data-slider]").forEach(initSlider);

document.querySelectorAll("[data-portfolio]").forEach((btn) => {
  btn.addEventListener("click", () => {
    openPortfolioModal(btn.dataset.portfolio, btn);
  });
});

document.querySelectorAll("[data-modal-close]").forEach((el) => {
  el.addEventListener("click", () => closePortfolioModal());
});

initPortfolioSlicePreviews();
