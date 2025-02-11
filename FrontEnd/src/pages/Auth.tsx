import React, { useState } from 'react';
import { z } from 'zod';
import '../styles/Auth.css';
import Navbar from '../components/Navbar';

const schema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).optional(),
});

type FormData = z.infer<typeof schema>;

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<FormData>({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const validData = schema.parse(formData);
        console.log(isLogin ? 'Login' : 'Registro', validData);
        // Aquí iría la lógica de autenticación/registro
        } catch (error) {
        if (error instanceof z.ZodError) {
            setErrors(error.flatten().fieldErrors as Partial<FormData>);
        }
        }
    };

    return (
        <div >
            <Navbar/>
            <div className="auth-form-container">
                <h2 className="auth-title">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="auth-input"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                )}
                <div className="form-group">
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    className="auth-input"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="auth-input"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit" className="auth-button">
                    {isLogin ? 'Iniciar sesión' : 'Registrarse'}
                </button>
                </form>
                <p className="auth-switch">
                {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                <button onClick={() => setIsLogin(!isLogin)} className="auth-switch-button">
                    {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
