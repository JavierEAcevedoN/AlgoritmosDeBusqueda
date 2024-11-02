datos = list(range(-2000, 2002))

def ArregloOrdenado(datos):
    if any(datos):
        # Verifica que todos los datos de la lista sean numeros
        for i in datos:
            if type(i) != type(0):
                return False

        # Ordena la lista de datos
        while True:
            cambios = 0
            for i in range(len(datos)-1):
                if datos[i] > datos[i+1]:
                    datos[i], datos[i+1] = datos[i+1], datos[i]
                    cambios += 1
            if cambios == 0:
                break

        return datos
    else:
        return False

def BusquedaBinaria(datos,numero):
    if not ArregloOrdenado(datos):
        return
    min = 0
    max = len(datos)-1
    mitad = -1
    while True:
        mitad = (min + max) // 2
        print(datos[min:max])
        if numero == datos[mitad]:
            print("El numero esta en la posicion",mitad)
            return
        if min >= max:
            print("El numero",numero,"no esta en la lista")
            return
        if datos[mitad] > numero:
            max = mitad - 1
        else:
            min = mitad + 1

def BusquedaInterpolacion(datos,numero):
    if not ArregloOrdenado(datos):
        return
    min = 0
    max = len(datos)-1
    mitad = -1
    while True:
        mitad = min + int((numero - datos[min]) * (max - min) / (datos[max] - datos[min]))
        print(datos[min:max])
        if min >= max or mitad >= max:
            print("El numero",numero,"no esta en la lista")
            return
        if numero == datos[mitad]:
            print("El numero esta en la posicion",mitad)
            return
        if datos[mitad] > numero:
            max = mitad - 1
        else:
            min = mitad + 1

BusquedaBinaria(datos,422)
BusquedaInterpolacion(datos, 422)