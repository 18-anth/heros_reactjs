import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, updateProfile, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import firebaseApp, { database } from '../database/firebase';

const auth = getAuth(firebaseApp);

// Aseguramos persistencia de sesión en el navegador (localStorage)
setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.warn('No se pudo establecer persistencia de auth:', err);
});

export async function register({ email, password, displayName, adminSecret }) {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    if (displayName) await updateProfile(user, { displayName });

    const role = adminSecret && adminSecret === process.env.REACT_APP_ADMIN_SECRET ? 'ADMIN' : 'CLIENT';

    const userRecord = {
        email: user.email,
        displayName: displayName || user.displayName || '',
        role,
        createdAt: new Date().toISOString(),
    };

    try {
        await set(ref(database, `users/${user.uid}`), userRecord);
        console.debug('Usuario registrado y guardado en DB:', user.uid, userRecord);
    } catch (err) {
        console.error('Error guardando usuario en Realtime DB:', err);
        // Re-throw para que el caller sepa que algo falló
        throw err;
    }

    return { uid: user.uid, email: user.email, role };
}

export async function login({ email, password }) {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    const snap = await get(ref(database, `users/${user.uid}`));
    const data = snap.exists() ? snap.val() : {};
    return { uid: user.uid, email: user.email, role: data.role || 'CLIENT', displayName: user.displayName };
}

export async function logout() {
    await fbSignOut(auth);
}

export function onAuthChanged(cb) {
    return onAuthStateChanged(auth, async (user) => {
        try {
            if (!user) return cb(null);
            const snap = await get(ref(database, `users/${user.uid}`));
            const data = snap.exists() ? snap.val() : {};
            const payload = { uid: user.uid, email: user.email, displayName: user.displayName, role: data.role || 'CLIENT' };
            console.debug('onAuthChanged -> user payload:', payload);
            cb(payload);
        } catch (err) {
            console.error('onAuthChanged error:', err);
            // Fallback: still notify caller with basic user info when possible
            try {
                if (!user) return cb(null);
                cb({ uid: user.uid, email: user.email, displayName: user.displayName, role: 'CLIENT' });
            } catch (e) {
                cb(null);
            }
        }
    });
}

export function getCurrentUser() {
    return auth.currentUser;
}
