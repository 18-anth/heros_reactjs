import React, { useState } from 'react';
import { register, login } from '../services/authService';
import './AuthForm.css';

export default function AuthForm({ onAuth }) {
    const [mode, setMode] = useState('login'); // login | register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adminSecret, setAdminSecret] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            if (mode === 'login') {
                const user = await login({ email, password });
                onAuth && onAuth(user);
            } else {
                const user = await register({ email, password, displayName: name, adminSecret });
                onAuth && onAuth(user);
            }
        } catch (err) {
            setError(err.message || String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="authwrap">
            <div className="authcard">
                <div className="authheader">
                    <h2>{mode === 'login' ? 'Bienvenido' : 'Crea tu cuenta'}</h2>
                    <p className="subtitle">Accede o regístrate para interactuar con la comunidad</p>
                </div>

                <form className="authform" onSubmit={submit}>
                    {mode === 'register' && (
                        <label className="field">
                            <span>Nombre</span>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
                        </label>
                    )}

                    <label className="field">
                        <span>Email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" type="email" />
                    </label>

                    <label className="field">
                        <span>Contraseña</span>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" type="password" />
                    </label>

                    {mode === 'register' && (
                        <label className="field">
                            <span>Admin secret (opcional)</span>
                            <input value={adminSecret} onChange={(e) => setAdminSecret(e.target.value)} placeholder="Secreto de administrador" />
                        </label>
                    )}

                    {error && <div className="error">{error}</div>}

                    <div className="actions">
                        <button className="primary" type="submit" disabled={loading}>{loading ? 'Procesando...' : (mode === 'login' ? 'Entrar' : 'Registrarse')}</button>
                        <button type="button" className="ghost" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Crear cuenta' : 'Volver a iniciar sesión'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
