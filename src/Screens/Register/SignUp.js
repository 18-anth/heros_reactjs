import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import AuthForm from '../../components/AuthForm';
import { getCurrentUser } from '../../services/authService';

function SignUp() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container_galery">
                <AuthForm onAuth={async (user) => {
                    console.log('Autenticado', user);
                    // Esperamos hasta que Firebase actualice `auth.currentUser`.
                    const waitForCurrentUser = async (timeout = 3000) => {
                        const start = Date.now();
                        while (Date.now() - start < timeout) {
                            const u = getCurrentUser();
                            if (u) return u;
                            // espera 200ms
                            // eslint-disable-next-line no-await-in-loop
                            await new Promise((r) => setTimeout(r, 200));
                        }
                        return null;
                    };

                    await waitForCurrentUser(3000);
                    navigate('/');
                    // Si por alguna razón la UI no refleja la sesión, recargamos
                    // para forzar que `Navbar` se suscriba y lea el estado.
                    setTimeout(() => {
                        const u = getCurrentUser();
                        if (!u) window.location.reload();
                    }, 500);
                }} />
            </div>
        </>
    );
}

export default SignUp;
