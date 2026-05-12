describe('Koszyk', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('adds product to cart', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .should('contain', '1')
      .and('be.visible')
  })

  it('opens cart page', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.url()
      .should('include', '/koszyk')
  })

  it('shows product in cart', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=cart-item]')
      .should('exist')
      .and('be.visible')
  })

  it('shows total price', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=cart-total]')
      .should('exist')
  })

  it('removes product from cart', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=remove-item]')
      .click()

    cy.get('[data-cy=cart-item]')
      .should('not.exist')
  })

  it('shows empty cart', () => {

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.contains('Twój koszyk jest pusty')
      .should('exist')
  })

  it('clears cart', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=clear-cart]')
      .click()

    cy.contains('Twój koszyk jest pusty')
      .should('exist')
  })

})