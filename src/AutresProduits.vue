<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 id="autres-produits" class="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl">
          Les produits de la Ruche
        </h2>
        <p class="text-xl italic leading-7 text-gray-500">
          Fabrication maison, tout ça tout ça...
        </p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li v-for="produit in produits" :key="produit.titre">
            <div class="space-y-4">
              <div class="relative pb-2/3">
                <img
                  :src="`/img/produits/${produit.img}`"
                  :alt="`Photo de ${produit.titre}`"
                  class="absolute object-cover object-top w-full h-full rounded-lg shadow-lg"
                  :class="{'opacity-50': !produit.stock}"
                >
                <span
                  v-if="!produit.stock"
                  class="absolute bottom-0 right-0 px-2 py-px m-2 text-sm font-semibold text-red-800 bg-white rounded"
                >
                  Victime de son succès
                </span>
              </div>
              <div :class="{'opacity-50': !produit.stock}">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <div class="flex items-baseline justify-between">
                    <h4 :style="{ color: produit.color }" class="text-3xl font-hand">
                      {{ produit.titre }}
                    </h4>
                    <span class="text-sm text-gray-600">
                      {{ produit.prix }}&nbsp;€ / {{ produit.quantite }}
                    </span>
                  </div>
                  <p class="text-gray-600">
                    {{ produit.provenance }}
                  </p>
                </div>
                <p class="text-base leading-7 text-gray-500">
                  {{ produit.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AutresProduits',
  setup() {
    const produits = [
      {
        titre: ' Lingots de cire',
        prix: 2,
        stock: true,
        description: `Composition : 100% Cire d’opercule. Utilisation : Cosmétiques, Cirage, BeeWraps, etc.`,
        color: '#b79d5e',
        quantite: '30g',
        img: 'cire.png',
        cacher: false,
      },
      {
        titre: 'Petit BeeWrap',
        prix: 3,
        stock: true,
        description: 'Tissu 100% cotton et Cire d’opercule. \n S\'utilise en substitut aux films alimentaires. Pour contact alimentaire. Nettoyage à l’eau froide.',
        color: '#93aba7',
        quantite: '10x10 cm',
        img: 'bwrap.png',
        cacher: false,
      },
      {
        titre: 'Grand BeeWrap',
        prix: 10,
        stock: true,
        description: 'Tissu 100% cotton et Cire d’opercule. S\'utilise en substitut aux films alimentaires. Pour contact alimentaire. Nettoyage à l’eau froide.',
        color: '#495c72',
        quantite: '30x30 cm',
        img: 'bwrap.png',
        cacher: false,
      },
    ]

    return {
      produits: produits.filter(({ cacher }) => !cacher),
    }
  },
}
</script>
