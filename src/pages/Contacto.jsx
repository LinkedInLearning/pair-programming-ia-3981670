import { useState } from 'react';

const Contacto = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateName = () => {
        if (name.trim() === '') {
            return 'El nombre es obligatorio';
        }
        return '';
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            return 'El correo electrónico es obligatorio';
        } else if (!emailRegex.test(email)) {
            return 'El correo electrónico no es válido';
        }
        return '';
    };


    const validateMessage = () => {
        if (message.trim().length < 3) {
            return 'El mensaje es obligatorio';
        }
        return '';
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validateName();
        const emailError = validateEmail();
        const messageError = validateMessage();

        if (nameError || emailError || messageError) {
            setErrors({
                name: nameError,
                email: emailError,
                message: messageError,
            });
        } else {
            // Submit the form
            console.log('Formulario enviado', { name, email, message });
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