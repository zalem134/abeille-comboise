<template>
  <section id="produits" class="py-8 bg-gray-100">
    <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
      <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 sm:text-6xl font-hand">
        Les produits
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-full opacity-25 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500" />
      </div>
      <Miels />
      <AutresProduits />
    </div>
  </section>
</template>
<script>
import Miels from './Miels.vue'
import AutresProduits from './AutresProduits.vue'

export default {
  name: 'Produits',
  components: { AutresProduits, Miels },
}
</script>
