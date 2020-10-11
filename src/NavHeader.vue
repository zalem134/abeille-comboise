<template>
  <nav
    class="fixed top-0 z-30 w-full transition-colors duration-500 ease-in-out hidden md:block px-10 text-sm"
    :class="showHeader ? 'bg-white text-gray-600 shadow' : 'text-orange-200'"
  >
    <div class="flex items-center justify-between w-full py-2 mx-auto mt-0">
      <div
        class="flex items-center pl-4 transition-opacity duration-500 ease-in-out"
        :class="{'opacity-0': !showHeader}"
      >
        <!--<Logo class="h-16 text-gray-700" />-->
        <img alt="" class="h-16" src="./assets/images/logo_mathias.png">
      </div>

      <ul class="flex items-center gap-6">
        <li v-for="{title, link} in links" :key="title">
          <a :class="showHeader ? 'hover:text-gray-900' : 'hover:text-orange-900'" :href="link">
            {{ title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'NavHeader',
  setup() {
    const currentScrollPosition = ref(0)
    const navRef = ref()

    const onScroll = () => {
      currentScrollPosition.value = window.pageYOffset || document.documentElement.scrollTop
    }
    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })

    const showHeader = computed(() => currentScrollPosition.value > 200)

    const links = [
      { title: 'L\'abeille Comboise', link: '#abeille' },
      { title: 'Produits', link: '#produits' },
      { title: 'Contact', link: '#contact' },
    ]
    return {
      showHeader,
      links,
      navRef,
    }
  },
})
</script>
