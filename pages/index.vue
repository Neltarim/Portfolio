<template>
  <div class="flex justify-between bg-gradient-to-t from-black/0 to-grey w-full fixed top-0 z-50">
    <p class="text-4xl px-8 py-6  lg:text-5xl xl:text-6xl font-valorant text-red-light">Am</p>

    <p 
      @click="slideOpen = true"
      class="md:hidden font-kdam text-end text-2xl uppercase px-8 py-6  text-blue underline decoration-red underline-offset-8 decoration-2"
      :class="slideOpen ? 'hidden' : ''"
    >
      {{ current }}
    </p>

    <nav 
      class="
        flex flex-col md:flex-row md:justify-around gap-4 xl:gap-8 my-auto px-8 py-6  duration-300 ease-in-out
        h-full bg-gradient-to-r from-black/0 to-grey h-screen md:bg-none md:h-auto
      "
      :class="slideOpen ? '' : 'hidden md:flex'"
    >
      <a class="text-xl text-end lg:text-3xl xl:text-4xl uppercase" 
        v-for="section in sections" :href="'#' + section" 
        @click.prevent="scrollTo(section)" :class="navClass(section)"
      >
        {{section}}
      </a>
    </nav>
  </div>

  <section id="home" data-section="home" class="h-screen w-full font-kdam">
    <div class="w-full h-full lg:flex">
      <div class="w-full px-[10%] lg:mx-auto justify-center lg:w-1/2 h-full inline-flex items-center">
        <div>
          <p class="z-3 relative font-valorant text-center text-5xl sm:text-6xl 2xl:text-8xl font-mask">ALEXaNDrE MAYER</p>
          
          <div class="z-1 inline-flex relative justify-center w-full mt-4 badge-group-entrance">
            <!-- WRAPPER RELATIF DU BADGE -->
            <div class="relative inline-block py-2 mx-auto badge-wrap">
              <!-- lignes pointillées -->
              <span aria-hidden="true" class="dot-h"></span>
              <span aria-hidden="true" class="dot-v"></span>

              <!-- le badge -->
              <div class="inline-block border border-blue py-2">
                <p class="text-center text-red text- sm:text-2xl px-2">FULLSTACK DEV</p>
                <hr class="border-blue w-11/12 mx-auto">
              </div>
            </div>

            <!-- curseur -->
            <img
              src="/assets/icons/mouse_pointer.svg"
              alt=""
              class="absolute right-[calc(60%-7rem)] sm:right-[calc(50%-7rem)] bottom-[-1rem]"
            />
          </div>

          <div class="text-xl sm:text-3xl mt-24 text-center">
            <p class="text-white"><span class="text-blue">.//</span> Créateur D'expériences digitales</p>
            <button
              class="
                relative inline-block h-[5rem] w-[16rem] sm:h-[6rem] sm:w-[16rem]
                text-black text-xl sm:text-2xl
                glow-btn
              "
            >
              En savoir plus
            </button>

          </div>

        </div>
      </div>
      <div class="hidden w-1/2 lg:flex items-end">
        <img class="w-full 2xl:w-[80%]" src="/assets/images/profile_drawing.svg" alt="">
      </div>
    </div>
  </section>
  
  <section id="tech" data-section="tech" class="relative bg-grey-dark py-20">
    <img class="absolute right-0 -top-14" src="/assets/images/notch.svg" alt="">
    <div class="text-2xl sm:text-3xl font-kdam text-center">
      <p class="text-white"><span class="text-blue">.//</span> MES TECHNOLOGIES</p>
    </div>

    <div class="flex justify-center text-white items-center font-kdam py-20 gap-20">
      <div class="flex justify-end w-1/2">
        <div class="flex justify-end rtl gap-10">
          <img src="/assets/icons/figma.svg" alt="">
        </div>        
      </div>

      <div class="w-1/2">
        <h3 class="text-2xl mb-4"><span class="text-blue">.</span>DESIGN</h3>
        <p class="text-lg text-grey-light w-1/2">
          Après avoir établi un cahier des charges complets pour un projet, 
          je créé une maquette sur figma, permettant de voir tout de suite 
          ce à quoi va ressembler le projet une fois développé et établir 
          une direction artistique claire.
        </p>
      </div>
    </div>

    <div class="flex justify-center text-white items-center font-kdam py-20 gap-20">
      <div class="flex justify-end w-1/2">
        <div class="flex justify-end rtl gap-10">
          <img src="/assets/icons/node.svg" alt="">
          <img src="/assets/icons/nuxt.svg" alt="">
          <img src="/assets/icons/python.svg" alt="">
        </div>        
      </div>

      <div class="w-1/2">
        <h3 class="text-2xl mb-4"><span class="text-blue">.</span>BACK_END</h3>
        <p class="text-lg text-grey-light w-1/2">
          Toute bonne application à besoin d’un bon backend qui répond 
          directement aux besoins frontend. C’est pourquoi je travail 
          principalement avec Nuxt.js. Il permet d’unir le front et le 
          back dans un même projet, tout en permettant une architecture 
          API REST propre et efficace. Je maitrise aussi python avec django 
          lorsqu’il est nécessaire.
        </p>
      </div>
    </div>

    <div class="flex justify-center text-white items-center font-kdam py-20 gap-20">
      <div class="flex justify-end w-1/2">
        <div class="flex justify-end rtl gap-10">
          <img src="/assets/icons/tailwind.svg" alt="">
          <img src="/assets/icons/vue.svg" alt="">
        </div>        
      </div>

      <div class="w-1/2">
        <h3 class="text-2xl mb-4"><span class="text-blue">.</span>FRONT_END</h3>
        <p class="text-lg text-grey-light w-1/2">
          Le front end est crucial pour attirer l’oeil de l’utilisateur et 
          lui offrir une UX belle et intuitive. C’est pourquoi je travail 
          avec Vue.js qui permet une architecture SFC (single file component) 
          donnant accès à des composants réutilisables, couplés avec Pinia 
          Store pour avoir accès au core système de l’app depuis n’importe 
          quel composants. De pair avec tailwind, cette stack me permet de 
          développer rapidement une interface pratique.
        </p>
      </div>
    </div>

  </section>

  <section id="historique" data-section="historique" class="min-h-screen py-20">
    <div class="text-2xl sm:text-3xl font-kdam text-center">
      <p class="text-white"><span class="text-blue">.//</span> MON HISTORIQUE</p>
    </div>

    <div class="mt-10 text-white font-kdam tracking-wide">

      <HistoryLine :alignRight="true" :sepSize="'big'">
        <h3 class="text-2xl mb-4">GROUPE WE</h3>
        <p class="text-grey-light mb-4">Mars 2023 - Aujourd’hui , Marcoussis 91460 </p>
        <p>
          Développement de divers applications et sites web dont :
        </p>
        <ul class="list-disc ml-6 mb-4">
          <li>Un outil interne pour la recherche et suivi de marchés publiques</li>
          <li>plusieurs sites vitrines pour présenter chaque filiales du groupe et établir une image publique</li>
          <li>Webapp de commande et demande de devis en ligne pour des produits B2B</li>
        </ul>
        <p>
          Mise en place d’un CRM et développement de features essentielles au fonctionnement de l’entreprise
        </p>
      </HistoryLine>

      <HistoryLine :sepSize="'medium'">
        <h3 class="text-2xl mb-4">Pin-Pon DEV</h3>
        <p class="text-grey-light mb-4">Mars 2022 - Février 2023 , Saint-Michel-sur-Orge 91240 </p>
        <ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4">
          <li class="my-4">Développement et bug fixing sur la plateforme supercard.fr</li>
          <li>Création d’une webapp Nuxt à destination des chargés d’insertion du département de l’Isère</li>
          <li class="my-4">Migration d’une plateforme réseau d’unniversité sous kubernetes</li>
        </ul>
      </HistoryLine>

      <HistoryLine :alignRight="true" :sepSize="'light'">
        <h3 class="text-2xl mb-4">Aybo Conseil </h3>
        <p class="text-grey-light mb-4">Décembre 2021 - Janvier 2021, Paris, 75008 </p>
        <p>
          Finalisation du développement d’outils internes, plateformes intranet.
        </p>
      </HistoryLine>

      <HistoryLine :sepSize="'medium'">
        <h3 class="text-2xl mb-4">Made in Paris</h3>
        <p class="text-grey-light mb-4">Décembre 2021 - Janvier 2021, Paris, 75008</p>
        <p>
          Développement de divers projets dans le domaine de la food Tech : 
        </p>
        <ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4">
          <li class="my-4">Création d’API Django REST framework</li>
          <li>Développement de webapps avec VueJS et Tailwind</li>
        </ul>
      </HistoryLine>

      <HistoryLine :alignRight="true" :sepSize="'light'">
        <h3 class="text-2xl mb-4">Freelance </h3>
        <p class="text-grey-light mb-4">Nov 2020 à Mars 2021, Saint-Michel-sur-Orge 91240</p>
        <ul class="list-disc ml-6 mb-4">
          <li class="my-4">Création de sites web pour petites entreprises.</li>
          <li>Conception et création d’une plateforme de mise en relation pour collectionneurs Pop culture.</li>
        </ul>
      </HistoryLine>

      <HistoryLine :sepSize="'light'">
        <h3 class="text-2xl mb-4">Cabinet BME&C</h3>
        <p class="text-grey-light mb-4">Juin 2018 - Dec 2019, Achères 78260 </p>
        <ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4">
          <li class="my-4">Installation et administration de deux serveurs d'applications RDP</li>
          <li>Administration de l'infrastructure logistique matériel et réseau.</li>
        </ul>
      </HistoryLine>

    </div>
  </section>
  <section id="hobby" data-section="hobby" class="h-screen">HOBBY</section>
  <section id="contact" data-section="contact" class="h-screen">CONTACT</section>
</template>

<script>
export default {
  data() {
    return {
      current: 'home',
      sections: ['home', 'tech', 'historique', 'hobby', 'contact'],
      slideOpen: false,
      sectionEls: [], // stockera les éléments DOM des sections
    }
  },
  mounted() {
    // Récupérer les éléments <section data-section="...">
    this.sectionEls = this.sections
      .map((id) => document.querySelector(`[data-section="${id}"]`))
      .filter(Boolean)

    // Lancer une première détection
    this.updateCurrentSection()

    // Scroll & resize
    window.addEventListener('scroll', this.updateCurrentSection, { passive: true })
    window.addEventListener('resize', this.updateCurrentSection)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateCurrentSection)
    window.removeEventListener('resize', this.updateCurrentSection)
  },
  methods: {
    navClass(id) {
      const base =      'text-4xl font-kdam h-9 transition-colors duration-200'
      const inactive =  'text-blue hover:text-red'
      const active =    'text-red underline decoration-red underline-offset-8 decoration-2'
      return `${base} ${this.current === id ? active : inactive}`
    },

    updateCurrentSection() {
      if (!this.sectionEls.length) return

      const viewportHeight = window.innerHeight
      const headerOffset = 96 // tu as scroll-margin-top: 96px; sur les sections
      const targetY = viewportHeight * 0.3 // ligne de référence à 30% du viewport

      let activeId = this.current

      // On cherche la section qui recouvre la ligne targetY
      for (const el of this.sectionEls) {
        const rect = el.getBoundingClientRect()
        const top  = rect.top
        const bottom = rect.bottom

        if (top - headerOffset <= targetY && bottom > targetY) {
          const id = el.getAttribute('data-section')
          if (id) activeId = id
          break
        }
      }

      this.current = activeId
    },

    async scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      await setTimeout(() => {
        this.slideOpen = false
      }, 700)
    },
  },
}
</script>


<style>
html {
  background-image: url('/assets/images/main_background.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Transition util */
.smooth { transition: 0.5s; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter, .fade-leave-to { opacity: 0; }

section { scroll-margin-top: 96px; }
/* Variables de style du motif */
.badge-wrap {
  --dot-color: #80E1D6;     /* bleu */
  --dot-size: 4px;          /* longueur du “point” */
  --dot-gap: 7px;          /* espacement total (point + vide) */
}

/* horizontale : collée au bord gauche du badge, s'étire vers la gauche */
.badge-wrap .dot-h{
  position: absolute;
  top: 50%;                   /* démarre au bord haut du badge */
  right: 100%;              /* colle sa droite au bord gauche du badge */
  width: 100vw;             /* s'étire jusqu'au bord gauche de l'écran */
  height: 1px;
  opacity: var(--dot-opacity);
  background: repeating-linear-gradient(
    to right,
    var(--dot-color) 0 var(--dot-size),
    transparent var(--dot-size) var(--dot-gap)
  );
}

/* verticale : collée au bord haut du badge, monte vers le haut */
.badge-wrap .dot-v{
  position: absolute;
  left: 50%;                  /* démarre au bord gauche du badge */
  bottom: 90%;             /* colle sa base au bord haut du badge */
  width: 1px;
  height: 100vh;            /* s'étire jusqu’en haut de l’écran */
  opacity: var(--dot-opacity);
  background: repeating-linear-gradient(
    to bottom,
    var(--dot-color) 0 var(--dot-size),
    transparent var(--dot-size) var(--dot-gap)
  );
}

.badge-group-entrance {
  will-change: transform, opacity;
  animation: badge-group-from-corner 5s cubic-bezier(.16,.9,.23,1.03) both;
  animation-delay: 120ms;
}

@keyframes badge-group-from-corner {
  0% {
    transform: translate(-70vw, -70vh) scale(.95);
    opacity: 0;
    filter: blur(2px);
  }
  60% {
    transform: translate(2vw, 2vh) scale(1.03);
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce){
  .badge-group-entrance{
    animation: none;
    transform: none;
    opacity: 1;
    filter: none;
  }
}


.z-1 {
  z-index: 1;
}.z-2 {
  z-index: 2;
}.z-3 {
  z-index: 3;
}

.font-mask {
  color: red;
}

.font-mask::before {
  color: white;
  content: "ALEXaNDrE MAYER"; /* même texte – normalisé */
  position:absolute;
  inset:0;
  text-shadow:
    6px 0   #000000,
   -6px 0   #001622,
    0   6px #001622,
    0  -6px #001622,
    6px 6px #001622,
   -6px 6px #001622,
    6px -6px #001622,
   -6px -6px #001622;
}

.glow-btn {
  background-image: url('/assets/icons/button_bg.svg');
  background-repeat:no-repeat;
  background-size:100% 100%;
}

</style>
