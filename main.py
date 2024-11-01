datos = [5,2,3,1,4,5,5,5,5,5,5,6,4,3,2,4,1,1,4,4,5,7,8,9,-4,9,0,0,3,1,4,5,6,7,56,56,4,3,2,1,1,2,4,5,6,7,8,9,0,6,7,11,12,13,14,15,16,17,18]

def ArregloOrdenado(datos):
    if any(datos):
        # Verifica que todos los datos de la lista sean iguales
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
    while True:
        mitad = (min + max) // 2
        print(datos[min:max])
        if numero == datos[mitad]:
            print("El numero esta en la posicion",mitad)
            return
        if mitad == 0:
            print("El numero",numero,"no esta en la lista")
            return
        if datos[mitad] > numero:
            max = mitad-1
        else:
            min = mitad+1

BusquedaBinaria(datos,56)