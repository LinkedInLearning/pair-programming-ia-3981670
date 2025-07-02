import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../pages/Home'

describe('Home', () => {
  it('Muestra el mensaje de bienvenida', () => {
    render(<Home />)
    expect(screen.getByText('Bienvenido a Viajes Odisea IA')).toBeInTheDocument()
    expect(screen.getByText('¡Descubre destinos increíbles y planifica tu viaje perfecto con nosotros!')).toBeInTheDocument()
  })

  it('muestra las cartas de destinos', () => {
    render(<Home />)
    expect(screen.getByText('Destinos de Playa')).toBeInTheDocument()
    expect(screen.getByText('Aventuras en la Montaña')).toBeInTheDocument()
    expect(screen.getByText('Tours por la Ciudad')).toBeInTheDocument()
  })
}) 