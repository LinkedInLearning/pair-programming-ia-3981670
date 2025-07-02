import { render, screen, fireEvent } from '@testing-library/react';
import Contacto from './Contacto';
import { describe, it, expect } from 'vitest';

describe('Contacto Component', () => {
    it('renders the form', () => {
        render(<Contacto />);
        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico:')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje:')).toBeInTheDocument();
        expect(screen.getByText('Enviar Datos')).toBeInTheDocument();
    });

    it('updates the name state on input change', () => {
        render(<Contacto />);
        const nameInput = screen.getByLabelText('Nombre:');
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        expect(nameInput.value).toBe('Test Name');
    });

});