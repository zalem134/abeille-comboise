<template>
  <div class="leading-normal tracking-normal text-gray-800 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500">
    <NavHeader />
    <SimpleHero />
    <Abeille />
    <Produits />
    <WaveBottom />
    <Contact />
  <!--<AppFooter />-->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavHeader from './NavHeader.vue'
import SimpleHero from './SimpleHero.vue'
import Abeille from './Abeille.vue'
import Produits from './Produits.vue'
import WaveBottom from './WaveBottom.vue'
import Contact from './Contact.vue'
// import AppFooter from './AppFooter.vue'

export default defineComponent({
  components: {
    // AppFooter,
    Contact,
    WaveBottom,
    Produits,
    Abeille,
    SimpleHero,
    NavHeader,
  },

})
</script>

<style>
.gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}

html {
    scroll-behavior: smooth;
}

:target {
    scroll-margin-top: 5rem;
}

</style>
