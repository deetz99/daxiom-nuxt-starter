<script setup lang="ts">
  const i18nHead = useLocaleHead({
    addDirAttribute: true,
    addSeoAttributes: true
  })

  const htmlAttrs = computed(() => i18nHead.value.htmlAttrs!)

  useHead({
    title: 'Template Details',
    htmlAttrs: {
      lang: htmlAttrs.value.lang,
      dir: htmlAttrs.value.dir
    }
  })
</script>
<template>
  <div class="text-center space-y-4">
    <h1 class="text-2xl font-semibold mt-8">
      Welcome to the BCROS Nuxt3 Starter Template
    </h1>
    <p class="text-lg">
      This template was created to enhance DX while providing a consistent theme
      across BCROS applications.
    </p>
    <div class="text-left mx-20 py-4">
      <h2 class="text-xl font-semibold">Template Features</h2>
      <div class="flex flex-wrap text-lg mx-10 justify-between">
        <ul class="list-disc">
          <li>Several common Nuxt modules</li>
          <li>BC Government theme (colours/fonts) preset with TailwindCSS</li>
          <li>BCROS authentication with Firebase</li>
          <li>"app-shell" layout</li>
        </ul>
        <ul class="list-disc">
          <li>Vitest unit and Cypress e2e testing configured</li>
          <li>i18n configured and ready to use</li>
          <li>Linters pre-configured</li>
        </ul>
      </div>
    </div>

    <p class="text-lg">
      Utilizing NuxtUI component library and TailwindCSS for styling.
    </p>
    <p class="text-lg">
      Using Nuxt Layers for code organization, the layers that make up this
      template can be used on their own if you don't like the app-shell
      configuration.
    </p>
    <div class="flex flex-wrap mx-auto gap-4 justify-center">
      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">The Styling & Presets Layer</h2>
        </template>
        <div class="text-left flex flex-wrap gap-4">
          <div class="">
            Nuxt Modules:
            <ul class="ml-2 list-disc">
              <li>@nuxt/ui</li>
              <li>@nuxt/content</li>
              <li>@nuxtjs/i18n</li>
              <li>@pinia/nuxt</li>
              <li>@vueuse/nuxt</li>
            </ul>
          </div>
          <div class="">
            Presets:
            <ul class="ml-2 list-disc">
              <li>Tailwind colours with BC Gov palette</li>
              <li>Tailwind Typography with BC Gov colour palette</li>
              <li>BCSans font</li>
              <li>NuxtUI colours & variants</li>
            </ul>
          </div>
        </div>
        <template #footer>
          <UButton
            label="See the repo"
            to="https://github.com/deetz99/layer-test"
            variant="link"
            target="_blank"
          />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">The Auth & Layout Layer</h2>
        </template>
        <div class="text-left flex flex-wrap gap-4">
          <div class="">
            Authentication:
            <ul class="ml-2 list-disc">
              <li>BCROS Authentication with Firebase</li>
              <li>Composables to handle the current user</li>
            </ul>
          </div>
          <div class="">
            Layout/Components:
            <ul class="ml-2 list-disc">
              <li>Header component with all login menus/options</li>
              <li>Default layout pre-configured</li>
              <li>Footer component with useful links</li>
              <li>Locale switcher component</li>
              <li>Built with accessibility in mind</li>
            </ul>
          </div>
        </div>
        <template #footer>
          <UButton
            label="See the repo"
            to="https://github.com/deetz99/auth-layout-layer"
            variant="link"
            target="_blank"
          />
        </template>
      </UCard>
    </div>
    <p class="text-lg">
      app.vue and layouts/default.vue are already setup so there's no need to
      muck around with layouts. However these can be overwritten to suit your
      needs. All components and composables provided by the layers are globally
      available.
    </p>
    <br />
    <span class="text-xl font-semibold">
      Modify the pages/index.vue file to get started!
    </span>
  </div>
</template>
