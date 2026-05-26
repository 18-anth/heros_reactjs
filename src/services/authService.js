import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import firebaseApp, { database } from '../database/firebase';

const auth = getAuth(firebaseApp);

export async function register({ email, password, displayName, adminSecret }) {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    if (displayName) await updateProfile(user, { displayName });

    const role = adminSecret && adminSecret === process.env.REACT_APP_ADMIN_SECRET ? 'ADMIN' : 'CLIENT';

    await set(ref(database, `users/${user.uid}`), {
        email: user.email,
        displayName: displayName || user.displayName || '',
        role,
        createdAt: new Date().toISOString(),
    });

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
        if (!user) return cb(null);
        const snap = await get(ref(database, `users/${user.uid}`));
        const data = snap.exists() ? snap.val() : {};
        cb({ uid: user.uid, email: user.email, displayName: user.displayName, role: data.role || 'CLIENT' });
    });
}

export function getCurrentUser() {
    return auth.currentUser;
}
