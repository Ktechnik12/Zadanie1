describe('Routing', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('opens cart page', () => {

    cy.get('[data-cy=nav-cart]').click()

    cy.url().should('include', '/koszyk')
  })

  it('returns to products page', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]').click()

    cy.get('[data-cy=continue-shopping]').click()

    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('adds product to cart', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .should('contain', '1')
      .and('be.visible')
  })
})