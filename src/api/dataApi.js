// Murcia data API fetching
const HOTELS_API_URL = 'https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json';

export const getData = async () => {
    console.log('Fetching data from API...');

    const res = await fetch(HOTELS_API_URL);
    if (!res.ok) {
        throw new Error(`API ERROR: Hotels request failed with status ${res.status}`);
    }
    return res.json();
}
