import AppConfig from './appConfig';

const BASE_URL = 'https://www.googleapis.com/drive/v3';

export const previewUrl = (fileId) => `https://drive.google.com/file/d/${fileId}/preview`;

export const downloadUrl = (fileId) => `${BASE_URL}/files/${fileId}?alt=media&key=${AppConfig.googleApiKey}`;

export async function findFileId(fileName, folderId) {
    const apiKey = AppConfig.googleApiKey;
    const q = encodeURIComponent(`'${folderId}' in parents and name='${fileName}' and trashed=false`);
    const url = `${BASE_URL}/files?q=${q}&key=${apiKey}&fields=files(id,name)`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Drive list error ${res.status}`);
    const json = await res.json();
    const files = json.files || [];
    return files.length ? files[0].id : null;
}

export async function listFilesInFolder(folderId, { apiKey } = {}) {
    apiKey = apiKey || AppConfig.googleApiKey;
    const q = encodeURIComponent(`'${folderId}' in parents and trashed=false and mimeType!='application/vnd.google-apps.folder'`);
    const url = `${BASE_URL}/files?q=${q}&key=${apiKey}&fields=files(id,name,mimeType,webViewLink,createdTime)`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Drive list error ${res.status}`);
    const json = await res.json();
    return (json.files || []).map((f) => ({ ...f }));
}
