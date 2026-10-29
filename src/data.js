export const profile = {
  firstName: 'Armel',
  lastName: 'Gania',
  role: 'Data Scientist & Data Engineer',
  email: 'didrelgania@gmail.com',
  phone: '06 95 92 88 45',
  phoneHref: '+33695928845',
  location: 'Lyon, France',
  age: 22,
  status: 'Disponible pour une alternance · Sept. 2026',
  tagline:
    "Étudiant en Master 1 IA & Big Data, je transforme des données brutes en décisions claires. Curieux, rigoureux et à l'aise autant dans un notebook que dans une base de données.",
  bio: [
    "Actuellement en Master 1 Intelligence Artificielle & Big Data à l'ESGI Lyon, je cherche une alternance à partir de septembre 2026 pour renforcer mon expertise en analyse, traitement et valorisation de la donnée.",
    "Mon terrain de jeu : le Machine Learning, la data visualisation et l'ingénierie de données. J'aime autant explorer un jeu de données que construire un pipeline ou raconter un résultat avec un dashboard lisible.",
  ],
};

export const projects = [
  {
    title: 'La musique en données',
    short: 'Spotify',
    category: 'Data Analyse · Machine Learning',
    year: '2025',
    description:
      "Explorer 2 000 titres sortis entre 2000 et 2019 pour comprendre ce qui fait la popularité d'une chanson.",
    points: [
      'Nettoyage et exploration du dataset avec Pandas : valeurs manquantes, filtres, groupby',
      'Random Forest pour prédire la popularité, avec une MAE de 15 points',
      'Dashboard Power BI interactif filtré par artiste et par genre',
      'Visualisations Matplotlib & Seaborn : heatmaps, histogrammes, scatterplots',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Power BI', 'Seaborn'],
    image: '/img/musique.png',
    window: 'spotify.dataset · 2000—2019',
    color: '#ccff4d',
  },
  {
    title: 'COVID-19, en données',
    short: 'COVID',
    category: 'Data Analyse · Visualisation',
    year: '2025',
    description:
      "Une lecture visuelle de la pandémie : nettoyer, croiser et raconter les chiffres pour les rendre compréhensibles.",
    points: [
      'Nettoyage et préparation du jeu de données',
      'Analyse des tendances temporelles et des indicateurs clés',
      'Visualisations claires pour rendre les chiffres lisibles',
      'Mise en récit des données au service de la compréhension',
    ],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Viz'],
    image: '/img/covid.png',
    window: 'covid19.explore · analyse',
    color: '#7ea8ff',
  },
  {
    title: 'Météo & consommation',
    short: 'Énergie',
    category: 'Statistiques · R',
    year: '2024',
    description:
      "Mesurer le lien entre la météo et la consommation électrique en France hexagonale, chiffres à l'appui.",
    points: [
      'Nettoyage, analyse et visualisation des données sur RStudio',
      'Tests de liaison significative entre les variables',
      'Régression linéaire entre consommation électrique et météo',
      'Présentation orale et écrite en équipe',
    ],
    tags: ['R', 'RStudio', 'Statistiques', 'Régression'],
    visual: 'chart',
    window: "energie_meteo.R · corrélations",
    color: '#ffb86b',
  },
  {
    title: 'Séjours linguistiques',
    short: 'Base SQL',
    category: 'Data Engineering · SQL',
    year: '2024',
    description:
      "Concevoir une base relationnelle complète pour gérer les stages, les séjours linguistiques et les inscriptions clients.",
    points: [
      'Modélisation et conception de la base de données',
      'Implémentation sous le SGBD MySQL',
      'Alimentation à partir d\'un jeu d\'essai de données',
      'Tests des fonctionnalités principales par requêtage SQL',
    ],
    tags: ['MySQL', 'SQL', 'Modélisation', 'SGBD'],
    visual: 'database',
    window: 'mecca_db · schéma relationnel',
    color: '#c9a7ff',
  },
  {
    title: 'Chatbot LLM local',
    short: 'Chatbot IA',
    category: 'IA · NLP · Stage',
    year: '2025',
    description:
      "Un assistant interne propulsé par un LLM local, pensé pour les besoins métier de l'entreprise.",
    points: [
      'Développement d\'un chatbot basé sur un LLM local (LocalAI)',
      'Rédaction et optimisation de prompts métier avec Promptfoo',
      'Prototypage Python : appels modèles, logs, tests unitaires',
      'Suivi des tests, documentation et veille IA/NLP en équipe Agile',
    ],
    tags: ['Python', 'LLM', 'LocalAI', 'Promptfoo', 'NLP'],
    visual: 'chat',
    window: 'localai · assistant interne',
    color: '#6cf5c2',
  },
];

export const experience = [
  {
    role: 'Stagiaire IA',
    company: 'InnovQube',
    place: 'Noisy-le-Grand',
    period: 'Avr. 2025 — Juin 2025',
    year: '2025',
    type: 'Stage · IA / NLP',
    points: [
      "Développement d'un chatbot intelligent basé sur un LLM local, adapté aux besoins internes de l'entreprise",
      'Rédaction et optimisation de prompts métier avec Promptfoo et LocalAI',
      'Prototypage de fonctionnalités en Python : appels modèles, logs, tests unitaires',
      'Analyse et suivi des tests avec Excel : comparaison de réponses, résultats',
      'Participation à une équipe Agile : documentation, sprint planning, veille IA/NLP',
    ],
  },
  {
    role: 'Stagiaire Développeur',
    company: 'MECCA_GAZ',
    place: 'Congo',
    period: 'Avr. 2023 — Juin 2023',
    year: '2023',
    type: 'Stage · Développement',
    points: [
      "Développement d'une application de gestion de livraison de gaz",
      'Front-end avec React, back-end avec Node.js et base de données MySQL',
      'Développement mobile avec Flutter',
    ],
  },
];

export const skills = [
  {
    title: 'Data Science',
    icon: 'brain',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Data Engineering',
    icon: 'database',
    tags: ['SQL', 'MySQL', 'NoSQL', 'Spark', 'Hadoop', 'Modélisation', 'Excel'],
  },
  {
    title: 'Visualisation',
    icon: 'chart',
    tags: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Analyse statistique', 'Dashboard'],
  },
  {
    title: 'Développement',
    icon: 'code',
    tags: ['React', 'Node.js', 'Flutter', 'Python', 'Git', 'REST'],
  },
];

export const education = [
  {
    title: 'Master 1 Intelligence Artificielle & Big Data',
    school: 'ESGI — École Supérieure de Génie Informatique',
    place: 'Lyon',
    year: '2025 — 2026',
    tag: 'En cours',
  },
  {
    title: 'Licence Sciences des données',
    school: 'Université Lumière Lyon II',
    place: 'Lyon',
    year: '2024 — 2025',
    tag: 'Diplômé',
  },
  {
    title: 'Licence Génie logiciel',
    school: 'Centre de Formation Informatique',
    place: 'Congo',
    year: '2023 — 2024',
    tag: 'Diplômé',
  },
];

export const interests = [
  {
    icon: 'music',
    title: 'Musique',
    text: 'Hip-hop, pop et R&B en fond sonore permanent.',
  },
  {
    icon: 'sport',
    title: 'Sport',
    text: 'Musculation & football pour garder le rythme.',
  },
  {
    icon: 'style',
    title: 'Mode',
    text: 'Le sens du détail, aussi bien dans un outfit que dans une interface.',
  },
];

export const marqueeItems = [
  'Data Science',
  'Machine Learning',
  'Data Engineering',
  'Big Data',
  'Visualisation',
  'Intelligence Artificielle',
];

export const tools = ['Python', 'SQL', 'Spark', 'Power BI', 'Pandas', 'Scikit-learn', 'MySQL', 'React', 'TensorFlow', 'Hadoop', 'Tableau', 'RStudio'];
