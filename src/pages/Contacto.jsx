import React, { useState } from 'react';
import capitalize from 'lodash/capitalize';

const Contacto = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState(''); // Nuevo estado para apellido
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const capitalizeFields = (name, lastName) => {
        return {
            name: capitalize(name),
            lastName: capitalize(lastName),
        };
    };

    // Validación para nombre
    const validateName = () => {
        if (name.trim() === '') {
            return capitalizeFields('El nombre es obligatorio');
        }
        return capitalizeFields('');
    };

    // Validación para apellido
    const validateLastName = () => {
        if (lastName.trim() === '') {
            return 'El apellido es obligatorio';
        }
        return '';
    };

    // Validación para email
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            return 'El correo electrónico es obligatorio';
        } else if (!emailRegex.test(email)) {
            return 'El correo electrónico no es válido';
        }
        return '';
    };

    // Validación para mensaje
    const validateMessage = () => {
        if (message.trim().length < 3) {
            return 'El mensaje es obligatorio';
        }
        return '';
    };

    // Limpia todos los campos y errores
    const handleClear = () => {
        setName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setErrors({});
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validateName();
        const lastNameError = validateLastName();
        const emailError = validateEmail();
        const messageError = validateMessage();

        if (nameError || lastNameError || emailError || messageError) {
            setErrors({
                name: nameError,
                lastName: lastNameError,
                email: emailError,
                message: messageError,
            });
        } else { 
            // Submit the form
            console.log('Formulario enviado', { name, lastName, email, message });
            setErrors({});
        }
    };

    return (
        <div>
            <h2 className="mb-3 mt-3">Contacto</h2>

            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                {/* Campo Apellido después de Nombre */}
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-success">Enviar Datos</button>
                <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={handleClear}
                >
                    Borrar Datos
                </button>
            </form>
        </div>
    );
};

export default Contacto;