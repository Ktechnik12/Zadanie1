import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Koszyk from '../components/Koszyk'

describe('Koszyk component', () => {

  test('renders empty cart message', () => {

    render(
      <BrowserRouter>
        <Koszyk
          items={[]}
          onRemove={() => {}}
          onUpdateQuantity={() => {}}
          onClear={() => {}}
        />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', { name: 'Koszyk' })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/twój koszyk jest pusty/i)
    ).toBeInTheDocument()
  })

  test('renders cart item', () => {

    render(
      <BrowserRouter>
        <Koszyk
          items={[
            {
              id: 1,
              name: 'Laptop',
              category: 'Elektronika',
              price: 100,
              quantity: 1
            }
          ]}
          onRemove={() => {}}
          onUpdateQuantity={() => {}}
          onClear={() => {}}
        />
      </BrowserRouter>
    )

    expect(screen.getByText(/laptop/i)).toBeInTheDocument()

    expect(screen.getByText(/elektronika/i)).toBeInTheDocument()

    expect(screen.getByText(/cena: 100 zł/i)).toBeInTheDocument()
  })

  test('renders all cart controls and product data', () => {

    render(
      <BrowserRouter>
        <Koszyk
          items={[
            {
              id: 1,
              name: 'Laptop',
              category: 'Elektronika',
              price: 100,
              quantity: 2
            }
          ]}
          onRemove={() => {}}
          onUpdateQuantity={() => {}}
          onClear={() => {}}
        />
      </BrowserRouter>
    )

    const productName = screen.getByText(/laptop/i)
    const category = screen.getByText(/elektronika/i)
    const removeButton = screen.getByText(/usuń/i)
    const clearButton = screen.getByText(/wyczyść koszyk/i)
    const continueButton = screen.getByText(/kontynuuj zakupy/i)
    const paymentButton = screen.getByText(/przejdź do płatności/i)

    expect(productName).toBeInTheDocument()
    expect(productName).toBeVisible()

    expect(category).toBeInTheDocument()
    expect(category).toBeVisible()

    expect(removeButton).toBeInTheDocument()
    expect(removeButton).toBeVisible()

    expect(clearButton).toBeInTheDocument()
    expect(clearButton).toBeVisible()

    expect(continueButton).toBeInTheDocument()
    expect(continueButton).toBeVisible()

    expect(paymentButton).toBeInTheDocument()
    expect(paymentButton).toBeVisible()

    expect(screen.getByText(/cena: 100 zł/i)).toBeInTheDocument()

    expect(screen.getAllByText(/200.00 zł/i).length).toBeGreaterThan(0)

    expect(screen.getByText(/razem/i)).toBeInTheDocument()
  })

  
})