const SERVICIO = 0.1;

export function agregarPlatillo(mesas, mesa, platillo, cantidad, precio){
    if (!mesas[mesa]) throw new Error(`La mesa ${mesa} no existe`);
    mesas[mesa].push({ platillo, cantidad, precio});
}

export function calcularTotal(mesas, mesa){
    const subtotal = mesas[mesa].reduce((suma, p) => suma + p.cantidad * p.precio, 0 )
    const servicio = Math.round(subtotal * SERVICIO);
    return { subtotal, servicio, total: subtotal + servicio}
}