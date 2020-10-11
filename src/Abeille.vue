<template>
  <section id="abeille" class="py-8 bg-white border-b">
    <div class="container max-w-5xl m-8 mx-auto">
      <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 sm:text-6xl font-hand">
        L'Abeille Comboise
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-full opacity-25 bg-gradient-to-r from-red-800 via-orange-500 to-yellow-500" />
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 p-6 sm:w-1/2">
          <h2 class="mb-3 text-2xl font-bold leading-none text-gray-800 sm:text-3xl">
            Allez ! Viens dans Mont Derrière !
          </h2>
          <p class="text-gray-600">
            Que font ici ces titres de noblesse ? <br>
            Leurs faux éclats ne peuvent nous éblouir. <br>
            Ici, puissants, l'inégalité cesse, <br>
            Vieux privilèges, il vous faut tous périr. <br>
            Goûtons amis, ce bonheur qu'on méprise, <br>
            Car sachez bien qu'à l’École des Arts, <br>
            <br>
            "Fraternité", c'est là notre devise, <br>
            C'est la devise de tous les vrais Gadz'Arts. <br>
          </p>
        </div>
        <div class="flex items-center w-full p-6 sm:w-1/2">
          <img class="object-cover w-full mx-auto rounded-lg shadow-lg sm:h-64 " src="/img/apiculteur.jpg" alt="">
        </div>
      </div>


      <div class="flex flex-col-reverse flex-wrap sm:flex-row">
        <div class="flex items-center w-full p-6 mt-6 sm:w-1/2 ">
          <img
            class="object-cover w-full mx-auto rounded-lg shadow-lg sm:h-64"
            src="https://www.lesbauges.com/medias/images/info_pages/multitailles/640x480_bellecombe-en-bauges-1159.jpg"
            alt="Photo de Bellecombe en bauge"
          >
        </div>
        <div class="w-full p-6 mt-6 sm:w-1/2">
          <div class="align-middle">
            <h3 class="mb-3 text-2xl font-bold leading-none text-gray-800 sm:text-3xl">
              De l'artisanat, tout ça tout ça.
            </h3>
            <p class="text-gray-600">
              Non, ce n'est plus votre antique abbaye, <br>
              Vos chants sacrés, aux pieds de vos autels, <br>
              Non, ce n'est plus votre indolente vie, <br>
              Vos oraisons pour les heureux mortels. <br>
              Le fer gémit, c'est là notre prière; <br>
              Votre couvent, c'est l’École des Arts. <br>
              <br>
              Moines, dormez sous vos six pieds de terre, <br>
              Dormez en paix, et vivent les Gadz'Arts. <br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Abeille',
}
</script>
