// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  extends: ['@dwol/auth-layer-test2'],
  modules: ['@nuxt/test-utils/module'],
  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces']
  },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        iso: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    public: {
      // Keys within public, will be also exposed to the client-side
      addressCompleteKey: '',
      authApiURL: '',
      authWebURL: '',
      kcURL: '',
      kcRealm: '',
      kcClient: '',
      legalApiURL: '',
      payApiURL: '',
      registryHomeURL: '',
      version: process.env.npm_package_version || ''
    }
  }
})
