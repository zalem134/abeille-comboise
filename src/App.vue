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
// import AppFooter from './AppFooter.vue'
import { defineComponent, onMounted } from 'vue'
import NavHeader from './NavHeader.vue'
import SimpleHero from './SimpleHero.vue'
import Abeille from './Abeille.vue'
import Produits from './Produits.vue'
import WaveBottom from './WaveBottom.vue'
import Contact from './Contact.vue'
import Swal from 'sweetalert2'

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
  setup() {
    onMounted(() => {
      if (window.location.search.includes('success=true')) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#a5dc86',
          title: 'Merci',
          text: 'Votre message a bien été envoyé, nous reviendrons vers vous dès que possible.',
        })
      }
    })
  },
})

</script>

<style>

html {
    scroll-behavior: smooth;
}

:target {
    scroll-margin-top: 5rem;
}

</style>


<style src="sweetalert2/dist/sweetalert2.min.css"/>
<style>
.swal2-modal {
    @apply rounded-lg !important;
}
</style>
