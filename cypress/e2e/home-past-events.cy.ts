/// <reference types="cypress" />

describe('Past events section in home...', () => {
  it('...has proper title', () => {
    cy.visit('/')

    cy.get('[data-cy="past-events-title"]').contains('Eventos anteriores')
  })

  it('...loads the default amount of events', () => {
    cy.get('[data-cy="past-event-item-grid"]').should('have.length', 6)
  })
})
