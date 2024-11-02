let datos = [];
for (let i = -2000; i < 2001; i++) {
    datos.push(i)
}
console.log(datos);

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

const BusquedaBinaria = (datos, numero) => {
    if (!ArregloOrdenado(datos)) {
        return;
    }
    let min = 0;
    let max = datos.length - 1;
    let mitad = -1;
    while (true) {
        let mitad = Number(((min + max) / 2).toFixed(0));
        console.log(datos.slice(min, max + 1));
        if (numero == datos[mitad]) {
            console.log("El numero esta en la posicion", mitad);
            return;
        }
        if (min >= max) {
            console.log(`El numero ${numero} no esta en la lista`);
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
        console.log(datos.slice(min, max + 1));
        if (min >= max || mitad >= max) {
            console.log(`El numero ${numero} no esta en la lista`);
            return;
        }
        if (numero == datos[mitad]) {
            console.log("El numero esta en la posicion", mitad);
            return;
        }
        if (datos[mitad] > numero) {
            max = mitad - 1;
        } else {
            min = mitad + 1;
        }
    }
};
BusquedaBinaria(datos,422)
BusquedaInterpolacion(datos, 422)