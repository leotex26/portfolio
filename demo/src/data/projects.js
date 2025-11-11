// ==============================
// 📁 Données du Portfolio
// ==============================

// --- Grands projets (à afficher en plein écran) ---
export const bigProjects = [
    {
      id: 1,
      title: 'Travel-now',
      image: '/src/assets/card/card_1/card_travel_now01.png',
      logos : ['/src/assets/icons/node_js.png'],
      text: `
 Durée : 1 Semaine – Projet solo
Technologies : Node.js, mySql, GitLab

Développement d’une application web pour des voyages.

J’ai tout conçu, des voyages et des utilisateurs au paiement des acomptes, il y a une gestion admin des utilisateurs, possibilité de créer ses voyages et de valider des documents nécessaires que les utilisateurs peuvent implémenter.
      `
    },







    {
      id: 2,
      title: 'Documents-Client',
      image: '/src/assets/card/card_2/card_additi.png',
      logos : ['/src/assets/icons/php.png','/src/assets/icons/symfony.png'],
      text: `
  Durée : 2 mois – Projet solo en entreprise  
  Technologies : Symfony, jQuery DataTables, MySQL, Docker, Ubuntu, GitLab  
  
  Développement d’une application web pour les commerciaux, permettant d'afficher un historique de ventes à partir d’une base de données complexe.  
  
  J’ai conçu toute l’interface utilisateur avec de nombreuses fonctionnalités dynamiques (tri, recherche, filtrage...).  
  
  Pour optimiser les performances, j’ai mis en place une procédure stockée personnalisée, adaptée aux requêtes lourdes et à la structure de la BDD.
      `
    },








    {
      id: 3,
      title: 'Fishing-Tracker',
      image: '/src/assets/card/card_3/card_fishing_trackerALL.png',
      logos : ['/src/assets/icons/flutter.png'],
      text: `
      Durée : 1 mois – Projet solo
Technologies : Flutter, Android Studio

Application mobile intuitive qui aide les passionnés de pêche à maximiser leurs chances en identifiant le bon endroit au bon moment.

 Les utilisateurs peuvent créer des alertes personnalisées basées sur leurs conditions idéales de pêche (heure, météo, température, etc.).

 Ils ont également accès à un historique interactif de leurs spots préférés via une carte dynamique, avec des filtres pour affiner leur recherche.
      `
    },
 



  {
    id: 4,
    title: 'Enchères',
    image: '/src/assets/card/card_4/enchere.png',
    logos : ['/src/assets/icons/java.png','/src/assets/icons/spring_boot.png'],
    text: `
Durée : 2 semaines – Projet en groupe (4 personnes)

Technologies : Java, Spring Boot

Application web permettant aux utilisateurs d’échanger des objets via un système de points et d’enchères.

 J’ai contribué à la structure back-end, à la gestion des profils et à la logique métier de l’enchère.
Projet complet, de l’authentification à la persistance des données. `
  }
]
  















  // --- Petits projets (en grille ou mini-cards) ---
  export const smallProjects = [
    {
      id: 4,
      title: 'Quiz cda',
      image: '/src/assets/card/small_card/sm_02/quiz_cda.png',
      logos : ['/src/assets/icons/java.png'],
      text: `
court projet Java, JavaFx solo et perso de quiz informatique`
    },
    {
      id: 5,
      title: 'Jeu de la vie',
      image: '/src/assets/card/small_card/sm_03/jeu_de_la_vie.png',
      logos : ['/src/assets/icons/js.png'],
      text: `
exercice js solo et perso de reproduction du jeu de la vie`
    },
    {
      id: 6,
      title: 'Jeu du pendu',
      image: '/src/assets/card/small_card/sm_04/jeu_du_pendu.png',
      logos : ['/src/assets/icons/python.png'],
      text: `
court projet Python solo et perso de jeu de pendu`
    },
    {
      id: 7,
      title: 'Monopoly',
      image: '/src/assets/card/small_card/sm_05/monopoly.png',
      logos : ['/src/assets/icons/python.png'],
      text: `
court projet Python solo et perso de jeu de Monopoly en “multijoueur”.`
    },
    {
      id: 8,
      title: 'IA problemos',
      image: '/src/assets/card/small_card/sm_06/problemos_crop.png',
      logos : ['/src/assets/icons/python.png'],
      text: `
Chatbot minimaliste utilisant des intents et une légère analyse linguistique avec spaCy.
 Il vise à comprendre des phrases simples et répondre de façon naturelle à des situations de la vie de tous les jours.`
    },
    {
      id: 9,
      title: 'Projet cinéma',
      image: '/src/assets/card/small_card/sm_08/wordpress.png',
      logos : ['/src/assets/icons/wordpress.png'],
      text: `
Création d’un site vitrine avec système d’articles, fiches de films et réservation de places de cinéma.
Utilisation de WordPress pour gérer le contenu et l’administration facilement. Design simple, responsive et fonctionnel.`
    }
  ]
  