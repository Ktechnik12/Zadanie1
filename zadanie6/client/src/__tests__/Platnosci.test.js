import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Platnosci from '../components/Platnosci'

describe('Platnosci component', () => {

  test('renders empty cart message', () => {

    render(
      <BrowserRouter>
        <Platnosci
          cartItems={[]}
          onPaymentSuccess={() => {}}
        />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', { name: 'Płatności' })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/koszyk jest pusty/i)
    ).toBeInTheDocument()
  })

  test('renders payment form', () => {

    render(
      <BrowserRouter>
        <Platnosci
          cartItems={[
            {
              id: 1,
              name: 'Laptop',
              price: 100,
              quantity: 1
            }
          ]}
          onPaymentSuccess={() => {}}
        />
      </BrowserRouter>
    )

    expect(
      screen.getByText(/dane osobowe/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/dane karty/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/podsumowanie/i)
    ).toBeInTheDocument()
  })

  test('renders payment summary', () => {

    render(
        <BrowserRouter>
        <Platnosci
            cartItems={[
            {
                id: 1,
                name: 'Laptop',
                price: 100,
                quantity: 2
            }
            ]}
            onPaymentSuccess={() => {}}
        />
        </BrowserRouter>
    )

    expect(screen.getByText(/laptop/i)).toBeInTheDocument()
        
    expect(screen.getAllByText(/200.00/i).length).toBeGreaterThan(0)

    expect(screen.getByText(/razem/i)).toBeInTheDocument()
    })

    test('renders all payment form elements', () => {

      render(
        <BrowserRouter>
          <Platnosci
            cartItems={[
              {
                id: 1,
                name: 'Laptop',
                price: 100,
                quantity: 1
              }
            ]}
            onPaymentSuccess={() => {}}
          />
        </BrowserRouter>
      )

      expect(screen.getByLabelText(/imię/i))
        .toBeInTheDocument()

      expect(screen.getByLabelText(/nazwisko/i))
        .toBeInTheDocument()

      expect(screen.getByLabelText(/email/i))
        .toBeInTheDocument()

      expect(screen.getByLabelText(/numer karty/i))
        .toBeInTheDocument()

      expect(screen.getByLabelText(/data ważności/i))
        .toBeInTheDocument()

      expect(screen.getByLabelText(/cvv/i))
        .toBeInTheDocument()

      expect(screen.getByText(/dane osobowe/i))
        .toBeInTheDocument()

      expect(screen.getByText(/dane karty/i))
        .toBeInTheDocument()

      expect(screen.getByText(/podsumowanie/i))
        .toBeInTheDocument()

      expect(screen.getByText(/razem/i))
        .toBeInTheDocument()
    })
})