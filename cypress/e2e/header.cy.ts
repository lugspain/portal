/// <reference types="cypress" />

describe('The header...', () => {
  it('...renders the proper elements normally', () => {
    cy.visit('/')

    cy.get('header [data-cy="logo"]')
      .should('have.attr', 'href')
      .and('include', '/')

    cy.get('header [data-cy="search-button"]').contains('Buscar eventos')
  })

  it('...renders the proper elements in the 404 page', () => {
    cy.visit('/404')

    cy.get('header [data-cy="search-button"]').should('not.exist')
  })
})
