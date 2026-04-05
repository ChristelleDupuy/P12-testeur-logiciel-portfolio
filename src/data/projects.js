import riding from "../assets/projects/riding.png";
import booki from "../assets/projects/booki.png";
import jse from "../assets/projects/jse.png";
import events from "../assets/projects/events.png";
import printit from "../assets/projects/printit.png";
import sophie from "../assets/projects/sophie.png";
import kasa from "../assets/projects/kasa.png";
import qwenta from "../assets/projects/qwenta.png";
import ecobliss from "../assets/projects/ecobliss.png";
import tomsen from "../assets/projects/tomsen.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "Riding Cities",
    image: riding,
    category: ["dev"],
    details: {
      resume: "Création d’une section web à partir d’une maquette Figma dans un contexte de formation professionnalisante.",
      objectif: "Intégrer une section accessible et responsive en respectant fidèlement une maquette.",
      travail: [
        "Structuration HTML sémantique",
        "Intégration CSS à partir d’une maquette",
        "Ajout d’interactions simples",
        "Respect des bonnes pratiques d’accessibilité"
      ],
      learned: [
        "Respect d’une maquette",
        "Organisation du code HTML/CSS",
        "Accessibilité web"
      ],
      stack: ["HTML", "CSS"]
    }
  },

  {
    title: "Booki",
    image: booki,
    category: ["dev"],
    details: {
      resume: "Création d’un site web de recherche d’hébergements à partir d’une maquette fournie.",
      objectif: "Intégrer fidèlement une maquette en HTML/CSS et garantir un affichage responsive.",
      travail: [
        "Structuration complète en HTML sémantique",
        "Intégration précise des styles CSS",
        "Mise en place du responsive design",
        "Optimisation des espacements et de l’affichage",
        "Tests sur différents supports"
      ],
      learned: [
        "Structure HTML claire et accessible",
        "Gestion du responsive design",
        "Organisation du CSS",
        "Rigueur dans le respect d’une maquette"
      ],
      stack: ["HTML", "CSS"]
    }
  },

  {
    title: "JSE Avocats",
    image: jse,
    category: ["test"],
    details: {
      resume: "Réalisation d’une campagne complète de tests sur un site web.",
      objectif: "Garantir la qualité fonctionnelle du produit avant mise en production.",
      travail: [
        "Analyse des exigences",
        "Tests exploratoires",
        "Rédaction de cas de tests",
        "Remontée des anomalies",
        "Création d’un cahier de recette"
      ],
      learned: [
        "Méthodologie de test logiciel",
        "Analyse fonctionnelle",
        "Rigueur dans la documentation",
        "Vision qualité orientée utilisateur"
      ],
      stack: ["Tests manuels", "Jira", "Documentation"]
    }
  },

  {
    title: "724events",
    image: events,
    category: ["test"],
    details: {
      resume: "Audit complet d’un site événementiel.",
      objectif: "Identifier les axes d’amélioration en qualité et performance.",
      travail: [
        "Tests fonctionnels",
        "Analyse des performances",
        "Rapports de bugs",
        "Recommandations d’amélioration"
      ],
      learned: [
        "Analyse de performance web",
        "Priorisation des anomalies",
        "Rédaction de rapports"
      ],
      stack: ["Lighthouse", "Tests fonctionnels", "Reporting"]
    }
  },

  {
    title: "Print it",
    image: printit,
    category: ["dev"],
    details: {
      resume: "Ajout de fonctionnalités dynamiques en JavaScript.",
      objectif: "Améliorer l’expérience utilisateur avec des interactions.",
      travail: [
        "Manipulation du DOM",
        "Gestion des événements",
        "Création d’un carrousel",
        "Ajout d’interactions utilisateur"
      ],
      learned: [
        "Compréhension du DOM",
        "Gestion des événements",
        "Logique JavaScript",
        "Interactions dynamiques"
      ],
      stack: ["JavaScript", "DOM"]
    },
    github: "https://github.com/ChristelleDupuy/print-it-js"
  },

  {
    title: "Sophie Bluel",
    image: sophie,
    category: ["dev"],
    details: {
      resume: "Création d’un site dynamique avec API.",
      objectif: "Permettre la gestion d’un portfolio via une interface admin.",
      travail: [
        "Connexion à une API",
        "Gestion de l’authentification",
        "Manipulation dynamique du DOM",
        "Implémentation CRUD"
      ],
      learned: [
        "Utilisation d’API REST",
        "Gestion des appels réseau",
        "Sécurisation d’une interface",
        "DOM dynamique"
      ],
      stack: ["JavaScript", "API", "Fetch"]
    },
    github: "https://github.com/ChristelleDupuy/portfolio-sophie-bluel"
  },

  {
    title: "Kasa",
    image: kasa,
    category: ["dev"],
    details: {
      resume: "Développement d’une application web en React.",
      objectif: "Créer une application dynamique avec navigation fluide.",
      travail: [
        "Création de composants React",
        "Mise en place du routing",
        "Gestion des props",
        "Structuration du projet"
      ],
      learned: [
        "Architecture React",
        "Routing SPA",
        "Réutilisation des composants",
        "Organisation du code"
      ],
      stack: ["React", "React Router", "JavaScript"]
    },
    github: "https://github.com/ChristelleDupuy/Kasa"
  },

  {
    title: "Menu Maker by Qwenta",
    image: qwenta,
    category: ["gestion"],
    details: {
      resume: "Rédaction de spécifications techniques pour une application.",
      objectif: "Structurer un projet web et organiser son développement.",
      travail: [
        "Rédaction des spécifications",
        "Organisation en Kanban",
        "Analyse des besoins",
        "Préparation de présentation"
      ],
      learned: [
        "Analyse des besoins utilisateurs",
        "Organisation Agile",
        "Rédaction technique"
      ],
      stack: ["Notion", "Kanban", "Spécifications"]
    }
  },

  {
    title: "Eco Bliss Bath",
    image: ecobliss,
    category: ["dev", "test"],
    details: {
      resume: "Débogage et optimisation d’un site web.",
      objectif: "Améliorer les performances et corriger les anomalies.",
      travail: [
        "Correction de bugs",
        "Optimisation performance",
        "Amélioration SEO",
        "Tests fonctionnels"
      ],
      learned: [
        "Debug JavaScript",
        "Optimisation performance",
        "Analyse SEO"
      ],
      stack: ["JavaScript", "SEO", "Performance"]
    },
    github: "https://github.com/ChristelleDupuy/Eco-Bliss-Bath-V2"
  },

  {
    title: "Tomsen by PayForge",
    image: tomsen,
    category: ["test", "gestion"],
    details: {
      resume: "Création d’une stratégie de test complète.",
      objectif: "Garantir la qualité d’un produit financier.",
      travail: [
        "Revue des exigences",
        "Stratégie de test",
        "Analyse des risques",
        "Planification"
      ],
      learned: [
        "Stratégie QA",
        "Analyse des risques",
        "Organisation des tests"
      ],
      stack: ["Test strategy", "QA", "Documentation"]
    }
  },

  {
    title: "Portfolio",
    image: portfolio,
    category: ["dev"],
    details: {
      resume: "Création de mon portfolio professionnel.",
      objectif: "Mettre en valeur mes compétences en QA et front-end.",
      travail: [
        "Conception UI/UX",
        "Développement React",
        "Création de composants",
        "Optimisation UX"
      ],
      learned: [
        "Structuration d’un projet complet",
        "Création d’interface moderne",
        "Gestion des composants React",
        "Expérience utilisateur"
      ],
      stack: ["React", "CSS", "JavaScript"]
    }
  }
];

export default projects;