const toggle = document.getElementById("theme-toggle");
const tooltip = document.getElementById("theme-tooltip");
const BASE = import.meta.env.BASE_URL;

if (toggle) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.checked = true;
  }

  function updateTooltip() {
    if (!tooltip) return;
    tooltip.textContent = document.body.classList.contains("light-mode")
      ? "Passer en mode sombre"
      : "Passer en mode clair";
  }

  updateTooltip();

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
    updateTooltip();
  });
}

const skills = [
  { name: "CSS3", image: BASE + "images/css3.svg", type: "dev" },
  { name: "HTML5", image: BASE + "images/html5.svg", type: "dev" },
  { name: "JavaScript", image: BASE + "images/javascript.svg", type: "dev" },
  { name: "React", image: BASE + "images/react.svg", type: "dev" },
  { name: "Responsive Design", image: BASE + "images/responsive.png", type: "dev" },
  { name: "WordPress", image: BASE + "images/wordpress.svg", type: "dev" },

  { name: "Cypress", image: BASE + "images/cypress.svg", type: "qa" },
  { name: "Postman", image: BASE + "images/postman.svg", type: "qa" },
  { name: "Swagger", image: BASE + "images/swagger.svg", type: "qa" },
  { name: "Stratégie de test", image: BASE + "images/test.png", type: "qa" },
  { name: "Optimisation & Debug", image: BASE + "images/optimisation-et-debug.png", type: "qa" },

  { name: "Git", image: BASE + "images/git.svg", type: "tools" },
  { name: "GitHub", image: BASE + "images/github.svg", type: "tools" },
  { name: "Docker", image: BASE + "images/docker.svg", type: "tools" },
  { name: "Jira", image: BASE + "images/jira.svg", type: "tools" },
  { name: "Confluence", image: BASE + "images/confluence.svg", type: "tools" },
  { name: "Notion", image: BASE + "images/notion.svg", type: "tools" },
  { name: "Trello", image: BASE + "images/trello.svg", type: "tools" },
  { name: "Slack", image: BASE + "images/slack.svg", type: "tools" },
  { name: "Figma", image: BASE + "images/figma.svg", type: "tools" },
  { name: "Miro", image: BASE + "images/miro.png", type: "tools" },
  { name: "Visual Studio Code", image: BASE + "images/vscode.svg", type: "tools" },
  { name: "Agile / Scrum", image: BASE + "images/agile.png", type: "tools" },
  { name: "Gestion de projet", image: BASE + "images/gestion-de-projet.png", type: "tools" }
];

function generateSkills() {
  const track = document.getElementById("skills-track");
  if (!track) return;

  const doubledSkills = skills.concat(skills);

  doubledSkills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill-item", skill.type);

    div.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}">
      <span>${skill.name}</span>
    `;

    track.appendChild(div);
  });
}

generateSkills();

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.style.opacity = "0.7";
    button.style.pointerEvents = "none";

    setTimeout(() => {
      form.reset();
      button.style.opacity = "1";
      button.style.pointerEvents = "auto";

      successMessage.textContent = "✨ Message envoyé avec succès !";
      successMessage.classList.add("show");

      setTimeout(() => {
        successMessage.classList.remove("show");
      }, 4000);
    }, 1000);
  });
}

const timelineItems = document.querySelectorAll(".timeline-item");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal-overlay");
  const closeButtons = document.querySelectorAll(".close-modal");

  modalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("active");
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".modal-overlay").classList.remove("active");
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
});

const nav = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".nav-link");

if (nav && links.length > 0) {
  const indicator = document.createElement("div");
  indicator.classList.add("nav-indicator");
  nav.appendChild(indicator);

  function moveIndicator(element) {
    const rect = element.getBoundingClientRect();
    const parentRect = nav.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.left = rect.left - parentRect.left + "px";
  }

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      moveIndicator(link);
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      if (link.getAttribute("href").includes(current)) {
        moveIndicator(link);
      }
    });
  });

  moveIndicator(links[0]);
}