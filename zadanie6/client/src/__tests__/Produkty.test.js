import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'
import Produkty from '../components/Produkty'

jest.mock('axios')

describe('Produkty component', () => {

  test('renders products list', async () => {

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Laptop',
          category: 'Elektronika',
          price: 100
        }
      ]
    })

    render(
      <Produkty onAddToCart={() => {}} />
    )

    await waitFor(() => {

      expect(
        screen.getByText(/laptop/i)
      ).toBeInTheDocument()

      expect(
        screen.getByText(/elektronika/i)
      ).toBeInTheDocument()

      expect(
        screen.getByText(/100/i)
      ).toBeInTheDocument()
    })
  })

  test('renders add to cart button', async () => {

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Laptop',
          category: 'Elektronika',
          price: 100
        }
      ]
    })

    render(
      <Produkty onAddToCart={() => {}} />
    )

    await waitFor(() => {

      expect(
        screen.getByRole('button')
      ).toBeInTheDocument()
    })
  })

  test('renders all product information correctly', async () => {

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Laptop',
          category: 'Elektronika',
          price: 100
        }
      ]
    })

    render(
      <Produkty onAddToCart={() => {}} />
    )

    await waitFor(() => {

      const productName = screen.getByText(/laptop/i)
      const category = screen.getByText(/elektronika/i)
      const button = screen.getByRole('button')

      expect(productName).toBeInTheDocument()
      expect(productName).toBeVisible()

      expect(category).toBeInTheDocument()
      expect(category).toBeVisible()

      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()

      expect(button).toHaveTextContent(/dodaj/i)

      expect(screen.getByText(/100/i)).toBeInTheDocument()
    })
  })

  test('shows loading state', () => {

    axios.get.mockImplementation(() => new Promise(() => {}))

    render(
      <Produkty onAddToCart={() => {}} />
    )

    expect(
      screen.getByText(/ładowanie produktów/i)
    ).toBeInTheDocument()
  })

  test('shows error message', async () => {

    axios.get.mockRejectedValue(new Error('API Error'))

    render(
      <Produkty onAddToCart={() => {}} />
    )

    await waitFor(() => {

      expect(
        screen.getByText(/nie udało się pobrać produktów/i)
      ).toBeInTheDocument()
    })
  })
})