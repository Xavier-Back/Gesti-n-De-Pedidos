import { mesas } from "../Datos/datos.js";
import { agregarPlatillo, calcularTotal } from "../operacion/operaciones.js";

const pesos = (n) => `$${n.toLocaleString('es-CO')}`;

function mostrarPedido(titulo){
    console.log(`\n--- ${titulo} ---`)
    for (const numero in mesas){
        console.log(`\nMesa ${numero}:`);
        console.table(mesas[numero])
    }

}


function imprimirRecibo(mesa){
    const { subtotal, servicio, total} = calcularTotal(mesas, mesa)

    console.log(`\n--- RECIBO - MESA ${mesa} ---`)
    for (const p of mesas[mesa]){
        console.log(`${p.platillo}: ${p.cantidad} x ${pesos(p.precio)} = ${pesos(p.cantidad * p.precio)}`)
    }
}