describe('Platnosci', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('opens payment form correctly', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=go-to-payment]')
      .click()

    cy.get('[data-cy=payment-firstname]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=payment-lastname]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=payment-email]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=payment-card]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=payment-expiry]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=payment-cvv]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-cy=submit-payment]')
      .should('exist')
      .and('be.visible')
  })

  it('shows validation error for empty form', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=go-to-payment]')
      .click()

    cy.get('[data-cy=submit-payment]')
      .click()

    cy.get('[data-cy=payment-error]')
      .should('exist')
      .and('be.visible')
  })

  it('shows validation error for invalid email', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=go-to-payment]')
      .click()

    cy.get('[data-cy=payment-firstname]')
      .type('Jan')

    cy.get('[data-cy=payment-lastname]')
      .type('Kowalski')

    cy.get('[data-cy=payment-email]')
      .type('abc')

    cy.get('[data-cy=submit-payment]')
      .click()

    cy.get('[data-cy=payment-error]')
      .should('contain', 'Email')
      .and('be.visible')
  })

  it('shows validation error for invalid card', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=go-to-payment]')
      .click()

    cy.get('[data-cy=payment-firstname]')
      .type('Jan')

    cy.get('[data-cy=payment-lastname]')
      .type('Kowalski')

    cy.get('[data-cy=payment-email]')
      .type('jan@test.pl')

    cy.get('[data-cy=payment-card]')
      .type('123')

    cy.get('[data-cy=submit-payment]')
      .click()

    cy.get('[data-cy=payment-error]')
      .should('contain', '16 cyfr')
      .and('be.visible')
  })

  it('submits payment successfully', () => {

    cy.get('[data-cy=add-to-cart]')
      .first()
      .click()

    cy.get('[data-cy=nav-cart]')
      .click()

    cy.get('[data-cy=go-to-payment]')
      .click()

    cy.get('[data-cy=payment-firstname]')
      .type('Jan')

    cy.get('[data-cy=payment-lastname]')
      .type('Kowalski')

    cy.get('[data-cy=payment-email]')
      .type('jan@test.pl')

    cy.get('[data-cy=payment-card]')
      .type('1234123412341234')

    cy.get('[data-cy=payment-expiry]')
      .type('12/25')

    cy.get('[data-cy=payment-cvv]')
      .type('123')

    cy.get('[data-cy=submit-payment]')
      .click()

    cy.get('[data-cy=payment-success]')
      .should('exist')
      .and('be.visible')
  })
  
})