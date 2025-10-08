const dataType = {
    hotels: 'https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Hoteles.json',
    restaurants: 'https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Restaurantes.json'
}

export const getData = async (type) =>{
    console.log('Type: ', type)
    /// Wrong type
    if (!dataType[type]) throw new Error(`Type: ${type} not a valid type`);

    const res = await fetch(dataType[type]);

    if (!res.ok){
        throw new Error(`API ERROR: ${type} Res not OK.`)
    }
    return res.json();
}
