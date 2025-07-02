import { render, screen } from '@testing-library/react'
import Nosotros from './Nosotros'

describe('Nosotros 🧪', () => {
    // Verifica que el componente renderiza el título correctamente 🧪
    it('debe mostrar el título "Sobre Nosotros" 🧪', () => {
        render(<Nosotros />)
        expect(screen.getByText('Sobre Nosotros')).toBeInTheDocument()
    })
})
// Verifica que el componente contiene un elemento h1 🧪
it('debe contener un elemento h1 en el DOM 🧪', () => {
  render(<Nosotros />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

// Verifica que el texto del elemento h1 sea exactamente "Sobre Nosotros" 🧪
it('debe tener el texto exacto "Sobre Nosotros" en el elemento h1 🧪', () => {
  render(<Nosotros />)
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toHaveTextContent('Sobre Nosotros')
})