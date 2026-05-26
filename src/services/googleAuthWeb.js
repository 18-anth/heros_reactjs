// Servicio de autenticación con Google Identity Services (web)
// Uso: await requestAccessToken(); luego getToken() para obtener el Bearer token
let _accessToken = null;
let _isInitialized = false;

function _checkIfGoogleLoaded() {
    try {
        return (
            window.google && window.google.accounts && window.google.accounts.oauth2
        );
    } catch (e) {
        return false;
    }
}

function _loadGoogleIdentityServices() {
    if (_checkIfGoogleLoaded()) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Error loading GIS script'));
        document.head.appendChild(script);
    });
}

export async function requestAccessToken({ client_id, scope = 'https://www.googleapis.com/auth/drive.file' }) {
    if (typeof window === 'undefined') throw new Error('Only for web');

    await _loadGoogleIdentityServices();

    return new Promise((resolve, reject) => {
        try {
            // Callback global temporal
            window.__gis_callback = (response) => {
                if (response && response.error) return reject(new Error(response.error));
                if (response && response.access_token) {
                    _accessToken = response.access_token;
                    _isInitialized = true;
                    resolve(_accessToken);
                } else {
                    reject(new Error('No token received'));
                }
            };

            const tokenClient = window.google.accounts.oauth2.initTokenClient({
                client_id,
                scope,
                callback: (tokenResponse) => window.__gis_callback(tokenResponse),
            });

            // Prompt '' intenta reutilizar la sesión si ya existe la autorización
            tokenClient.requestAccessToken({ prompt: '' });
        } catch (e) {
            reject(e);
        }
    });
}

export function getToken() {
    if (_accessToken) return Promise.resolve(_accessToken);
    return Promise.reject(new Error('No token. Call requestAccessToken first'));
}

export function isAuthenticated() {
    return !!_accessToken && _isInitialized;
}

export function clearToken() {
    _accessToken = null;
    _isInitialized = false;
}
