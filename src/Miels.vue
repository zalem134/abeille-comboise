<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 id="miels" class="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl">
          Les miels
        </h2>
        <p class="text-xl italic leading-7 text-gray-500">
          Extraits de ruches en pays Savoyard, nos miels sont mis en pots à la Miellerie Collective des Bauges de Saint
          Eustache (74).
          Gage de qualité, ils cristallisent naturellement au bout de quelques mois.
        </p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li v-for="miel in miels" :key="miel.titre">
            <div class="space-y-4">
              <div class="relative pb-2/3">
                <img
                  :src="`/img/produits/${miel.img}`"
                  :alt="`Photo d'un pot de ${miel.titre}`"
                  class="absolute object-cover object-top w-full h-full rounded-lg shadow-lg"
                  :class="{'opacity-50': !miel.stock}"
                >
                <span
                  v-if="!miel.stock"
                  class="absolute bottom-0 right-0 px-2 py-px m-2 text-sm font-semibold text-red-800 bg-white rounded"
                >
                  Victime de son succès
                </span>
              </div>
              <div :class="{'opacity-50': !miel.stock}">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <div class="flex items-baseline justify-between">
                    <h4 :style="{ color: miel.color }" class="text-3xl font-hand">
                      {{ miel.titre }}
                    </h4>
                    <span class="text-sm text-gray-600">
                      {{ miel.prix }}&nbsp;€ / {{ miel.quantite }}
                    </span>
                  </div>
                  <p class="text-gray-600">
                    {{ miel.provenance }}
                  </p>
                </div>
                <p class="text-base leading-7 text-gray-500">
                  {{ miel.description }}
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
  name: 'Miels',
  setup() {
    const miels = [
      {
        titre: 'Miel d\'Acacia',
        provenance: 'Pays d’Entrelacs',
        prix: 8.50,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#a6a623',
        quantite: '500g',
        img: 'acacia.png',
        cacher: false,
      },
      {
        titre: 'Miel de Montagne',
        provenance: 'Massif des Bauges',
        prix: 8.50,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#6e8760',
        quantite: '500g',
        img: 'montagne.png',
        cacher: false,
      },
      {
        titre: 'Miel de Fleurs',
        provenance: 'Pays d’Entrelacs',
        prix: 7.00,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#ad9866',
        quantite: '500g',
        img: 'fleurs.png',
        cacher: false,
      },
      {
        titre: 'Miel de Forêt "2019"',
        provenance: 'Pays de Chautagne',
        prix: 8.00,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#194018',
        img: 'foret-2019.png',
        quantite: '500g',
        cacher: false,
      },
      {
        titre: 'Miel de Forêt "2020"',
        provenance: 'Massif des Bauges',
        prix: 8.00,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#486455',
        img: 'foret-2020.png',
        quantite: '500g',
        cacher: false,
      },
      {
        titre: 'Miel de Tilleul',
        provenance: 'Pays de Chautagne',
        prix: 8.00,
        stock: true,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#61827b',
        img: 'tilleul.png',
        quantite: '500g',
        cacher: false,
      },
      {
        titre: 'Miel de Haute Montagne',
        provenance: 'Massif des Bauges',
        prix: 9.00,
        stock: false,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#285b8a',
        img: 'haute-montagne.png',
        quantite: '500g',
        cacher: false,
      },
      {
        titre: 'Miel de Châtaignier',
        provenance: 'Massif des Bauges',
        prix: 9.00,
        stock: false,
        description: 'Un miel fort en bouche, qui Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse.',
        color: '#653200',
        img: 'chataignier.png',
        quantite: '500g',
        cacher: false,
      },
    ]

    return {
      miels: miels.filter(({ cacher }) => !cacher),
    }
  },
}
</script>
