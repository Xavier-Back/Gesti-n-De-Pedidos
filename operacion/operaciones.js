const SERVICIO = 0.1;

export function agregarPlatillo(mesas, mesa, platillo, cantidad, precio){
    if (!mesas[mesa]) throw new Error(`La mesa ${mesa} no existe`);
    mesas[mesa].push({ platillo, cantidad, precio});
}

