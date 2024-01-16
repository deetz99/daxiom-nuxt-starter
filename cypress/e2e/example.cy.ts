describe(
  'Example Test',
  {
    viewportWidth: 1280,
    viewportHeight: 800
  },
  () => {
    it('Passes', () => {
      cy.visit('/template')
      cy.wait(1000) // wait for page hydration
      cy.injectAxe() // always inject after page loads
      cy.checkA11y({
        // run a11y checks
        exclude: ['.bg-bcGovColor-header', '.nuxt-devtools-panel'] // ignore header/footer components and nuxt devtools
      })
    })
  }
)
