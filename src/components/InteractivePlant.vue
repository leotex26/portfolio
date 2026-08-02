<template>
  <div class="plant-interaction-container" @mouseenter="grown = true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 400"
      class="interactive-svg"
    >
      <defs>
        <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#a84c28" />
          <stop offset="14%" stop-color="#c96a44" />
          <stop offset="38%" stop-color="#f0a17d" />
          <stop offset="58%" stop-color="#dd8258" />
          <stop offset="82%" stop-color="#b85a34" />
          <stop offset="100%" stop-color="#8c3d21" />
        </linearGradient>

        <linearGradient id="vineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9bcaa0" />
          <stop offset="50%" stop-color="#5f9e73" />
          <stop offset="100%" stop-color="#2f5e42" />
        </linearGradient>

        <clipPath id="potBodyClip">
          <path d="M 103 233 C 100 255, 102 278, 114 296 L 166 296 C 178 278, 180 255, 177 233 Z" />
        </clipPath>

        <clipPath id="potRimFrontClip">
          <rect x="90" y="226" width="100" height="16" />
        </clipPath>

        <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4a3626" />
          <stop offset="100%" stop-color="#2c1c12" />
        </linearGradient>

        <linearGradient id="canBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0f3d3b" />
          <stop offset="18%" stop-color="#1c615e" />
          <stop offset="45%" stop-color="#2a9891" />
          <stop offset="72%" stop-color="#1a5f5c" />
          <stop offset="100%" stop-color="#0c3230" />
        </linearGradient>

        <linearGradient id="canRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#68c2ba" />
          <stop offset="100%" stop-color="#2c7a74" />
        </linearGradient>

        <radialGradient id="canGloss" cx="32%" cy="18%" r="70%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.38" />
          <stop offset="45%" stop-color="#ffffff" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>

        <clipPath id="canBodyClip">
          <path d="M 193 48 C 189 82, 197 110, 205 118 L 245 118 C 253 110, 261 82, 257 48 Z" />
        </clipPath>

        <!-- Feuille en cœur réutilisable, dessinée centrée sur (0,0) -->
        <symbol id="heartLeaf" viewBox="-10 -10 20 20">
          <path d="M0,-8 C-9,-14 -16,-4 -8,2 C-4,6 0,9 0,9 C0,9 4,6 8,2 C16,-4 9,-14 0,-8 Z" />
          <path class="leaf-vein" d="M0,-6 C-1,-1 -1,4 0,8" fill="none" stroke="#1f4a33" stroke-width="0.8" opacity="0.3" stroke-linecap="round" />
          <path class="leaf-vein" d="M0,-3 C-3,-1 -5,1 -6.5,3" fill="none" stroke="#1f4a33" stroke-width="0.6" opacity="0.22" stroke-linecap="round" />
          <path class="leaf-vein" d="M0,-3 C3,-1 5,1 6.5,3" fill="none" stroke="#1f4a33" stroke-width="0.6" opacity="0.22" stroke-linecap="round" />
          <ellipse cx="-3.2" cy="-4.5" rx="2" ry="1.1" fill="#ffffff" opacity="0.2" transform="rotate(-30 -3.2 -4.5)" />
        </symbol>
      </defs>

      <g class="plant-group" :class="{ 'is-grown': grown }">

        <!-- ================= LIANES RETOMBANTES ================= -->
        <!-- Chaque feuille est un <g class="leaf-anchor"> positionné par un
             vrai transform SVG (translate + rotate). C'est ce transform qui
             fixe son ancrage, PAS un transform-box CSS (peu fiable sur les
             <use>). La feuille elle-même n'a plus qu'à scale(0 -> 1) depuis
             l'origine locale (0,0), qui est donc exactement son point
             d'ancrage sur la tige : elle "pousse" depuis ce point, jamais
             depuis un coin du SVG. -->
        <g class="hanging-vines">

          <!-- V1 · extérieure gauche, la plus longue -->
          <g class="vine-cluster" style="--delay:0s; --duration:1.5s;">
            <path class="vine-stem" pathLength="100"
              d="M98 232 C 78 245, 62 265, 70 290 C 78 315, 60 330, 66 360 C 70 382, 74 390, 72 400" />
            <g class="leaf-anchor" transform="translate(73.5 260.5) rotate(-30)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.14" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(84 286) rotate(22)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.32" x="-8" y="-8" width="16" height="16" /></g>
            <g class="leaf-anchor" transform="translate(63.5 315.5) rotate(-20)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.5" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(71 342) rotate(18)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.68" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(64.5 371.5) rotate(-12)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.85" x="-6.5" y="-6.5" width="13" height="13" /></g>
          </g>

          <!-- V2 · gauche milieu -->
          <g class="vine-cluster" style="--delay:.05s; --duration:1.3s;">
            <path class="vine-stem" pathLength="100"
              d="M112 233 C 96 248, 108 268, 98 288 C 90 308, 104 330, 96 352 C 92 364, 96 370, 92 380" />
            <g class="leaf-anchor" transform="translate(111 259) rotate(20)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.16" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(93.5 292.5) rotate(-25)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.4" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(105 325) rotate(18)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.62" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(88.5 356.5) rotate(-15)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.85" x="-6.5" y="-6.5" width="13" height="13" /></g>
          </g>

          <!-- V3 · intérieure gauche, courte -->
          <g class="vine-cluster" style="--delay:.02s; --duration:1s;">
            <path class="vine-stem" pathLength="100"
              d="M124 234 C 116 250, 128 262, 120 280 C 114 296, 122 306, 116 318" />
            <g class="leaf-anchor" transform="translate(124 256) rotate(18)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.25" x="-6" y="-6" width="12" height="12" /></g>
            <g class="leaf-anchor" transform="translate(112 286) rotate(-16)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.6" x="-6" y="-6" width="12" height="12" /></g>
            <g class="leaf-anchor" transform="translate(115.5 309.5) rotate(14)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.9" x="-5.5" y="-5.5" width="11" height="11" /></g>
          </g>

          <!-- V4 · intérieure droite, courte -->
          <g class="vine-cluster" style="--delay:.03s; --duration:1s;">
            <path class="vine-stem" pathLength="100"
              d="M156 234 C 164 250, 152 262, 160 280 C 166 296, 158 306, 164 318" />
            <g class="leaf-anchor" transform="translate(152 256) rotate(-18)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.25" x="-6" y="-6" width="12" height="12" /></g>
            <g class="leaf-anchor" transform="translate(170 286) rotate(16)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.6" x="-6" y="-6" width="12" height="12" /></g>
            <g class="leaf-anchor" transform="translate(151.5 309.5) rotate(-14)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.9" x="-5.5" y="-5.5" width="11" height="11" /></g>
          </g>

          <!-- V5 · droite milieu -->
          <g class="vine-cluster" style="--delay:.06s; --duration:1.3s;">
            <path class="vine-stem" pathLength="100"
              d="M168 233 C 184 248, 172 268, 182 288 C 190 308, 176 330, 184 352 C 188 364, 184 370, 188 380" />
            <g class="leaf-anchor" transform="translate(175 259) rotate(-20)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.16" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(191.5 292.5) rotate(25)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.4" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(177 325) rotate(-18)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.62" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(194.5 356.5) rotate(15)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.85" x="-6.5" y="-6.5" width="13" height="13" /></g>
          </g>

          <!-- V6 · extérieure droite, la plus longue -->
          <g class="vine-cluster" style="--delay:.01s; --duration:1.5s;">
            <path class="vine-stem" pathLength="100"
              d="M182 232 C 202 245, 218 265, 210 290 C 202 315, 220 330, 214 360 C 210 382, 206 390, 208 400" />
            <g class="leaf-anchor" transform="translate(212.5 260.5) rotate(30)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.14" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(204 286) rotate(-22)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.32" x="-8" y="-8" width="16" height="16" /></g>
            <g class="leaf-anchor" transform="translate(221.5 315.5) rotate(20)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.5" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(211 342) rotate(-18)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.68" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(218.5 371.5) rotate(12)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.85" x="-6.5" y="-6.5" width="13" height="13" /></g>
          </g>
        </g>

        <!-- ================= PETIT BUISSON (au-dessus du pot) ================= -->
        <!-- Amas compact en 2 rangées imbriquées (comme des tuiles), collé
             au rebord du pot. Les centres sont espacés d'au moins la somme
             des deux rayons -> les feuilles se touchent mais ne se
             chevauchent jamais. Pas de tige : chaque feuille éclot depuis
             son propre point, avec un léger décalage du bas vers le haut. -->
        <g class="bush">
          <!-- rangée basse, contre le rebord -->
          <g class="leaf-anchor" transform="translate(108 207) rotate(-28)"><use href="#heartLeaf" class="hleaf side-l bud" style="--bd:.02s" x="-8.5" y="-8.5" width="17" height="17" /></g>
          <g class="leaf-anchor" transform="translate(126 207) rotate(-8)"><use href="#heartLeaf" class="hleaf side-r bud" style="--bd:.06s" x="-9.5" y="-9.5" width="19" height="19" /></g>
          <g class="leaf-anchor" transform="translate(144 205) rotate(3)"><use href="#heartLeaf" class="hleaf side-l bud" style="--bd:.1s" x="-10" y="-10" width="20" height="20" /></g>
          <g class="leaf-anchor" transform="translate(162 207) rotate(10)"><use href="#heartLeaf" class="hleaf side-r bud" style="--bd:.06s" x="-9.5" y="-9.5" width="19" height="19" /></g>
          <g class="leaf-anchor" transform="translate(180 207) rotate(26)"><use href="#heartLeaf" class="hleaf side-l bud" style="--bd:.02s" x="-8.5" y="-8.5" width="17" height="17" /></g>

          <!-- rangée haute, nichée entre les feuilles du bas -->
          <g class="leaf-anchor" transform="translate(117 191) rotate(-20)"><use href="#heartLeaf" class="hleaf side-r bud" style="--bd:.14s" x="-7" y="-7" width="14" height="14" /></g>
          <g class="leaf-anchor" transform="translate(135 188) rotate(-6)"><use href="#heartLeaf" class="hleaf side-l bud" style="--bd:.18s" x="-7.5" y="-7.5" width="15" height="15" /></g>
          <g class="leaf-anchor" transform="translate(153 188) rotate(6)"><use href="#heartLeaf" class="hleaf side-r bud" style="--bd:.18s" x="-7.5" y="-7.5" width="15" height="15" /></g>
          <g class="leaf-anchor" transform="translate(171 191) rotate(20)"><use href="#heartLeaf" class="hleaf side-l bud" style="--bd:.14s" x="-7" y="-7" width="14" height="14" /></g>
        </g>

        <!-- POT -->
        <g class="pot">
          <!-- Rebord avec un peu d'épaisseur -->
          <rect x="98" y="221" width="84" height="14" rx="4" fill="url(#potGrad)" />
          <rect x="98" y="221" width="84" height="2.5" rx="1.2" fill="#f4b896" opacity="0.55" />
          <rect x="98" y="232.5" width="84" height="2" fill="#7a3419" opacity="0.35" />

          <!-- Corps légèrement galbé -->
          <path d="M 103 233 C 100 255, 102 278, 114 296 L 166 296 C 178 278, 180 255, 177 233 Z" fill="url(#potGrad)" />

          <!-- Reflet et ombre du corps, clippés dans sa silhouette -->
          <g clip-path="url(#potBodyClip)">
            <rect x="108" y="233" width="12" height="66" rx="6" fill="#ffcaa8" opacity="0.32" />
            <rect x="163" y="233" width="14" height="66" fill="#6f2c14" opacity="0.28" />
            <path d="M 104 262 C 130 267, 150 267, 176 262" fill="none" stroke="#7a3419" stroke-width="1.4" opacity="0.25" stroke-linecap="round" />
          </g>

          <!-- Terre, avec un peu de relief -->
          <ellipse cx="140" cy="226" rx="40" ry="7" fill="url(#soilGrad)" />
          <path d="M 104 224 C 118 219, 162 219, 176 224" fill="none" stroke="#5c4330" stroke-width="1.6" opacity="0.5" stroke-linecap="round" />
          <ellipse cx="126" cy="227" rx="2.4" ry="1.1" fill="#1e120b" opacity="0.4" />
          <ellipse cx="151" cy="228.5" rx="1.8" ry="0.9" fill="#1e120b" opacity="0.35" />
          <ellipse cx="140" cy="224.5" rx="2" ry="1" fill="#1e120b" opacity="0.3" />

          <!-- Lèvre avant du rebord : cache le bas de la terre pour une
               vraie perspective (on regarde légèrement de haut, le bord
               avant du pot doit passer devant la terre, pas derrière) -->
          <g clip-path="url(#potRimFrontClip)">
            <ellipse cx="140" cy="226" rx="41" ry="8" fill="url(#potGrad)" />
            <ellipse cx="140" cy="225.5" rx="41" ry="7.4" fill="#f4b896" opacity="0.3" />
          </g>

          <!-- Simple liseré à la base, plus de flaque d'ombre -->
          <path d="M 115 296 Q 140 300 165 296" fill="none" stroke="#6f2c14" stroke-width="1.6" opacity="0.45" stroke-linecap="round" />
        </g>

        <!-- LIANE DE DEVANT : dessinée après le pot, donc affichée
             par-dessus lui, pour un peu de profondeur -->
        <g class="hanging-vines front-vine">
          <g class="vine-cluster" style="--delay:.04s; --duration:1.4s;">
            <path class="vine-stem" pathLength="100"
              d="M135 224 C 118 232, 112 250, 122 268 C 130 284, 118 300, 126 320 C 130 335, 124 345, 128 358" />
            <g class="leaf-anchor" transform="translate(115 250) rotate(-24)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.22" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(127 283) rotate(20)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.48" x="-7.5" y="-7.5" width="15" height="15" /></g>
            <g class="leaf-anchor" transform="translate(118 308) rotate(-16)"><use href="#heartLeaf" class="hleaf side-l" style="--t:.72" x="-7" y="-7" width="14" height="14" /></g>
            <g class="leaf-anchor" transform="translate(128 345) rotate(14)"><use href="#heartLeaf" class="hleaf side-r" style="--t:.9" x="-6.5" y="-6.5" width="13" height="13" /></g>
          </g>
        </g>

        <!-- ARROSOIR -->
        <g class="watering-can">
          <!-- Anse : base sombre + surliage clair pour donner du volume -->
          <path
            d="M 250 58 C 296 42, 302 92, 264 96 C 249 98, 246 84, 260 80 C 268 78, 270 86, 262 88"
            fill="none" stroke="#0e2f2d" stroke-width="8" stroke-linecap="round"
          />
          <path
            d="M 250 58 C 296 42, 302 92, 264 96 C 249 98, 246 84, 260 80 C 268 78, 270 86, 262 88"
            fill="none" stroke="#2f8b84" stroke-width="4" stroke-linecap="round" opacity="0.8"
          />

          <!-- Corps -->
          <path d="M 193 48 C 189 82, 197 110, 205 118 L 245 118 C 253 110, 261 82, 257 48 Z" fill="url(#canBodyGrad)" />

          <!-- Reflets et ombres, clippés dans la silhouette du corps -->
          <g clip-path="url(#canBodyClip)">
            <rect x="188" y="38" width="80" height="92" fill="url(#canGloss)" />
            <rect x="197" y="58" width="3" height="54" rx="1.5" fill="#082523" opacity="0.4" />
            <rect x="209" y="56" width="5" height="56" rx="2.5" fill="#6fd0c7" opacity="0.55" />
            <rect x="228" y="56" width="4" height="56" rx="2" fill="#6fd0c7" opacity="0.3" />
          </g>

          <!-- Pieds / bagues à la base -->
          <rect x="199" y="115" width="52" height="5" rx="2.5" fill="#0e2f2d" />
          <rect x="203" y="121.5" width="44" height="3.2" rx="1.6" fill="#0e2f2d" opacity="0.65" />
          <rect x="206.5" y="126.5" width="37" height="2.4" rx="1.2" fill="#0e2f2d" opacity="0.4" />

          <!-- Ouverture haute, avec profondeur -->
          <ellipse cx="225" cy="48" rx="32" ry="9" fill="url(#canRimGrad)" />
          <ellipse cx="225" cy="47.3" rx="26" ry="6.6" fill="#0e2f2d" />
          <path d="M 202 44.5 A 25 6.2 0 0 1 248 44.5" fill="none" stroke="#7fdcd2" stroke-width="1.4" opacity="0.5" stroke-linecap="round" />

          <!-- Bec verseur : trois tons pour un vrai volume cylindrique -->
          <path d="M 197 102 C 178 96, 155 82, 142 66" fill="none" stroke="#0e2f2d" stroke-width="12" stroke-linecap="round" />
          <path d="M 197 102 C 178 96, 155 82, 142 66" fill="none" stroke="#2f8b84" stroke-width="7" stroke-linecap="round" />
          <path d="M 197 102 C 178 96, 155 82, 142 66" fill="none" stroke="#7fdcd2" stroke-width="2.2" stroke-linecap="round" opacity="0.5" />
          <ellipse cx="140" cy="64" rx="10.5" ry="4.8" fill="url(#canRimGrad)" transform="rotate(-35 140 64)" />
          <ellipse cx="140" cy="64" rx="7" ry="3" fill="#123331" transform="rotate(-35 140 64)" />
        </g>

        <!-- EAU -->
        <g class="water-stream">
          <path class="drop drop-1" d="M 140 199 Q 140 210, 140 221" fill="none" stroke="#7dd3fc" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="6 4" />
          <path class="drop drop-2" d="M 145 202 Q 145 213, 145 222" fill="none" stroke="#a5e4fb" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 3" />
          <path class="drop drop-3" d="M 135 201 Q 135 211, 135 220" fill="none" stroke="#bfeafb" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 3" />
          <ellipse class="splash" cx="140" cy="222" rx="10" ry="3" fill="#8fd6f7" opacity="0" />
        </g>

      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Une fois déclenchée (premier survol), la pousse reste acquise :
// on n'utilise plus :hover pour l'état des feuilles/tiges, seulement
// pour relancer le geste d'arrosage (arrosoir + eau).
const grown = ref(false)
</script>

<style scoped>
.plant-interaction-container {
  flex-shrink: 0;
  width: 250px;
  height: 330px;
  display: block;
  margin-top: 20px;
}

.interactive-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.water-stream,
.hanging-vines,
.bush {
  pointer-events: none;
}

.pot {
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.22));
}

/* ===================== LIANES ===================== */
/* pathLength="100" normalise toutes les tiges : un dashoffset
   de 100 -> 0 représente toujours "0% -> 100% du tracé", quelle
   que soit sa longueur réelle en pixels. La durée est donc
   comparable d'une liane à l'autre. */
.vine-stem {
  fill: none;
  stroke: url(#vineGrad);
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset var(--duration, 1.2s) cubic-bezier(.4,0,.2,1) var(--delay, 0s);
}

.plant-group.is-grown .vine-stem {
  stroke-dashoffset: 0;
}

/* leaf-anchor positionne la feuille avec un vrai transform SVG
   (translate + rotate) : c'est fiable partout, contrairement à un
   transform-box CSS sur un <use>. La feuille (.hleaf) scale ensuite
   depuis l'origine locale 0,0 = son point d'ancrage exact. */
.leaf-anchor {
  transform-box: view-box;
}

.hleaf {
  opacity: 0;
  transform: scale(.25);
  transform-origin: 0px 0px;
  fill: #4f8f68;
  transition: opacity .3s ease, transform .3s ease;
  transition-delay: calc(var(--delay, 0s) + var(--t, 0) * var(--duration, 1.2s));
}

.hleaf.side-r {
  fill: #3f7d58;
}

.plant-group.is-grown .hleaf {
  opacity: 1;
  transform: scale(1);
}

.hanging-vines {
  transform-origin: 140px 220px;
  animation: vines-sway 7s ease-in-out infinite;
}

@keyframes vines-sway {
  0%, 100% { transform: rotate(-1deg); }
  50%      { transform: rotate(2deg); }
}

/* ===================== BUISSON (sans tige) ===================== */
/* Pas de --delay/--t liés à un tracé : chaque bourgeon a juste son
   propre petit décalage --bd, pour éclore les uns après les autres
   sans dépendre d'une tige. */
.hleaf.bud {
  transition-delay: var(--bd, 0s);
}

/* ===================== ARROSOIR ===================== */
.watering-can {
  transform: translateY(90px) translateX(-10px);
  transform-origin: 225px 60px;
  transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  filter: drop-shadow(3px 6px 5px rgba(0, 0, 0, 0.28));
}

.plant-group:hover .watering-can {
  transform: rotate(-16deg) translate(-18px, 12px) translateY(90px) translateX(-10px);
}

/* ===================== EAU ===================== */
.water-stream {
  opacity: 0;
  transition: opacity 0.15s ease 0.25s;
}

.plant-group:hover .water-stream {
  opacity: 1;
}

.plant-group:hover .drop-1 { animation: flow 0.45s linear infinite; }
.plant-group:hover .drop-2 { animation: flow 0.4s linear infinite 0.05s; }
.plant-group:hover .drop-3 { animation: flow 0.35s linear infinite 0.1s; }

@keyframes flow {
  0%   { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -24; }
}

.splash {
  transition: opacity 0.2s ease;
}

.plant-group:hover .splash {
  animation: splash-pulse 0.6s ease-out infinite;
}

@keyframes splash-pulse {
  0%   { opacity: 0; transform: scale(0.6); }
  30%  { opacity: 0.7; }
  100% { opacity: 0; transform: scale(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .watering-can,
  .vine-stem,
  .hleaf,
  .hanging-vines,
  .drop-1,
  .drop-2,
  .drop-3,
  .splash {
    animation: none !important;
    transition: none !important;
  }
}
</style>





















