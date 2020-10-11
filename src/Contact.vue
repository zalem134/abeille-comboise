<template>
  <section id="contact" class="">
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div class="px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-4xl font-extrabold leading-8 tracking-tight text-red-50 sm:text-6xl sm:leading-9 font-hand">
            Contactez-nous
          </h2>
          <p class="mt-3 text-lg leading-6 text-red-200">
            Pour votre commande, pour goûter nos produits,
            ou pour voir les ruches n'hésitez pas à passer nous voir !
          </p>
          <dl class="mt-8 text-base leading-6 text-red-200">
            <div>
              <dt class="sr-only">
                Adresse postale
              </dt>
              <dd class="flex gap-3">
                <!-- Heroicon name: home -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-red-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <a href="https://goo.gl/maps/d5yWcGhNUYy6QRfp9" target="_blank" rel="nofollow noopener noreferrer">
                  <p>407 Chemin du Solliet</p>
                  <p>Le Mont Derriere</p>
                  <p>73340 Bellecombe en Bauges</p>
                </a>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">
                Numéro de téléphone
              </dt>
              <dd class="flex gap-3">
                <!-- Heroicon name: phone -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-red-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:06689693 88">
                  06 68 96 93 88
                </a>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">
                Email
              </dt>
              <dd class="flex gap-3">
                <!-- Heroicon name: mail -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-red-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:contact@abeille-comboise.fr">
                  contact@abeille-comboise.fr
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            class="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label for="nom" class="sr-only">Nom</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="nom"
                  type="text"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Nom"
                >
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Email"
                >
              </div>
            </div>
            <div>
              <label for="tel" class="sr-only">Téléphone</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="tel"
                  type="tel"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Téléphone"
                >
              </div>
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <div class="relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Message"
                />
              </div>
            </div>
            <div class="">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-orange-200 border border-transparent rounded-md hover:bg-orange-50 active:bg-orange-300"
                >
                  Envoyer
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact',
}
</script>
<style>

html {
    scroll-behavior: smooth;
}

:target {
    scroll-margin-top: 5rem;
}

</style>
