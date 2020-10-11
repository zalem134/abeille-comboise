<template>
  <div class="">
    <div class="container flex flex-col flex-wrap items-center justify-center px-3 mx-auto md:flex-row mt-20">
      <!--Left Col-->
      <Logo class="h-40 text-white" />
      <!--<div class="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left">-->
      <!--  <Logo class="h-40 text-white" />-->

      <!--  &lt;!&ndash;<h1 class="my-4 text-2xl font-bold leading-tight">&ndash;&gt;-->
      <!--  &lt;!&ndash;  L'Abeille Comboise&ndash;&gt;-->
      <!--  &lt;!&ndash;</h1>&ndash;&gt;-->
      <!--  &lt;!&ndash;<p class="mb-8 text-xl leading-normal">&ndash;&gt;-->
      <!--  &lt;!&ndash;  Miel et produits de la ruche en pays savoyard.&ndash;&gt;-->
      <!--  &lt;!&ndash;</p>&ndash;&gt;-->
      <!--</div>-->
      <!--&lt;!&ndash;Right Col&ndash;&gt;-->
      <!--<div class="flex justify-center w-full py-6 md:w-3/5">-->
      <!--  <img class="w-full rounded-lg md:w-4/5" src="./assets/images/apiculteur.jpg" alt="">-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
import Logo from './Logo.vue'

export default {
  name: 'Hero',
  components: { Logo },
}
</script>
