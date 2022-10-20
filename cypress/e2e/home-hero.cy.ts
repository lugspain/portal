/// <reference types="cypress" />

describe('Hero section...', () => {
  before(() => {
    cy.visit('/')
  })

  it('...has proper texts and HTML tags', () => {
    cy.get('h1').contains('Liferay User Group España')
    cy.get('h1 + p').contains(
      'El sitio para compartir y aprender sobre Liferay'
    )
  })

  it('...has a button that opens the Search', () => {
    cy.contains('Buscar eventos').click()
    cy.contains('Introduce un término de búsqueda', {
      timeout: 10000,
    })
  })
})
