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
    it('validates email correctly', () => {
        render(<Contacto />);
        const emailInput = screen.getByLabelText('Correo Electrónico:');
        const submitButton = screen.getByText('Enviar Datos');

        // Test empty email
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('El correo electrónico es obligatorio')).toBeInTheDocument();

        // Test invalid email
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('El correo electrónico no es válido')).toBeInTheDocument();

        // Test valid email
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.click(submitButton);
        expect(screen.queryByText('El correo electrónico es obligatorio')).not.toBeInTheDocument();
        expect(screen.queryByText('El correo electrónico no es válido')).not.toBeInTheDocument();
    });
});
describe('Contacto Component - Borrar Datos', () => {
    it('renders the "Borrar Datos" button', () => {
        render(<Contacto />);
        expect(screen.getByText('Borrar Datos')).toBeInTheDocument();
    });

    it('clears all fields when "Borrar Datos" is clicked', () => {
        render(<Contacto />);
        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Correo Electrónico:');
        const messageInput = screen.getByLabelText('Mensaje:');
        const clearButton = screen.getByText('Borrar Datos');

        fireEvent.change(nameInput, { target: { value: 'Juan' } });
        fireEvent.change(emailInput, { target: { value: 'juan@test.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hola' } });

        fireEvent.click(clearButton);

        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });

    it('clears error messages when "Borrar Datos" is clicked', () => {
        render(<Contacto />);
        const submitButton = screen.getByText('Enviar Datos');
        fireEvent.click(submitButton);

        expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument();
        expect(screen.getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
        expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();

        const clearButton = screen.getByText('Borrar Datos');
        fireEvent.click(clearButton);

        expect(screen.queryByText('El nombre es obligatorio')).not.toBeInTheDocument();
        expect(screen.queryByText('El correo electrónico es obligatorio')).not.toBeInTheDocument();
        expect(screen.queryByText('El mensaje es obligatorio')).not.toBeInTheDocument();
    });
    it('shows error if mensaje is empty on submit', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: '' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
    });

    it('shows error if mensaje is less than 3 characters', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hi' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
    });

    it('does not show error if mensaje is 3 or more characters', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hola' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.queryByText('El mensaje es obligatorio')).not.toBeInTheDocument();
    });

    it('shows error if mensaje is empty on submit', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: '' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
    });

    it('shows error if mensaje is less than 3 characters', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hi' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
    });

    it('does not show error if mensaje is 3 or more characters', () => {
        render(<Contacto />);
        fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Carlos' } });
        fireEvent.change(screen.getByLabelText('Correo Electrónico:'), { target: { value: 'carlos@mail.com' } });
        fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Hola' } });
        fireEvent.click(screen.getByText('Enviar Datos'));
        expect(screen.queryByText('El mensaje es obligatorio')).not.toBeInTheDocument();
    });

    it('clears the form fields when "Borrar Datos" is clicked', () => {
        render(<Contacto />);
        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Correo Electrónico:');
        const messageInput = screen.getByLabelText('Mensaje:');
        const borrarBtn = screen.getByText('Borrar Datos');

        // Fill the form
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
        fireEvent.change(messageInput, { target: { value: 'Mensaje de prueba' } });

        // Click the clear button
        fireEvent.click(borrarBtn);

        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });

});