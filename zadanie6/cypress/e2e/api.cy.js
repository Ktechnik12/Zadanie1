describe('API Tests', () => {

  it('GET /products returns products', () => {

    cy.request('GET', 'http://localhost:8080/api/products')
      .then((response) => {
        expect(response.status).to.eq(200)

        expect(response.body).to.exist

        expect(response.body.length).to.be.greaterThan(0)
      })
  })

  it('returns 404 for invalid endpoint', () => {

    cy.request({
      url: 'http://localhost:8080/api/invalid',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('POST /payments works correctly', () => {

    cy.request('POST', 'http://localhost:8080/api/payments', {

      customer: {
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jan@test.pl'
      },

      payment: {
        cardNumber: '1234123412341234',
        expiryDate: '12/25',
        cvv: '123'
      },

      items: [
        {
          id: 1,
          name: 'Produkt',
          price: 100,
          quantity: 1
        }
      ],

      total: 100
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('POST /payments returns error for invalid data', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/payments',
      failOnStatusCode: false,
      body: {}
    }).then((response) => {
      expect(response.status).to.not.eq(200)
    })
  })

  it('POST /payments returns 400 for missing customer data', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/payments',
      failOnStatusCode: false,
      body: {

        customer: {
          firstName: '',
          lastName: ''
        },

        items: [
          {
            id: 1,
            name: 'Produkt',
            price: 100,
            quantity: 1
          }
        ],

        total: 100
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('POST /payments returns 400 for empty cart', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/payments',
      failOnStatusCode: false,
      body: {

        customer: {
          firstName: 'Jan',
          lastName: 'Kowalski'
        },

        items: [],

        total: 0
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('GET products response has status 200', () => {

    cy.request('http://localhost:8080/api/products')
      .its('status')
      .should('eq', 200)
  })
  
  it('GET products returns array', () => {

    cy.request('http://localhost:8080/api/products')
      .its('body')
      .should('be.an', 'array')
  })

  it('GET /health returns status ok', () => {

    cy.request('GET', 'http://localhost:8080/health')
      .then((response) => {
        expect(response.status).to.eq(200)

        expect(response.body.status).to.eq('ok')
      })
  })

  it('returns 404 for invalid health endpoint', () => {

    cy.request({
      url: 'http://localhost:8080/health-invalid',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
  
})