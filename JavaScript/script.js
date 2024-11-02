let datos = [];
for (let i = -2000; i < 2001; i++) {
    datos.push(i);
}

const PDatos = document.getElementById("datos");
const DivBusquedaBinaria = document.getElementById("busqueda_binaria");
const DivBusquedaInterpolacion = document.getElementById(
    "busqueda_interpolacion"
);

const ArregloOrdenado = (datos) => {
    if (datos != []) {
        // Verifica que todos los datos de la lista sean numeros
        if (datos.some((i) => i !== Number(i))) {
            return "hay un dato que no es un numero";
        }

        // Ordena la lista de datos
        while (true) {
            let cambios = 0;
            for (let i = 0; i < datos.length - 1; i++) {
                if (datos[i] > datos[i + 1]) {
                    let temp = datos[i];
                    datos[i] = datos[i + 1];
                    datos[i + 1] = temp;
                    cambios += 1;
                }
            }
            if (cambios === 0) {
                break;
            }
        }
        return datos;
    } else {
        return false;
    }
};

PDatos.innerText = datos.join(", ");

const BusquedaBinaria = (datos, numero) => {
    DivBusquedaBinaria.innerHTML += `
        <h3>Busqueda Binaria</h3>
    `;
    if (!ArregloOrdenado(datos)) {
        return "Array no valido";
    }
    let min = 0;
    let max = datos.length - 1;
    let mitad = -1;
    while (true) {
        let mitad = Number(((min + max) / 2).toFixed(0));
        DivBusquedaBinaria.innerHTML += `
        <p>${datos.slice(min, max + 1).join(", ")}</p>
        `;
        if (numero == datos[mitad]) {
            DivBusquedaBinaria.innerHTML += `
            <p>El numero esta en la posicion, ${mitad}</p>
            `;
            return;
        }
        if (min >= max) {
            DivBusquedaBinaria.innerHTML += `
            <p>El numero ${numero} no esta en la lista</p>
            `;
            return;
        }
        if (datos[mitad] > numero) {
            max = mitad - 1;
        } else {
            min = mitad + 1;
        }
    }
};

const BusquedaInterpolacion = (datos, numero) => {
    DivBusquedaInterpolacion.innerHTML = `
        <h3>Busqueda por Interpolacion</h3>
    `;
    if (!ArregloOrdenado(datos)) {
        return;
    }
    let min = 0;
    let max = datos.length - 1;
    let mitad = -1;
    while (true) {
        let mitad = Number(
            min +
                (
                    ((numero - datos[min]) * (max - min)) /
                    (datos[max] - datos[min])
                ).toFixed(0)
        );
        DivBusquedaInterpolacion.innerHTML += `
        <p>${datos.slice(min, max + 1).join(", ")}</p>
        `;
        if (min >= max || mitad >= max) {
            DivBusquedaInterpolacion.innerHTML += `
            <p>El numero ${numero} no esta en la lista</p>
            `;
            return;
        }
        if (numero == datos[mitad]) {
            DivBusquedaInterpolacion.innerHTML += `
            <p>El numero esta en la posicion, ${mitad}</p>
            `;
            return;
        }
        if (datos[mitad] > numero) {
            max = mitad - 1;
        } else {
            min = mitad + 1;
        }
    }
};

BusquedaBinaria(datos, 422);
BusquedaInterpolacion(datos, 422);