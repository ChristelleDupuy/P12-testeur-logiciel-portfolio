import riding from "../assets/projects/riding.png";
import booki from "../assets/projects/booki.png";
import kasa from "../assets/projects/kasa.png";

const placeholder = riding;

const projects = [
  {
    title: "Riding Cities",
    image: riding,
    context: "Mise à jour d’une page web existante",
    category: ["dev"],
    details: {
      resume: "Création d’une section web à partir d’une maquette Figma, pour une association.",
      objectif: "Concevoir une section accessible et responsive à intégrer dans un site existant.",
      travail: [
        "Structuration du contenu en HTML sémantique",
        "Intégration en CSS à partir d’un design Figma",
        "Ajout d’interactions simples (hover, liens)",
        "Respect des bonnes pratiques d’accessibilité"
      ]
    }
  },

  {
    title: "Booki",
    image: booki,
    context: "Site de recherche d’hébergements",
    category: ["dev"],
    details: {
      resume: "Intégration d’une interface responsive pour un site de réservation.",
      objectif: "Reproduire fidèlement une maquette et assurer l’adaptabilité mobile.",
      travail: [
        "Intégration HTML/CSS complète",
        "Responsive design",
        "Flexbox & Grid",
        "Optimisation UX"
      ]
    }
  },

  {
    title: "JSE Avocats",
    image: placeholder,
    context: "Tests fonctionnels d’un site web",
    category: ["test"],
    details: {
      resume: "Campagne de tests complète.",
      objectif: "Garantir la qualité du site.",
      travail: [
        "Tests exploratoires",
        "Cas de tests",
        "Remontée de bugs",
        "Cahier de recette"
      ]
    }
  },

  {
    title: "724events",
    image: placeholder,
    context: "Audit et tests d’un site événementiel",
    category: ["test"],
    details: {
      resume: "Analyse complète du site.",
      objectif: "Améliorer qualité et performances.",
      travail: [
        "Tests fonctionnels",
        "Analyse perf",
        "Rapports bugs",
        "Reco"
      ]
    }
  },

  {
    title: "Print it",
    image: placeholder,
    context: "Ajout de fonctionnalités JavaScript",
    category: ["dev"],
    details: {
      resume: "Ajout d’un carrousel.",
      objectif: "Rendre le site interactif.",
      travail: [
        "DOM",
        "Events",
        "Slider",
        "JS dynamique"
      ]
    }
  },

  {
    title: "Sophie Bluel",
    image: placeholder,
    context: "Site dynamique avec API",
    category: ["dev"],
    details: {
      resume: "Connexion API + admin.",
      objectif: "Site dynamique.",
      travail: [
        "Fetch API",
        "Auth",
        "DOM dynamique",
        "CRUD"
      ]
    }
  },

  {
    title: "Kasa",
    image: kasa,
    context: "Application React",
    category: ["dev"],
    details: {
      resume: "App React complète.",
      objectif: "Routing + composants.",
      travail: [
        "React",
        "Router",
        "Props",
        "Composants"
      ]
    }
  },

  {
    title: "Menu Maker by Qwenta",
    image: placeholder,
    context: "Spécifications techniques",
    category: ["gestion"],
    details: {
      resume: "Conception d’un outil.",
      objectif: "Structurer un projet.",
      travail: [
        "Specs",
        "Choix techniques",
        "Kanban",
        "Analyse besoins"
      ]
    }
  },

  {
    title: "Eco Bliss Bath",
    image: placeholder,
    context: "Débogage et optimisation",
    category: ["dev", "test"],
    details: {
      resume: "Correction de bugs.",
      objectif: "Améliorer performance.",
      travail: [
        "Debug JS",
        "Perf",
        "SEO",
        "Tests"
      ]
    }
  },

  {
    title: "Tomsen by PayForge",
    image: placeholder,
    context: "Stratégie de test",
    category: ["test", "gestion"],
    details: {
      resume: "Stratégie complète.",
      objectif: "Produit fiable.",
      travail: [
        "Revue exigences",
        "Plan test",
        "Risques",
        "Organisation"
      ]
    }
  },

  {
    title: "Portfolio",
    image: placeholder,
    context: "Création de mon portfolio",
    category: ["dev"],
    details: {
      resume: "Portfolio moderne.",
      objectif: "Me valoriser.",
      travail: [
        "UI/UX",
        "React",
        "Animations",
        "Responsive"
      ]
    }
  }
];

export default projects;