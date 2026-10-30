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
