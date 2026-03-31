import riding from "../assets/projects/riding.png";
import booki from "../assets/projects/booki.png";
import kasa from "../assets/projects/kasa.png";

const placeholder = riding;

const projects = [
  {
    title: "Riding Cities",
    image: riding,
    context: "Mise à jour d’une page web existante",
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
    details: {
      resume: "Intégration d’une interface responsive pour un site de réservation.",
      objectif: "Reproduire fidèlement une maquette et assurer l’adaptabilité mobile.",
      travail: [
        "Intégration HTML/CSS complète",
        "Responsive design (mobile, tablette, desktop)",
        "Utilisation de Flexbox et Grid",
        "Optimisation visuelle et UX"
      ]
    }
  },

  {
    title: "JSE Avocats",
    image: placeholder,
    context: "Tests fonctionnels d’un site web",
    details: {
      resume: "Réalisation d’une campagne de tests pour un site d’avocats.",
      objectif: "Identifier les anomalies et garantir la qualité du produit.",
      travail: [
        "Tests exploratoires et fonctionnels",
        "Rédaction de cas de tests",
        "Détection et remontée des bugs",
        "Rédaction d’un cahier de recette"
      ]
    }
  },

  {
    title: "724events",
    image: placeholder,
    context: "Audit et tests d’un site événementiel",
    details: {
      resume: "Analyse complète du site et identification des problèmes.",
      objectif: "Améliorer la qualité et les performances du site.",
      travail: [
        "Tests fonctionnels",
        "Analyse des performances",
        "Rédaction de rapports de bugs",
        "Recommandations d’amélioration"
      ]
    }
  },

  {
    title: "Print it",
    image: placeholder,
    context: "Ajout de fonctionnalités JavaScript",
    details: {
      resume: "Implémentation d’un carrousel dynamique.",
      objectif: "Améliorer l’interactivité du site.",
      travail: [
        "Manipulation du DOM",
        "Gestion d’événements",
        "Création d’un slider",
        "Logique JavaScript dynamique"
      ]
    }
  },

  {
    title: "Sophie Bluel",
    image: placeholder,
    context: "Site dynamique avec API",
    details: {
      resume: "Connexion à une API pour gérer des projets.",
      objectif: "Créer une interface dynamique avec authentification.",
      travail: [
        "Appels API (fetch)",
        "Authentification utilisateur",
        "Gestion dynamique du DOM",
        "Ajout / suppression de contenus"
      ]
    }
  },

  {
    title: "Kasa",
    image: kasa,
    context: "Application React de location",
    details: {
      resume: "Développement d’une application complète avec React.",
      objectif: "Créer une app moderne avec routing.",
      travail: [
        "React (components, props, state)",
        "React Router",
        "Gestion des données JSON",
        "Création de composants réutilisables"
      ]
    }
  },

  {
    title: "Menu Maker by Qwenta",
    image: placeholder,
    context: "Spécifications techniques & gestion projet",
    details: {
      resume: "Conception d’un outil de création de menus.",
      objectif: "Structurer techniquement un projet complexe.",
      travail: [
        "Rédaction de spécifications techniques",
        "Choix des solutions techniques",
        "Organisation via Kanban",
        "Analyse des besoins utilisateurs"
      ]
    }
  },

  {
    title: "Eco Bliss Bath",
    image: placeholder,
    context: "Débogage et optimisation d’un site existant",
    details: {
      resume: "Analyse et correction d’un site e-commerce présentant des dysfonctionnements.",
      objectif: "Identifier les anomalies et améliorer la performance globale du site.",
      travail: [
        "Identification et correction de bugs JavaScript",
        "Optimisation des performances",
        "Amélioration SEO",
        "Tests et validation des fonctionnalités"
      ]
    }
  },

  {
    title: "Tomsen by PayForge",
    image: placeholder,
    context: "Stratégie de test complète",
    details: {
      resume: "Création d’une stratégie de test pour un produit financier.",
      objectif: "Assurer la qualité d’un produit critique.",
      travail: [
        "Revue des exigences",
        "Plan de test détaillé",
        "Identification des risques",
        "Organisation des tests par sprint"
      ]
    }
  },

  {
    title: "Portfolio",
    image: placeholder,
    context: "Création de mon portfolio",
    details: {
      resume: "Développement d’un portfolio moderne.",
      objectif: "Mettre en valeur mes compétences.",
      travail: [
        "Design UI/UX",
        "Développement React",
        "Animations et interactions",
        "Optimisation responsive"
      ]
    }
  }
];

export default projects;