describe('Produkty', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('shows products list', () => {

    cy.get('[data-cy=product-card]')
      .should('exist')
      .and('have.length.greaterThan', 0)
  })

  it('shows product names', () => {

    cy.get('[data-cy=product-name]')
      .should('exist')
      .and('be.visible')
  })

  it('shows product prices', () => {

    cy.get('[data-cy=product-price]')
      .should('exist')
      .and('be.visible')
  })

  it('shows at least one product', () => {

    cy.get('[data-cy=product-card]')
      .its('length')
      .should('be.greaterThan', 0)
  })

  it('has add to cart button', () => {
    
    cy.get('[data-cy=add-to-cart]')
      .should('exist')
      .and('be.visible')
  })

})