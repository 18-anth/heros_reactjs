// Configuración de ejemplo. Rellena con tus valores reales o usa variables de entorno.
const AppConfig = {
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '<TU_GOOGLE_CLIENT_ID>',
    googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '<TU_GOOGLE_API_KEY>',
    // Carpetas raíz en Drive para distintos tipos
    googleDriveProjectsWebFolderId:
        process.env.REACT_APP_DRIVE_PROJECTS_WEB_FOLDER_ID || '<WEB_FOLDER_ID>',
};

export default AppConfig;
