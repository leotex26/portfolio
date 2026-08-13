#  Portfolio — Léo Texier

Portfolio personnel développé avec **Vue.js** et **Vite**, présentant mon profil, mes compétences, mes projets et mon parcours de développeur.

 **Portfolio en ligne :** https://portfolio-leo-texier.netlify.app/

---

##  À propos

Je suis **Léo Texier**, développeur orienté développement web et logiciel.

Ce portfolio a été conçu afin de présenter mes compétences techniques, mes différents projets et les technologies avec lesquelles je travaille.

Il constitue également un projet évolutif me permettant d'expérimenter différentes technologies et pratiques du développement web moderne.

---

##  Technologies

### Front-End

* Vue.js
* JavaScript
* HTML5
* CSS3
* Vite

### Technologies présentées

Le portfolio met notamment en avant des projets utilisant :

* Java
* Spring Boot
* JavaScript
* Node.js
* PHP
* Symfony
* Python
* Flutter
* WordPress

### Outils

* Git
* GitHub
* VS Code
* npm

---

##  Fonctionnalités

Le portfolio contient plusieurs sections :

*  **À propos** — présentation de mon profil
*  **Compétences** — technologies et outils utilisés
*  **Projets** — présentation de mes réalisations
*  **Contact** — informations permettant de me contacter
*  **Navigation responsive** — navigation adaptée aux différents formats d'écran

Les projets sont centralisés dans un fichier de données afin de faciliter leur ajout et leur modification.

---

##  Structure du projet

```text
PORTFOLIO/
│
├── .vscode/
│   └── extensions.json
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── card/
│   │   ├── icons/
│   │   │   ├── flutter.png
│   │   │   ├── java.png
│   │   │   ├── js.png
│   │   │   ├── node_js.png
│   │   │   ├── php.png
│   │   │   ├── python.png
│   │   │   ├── spring_boot.png
│   │   │   ├── symfony.png
│   │   │   └── wordpress.png
│   │   │
│   │   ├── JUNGLE_FOND.webp
│   │   └── Vue.svg
│   │
│   ├── components/
│   │   ├── AboutSection.vue
│   │   ├── ContactSection.vue
│   │   ├── InteractivePanel.vue
│   │   ├── Navbar.vue
│   │   └── PortfolioSection.vue
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── App.vue
│   ├── main.js
│   └── style.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

##  Organisation du code

Le projet utilise une architecture simple basée sur des **composants Vue.js**.

### `src/components/`

Contient les différents composants principaux de l'interface :

| Composant              | Rôle                              |
| ---------------------- | --------------------------------- |
| `Navbar.vue`           | Navigation principale             |
| `AboutSection.vue`     | Présentation du profil            |
| `PortfolioSection.vue` | Présentation des projets          |
| `ContactSection.vue`   | Section de contact                |
| `InteractivePanel.vue` | Éléments interactifs du portfolio |

### `src/data/`

Le fichier `projects.js` contient les données utilisées pour afficher les différents projets du portfolio.

Cette séparation permet de modifier ou d'ajouter un projet sans avoir à modifier directement la structure du composant d'affichage.

### `src/assets/`

Contient les ressources graphiques du portfolio :

* Logos
* Icônes des technologies
* Images des projets
* Éléments graphiques

---

##  Installation

### Prérequis

Le projet nécessite :

* **Node.js**
* **npm**

Vérifier leur installation :

```bash
node --version
npm --version
```

### Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
```

Puis accéder au dossier :

```bash
cd PORTFOLIO
```

### Installer les dépendances

```bash
npm install
```

---

##  Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Vite affichera dans le terminal l'adresse permettant d'accéder au portfolio.

Par défaut, l'application est généralement disponible sur :

```text
http://localhost:5173
```

---

##  Build de production

Créer la version optimisée pour la production :

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier :

```text
dist/
```

Pour tester localement la version de production :

```bash
npm run preview
```

---

##  Déploiement

Le portfolio est actuellement déployé avec **Netlify**.

🔗 **Site en ligne :**

https://portfolio-leo-texier.netlify.app/




---

##  Objectifs

Ce projet a plusieurs objectifs :

* Présenter mon profil professionnel.
* Mettre en avant mes projets.
* Présenter les technologies que j'utilise.
* Approfondir ma pratique de Vue.js.
* Améliorer mes compétences en intégration HTML/CSS.
* Expérimenter avec les interfaces interactives.
* Disposer d'une vitrine professionnelle accessible en ligne.

---

##  Évolutions prévues

Le portfolio est amené à évoluer avec l'ajout de nouveaux projets et fonctionnalités.


* Amélioration continue du responsive design
* Ajout de nouveaux projets
* Optimisation SEO
* Amélioration des performances
* Ajout de nouvelles animations
* Amélioration de l'accessibilité
* Internationalisation du portfolio

---

##  Licence

Projet personnel réalisé par **Léo Texier**.

Le projet est présenté à titre professionnel afin de montrer mon parcours, mes compétences et mes réalisations.

---

##  Contact

Pour découvrir mes projets et mon parcours :

 **Portfolio**

https://portfolio-leo-texier.netlify.app/

 **GitHub**

https://github.com/leotex26

---

**Léo Texier — Développeur Web & Logiciel**
