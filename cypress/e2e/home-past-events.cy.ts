/// <reference types="cypress" />

describe('Past events section in home...', () => {
  before(() => {
    cy.visit('/')
  })

  it('...has proper title', () => {
    cy.get('[data-cy="past-events-title"]').contains('Eventos anteriores')
  })

  it('...loads the proper amount of events', () => {
    cy.get('[data-cy="past-event-item-grid"]').should('have.length', 6)

    cy.contains('Cargar más eventos').click()

    cy.get('[data-cy="past-event-item-grid"]').should('have.length', 12)

    cy.contains('Cargar más eventos').click()

    cy.get('[data-cy="past-event-item-grid"]').should('have.length', 18)
  })

  it.only('...allows to navigate to each event', () => {
    cy.get('[data-cy="past-event-item-grid"]')
      .first()
      .find('a')
      .first()
      .should('have.attr', 'href')
      .and('include', 'event/')

    cy.get('[data-cy="past-event-item-grid"]')
      .first()
      .find('a')
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href!)
        cy.url().should('include', href)
      })
  })
})
