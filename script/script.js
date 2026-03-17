// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/${item.image}" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text">${item.text}</p>
                        <div class="text-center">
                            <a href="${item.link}" class="btn btn-success">Lien</a>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();

// Dark / Light mode toggle
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

/* =========================
   SKILLS CAROUSEL DYNAMIC
========================= */

const skills = [
    // DEV
    { name: "CSS3", image: "../images/css3.svg", type: "dev" },
    { name: "HTML5", image: "../images/html5.svg", type: "dev" },
    { name: "JavaScript", image: "../images/javascript.svg", type: "dev" },
    { name: "React", image: "../images/react.svg", type: "dev" },
    { name: "Responsive Design", image: "../images/responsive.png", type: "dev" },
    { name: "WordPress", image: "../images/wordpress.svg", type: "dev" },
  
    // QA
    { name: "Cypress", image: "../images/cypress.svg", type: "qa" },
    { name: "Postman", image: "../images/postman.svg", type: "qa" },
    { name: "Swagger", image: "../images/swagger.svg", type: "qa" },
    { name: "Stratégie de test", image: "../images/test.png", type: "qa" },
    { name: "Optimisation & Debug", image: "../images/optimisation-et-debug.png", type: "qa" },
  
    // TOOLS
    { name: "Git", image: "../images/git.svg", type: "tools" },
    { name: "GitHub", image: "../images/github.svg", type: "tools" },
    { name: "Docker", image: "../images/docker.svg", type: "tools" },
    { name: "Jira", image: "../images/jira.svg", type: "tools" },
    { name: "Confluence", image: "../images/confluence.svg", type: "tools" },
    { name: "Notion", image: "../images/notion.svg", type: "tools" },
    { name: "Trello", image: "../images/trello.svg", type: "tools" },
    { name: "Slack", image: "../images/slack.svg", type: "tools" },
    { name: "Figma", image: "../images/figma.svg", type: "tools" },
    { name: "Miro", image: "../images/miro.png", type: "tools" },
    { name: "Visual Studio Code", image: "../images/vscode.svg", type: "tools" },
    { name: "Agile / Scrum", image: "../images/agile.png", type: "tools" },
    { name: "Gestion de projet", image: "../images/gestion-de-projet.png", type: "tools" }
  ];
  
  function generateSkills() {
    const track = document.getElementById("skills-track");
  
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

/* =========================
   EXPERIENCE MODALS
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const modalButtons = document.querySelectorAll(".open-modal");
    const modals = document.querySelectorAll(".modal-overlay");
    const closeButtons = document.querySelectorAll(".close-modal");
  
    modalButtons.forEach(button => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("active");
        }
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