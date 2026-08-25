interface equipo {
    nombre: string;
    tipo: string;
    estado: string;
}

class Inventario {
    private lista: equipo[] = [];
    private static instancia: Inventario;

    private constructor (){}

    static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string){
        const equipoArmado = {
    nombre: nombre,
    tipo: tipo,
    estado: estado
};
        return this.lista.push(equipoArmado)
    }

    listarEquipos(): equipo[] {
        return this.lista;
    }
}


// Objetivo: Implementar un patrón Singleton para gestionar un inventario de 
// equipos informáticos.

// Crear una clase Inventario que siga el patrón Singleton.
// Esta clase debe permitir registrar equipos con las propiedades nombre, 
// tipo y estado (Ej.: "disponible", "en reparación").

// Agregar un método agregarEquipo para añadir equipos y un método 
// listarEquipos para devolver la lista completa de equipos registrados.

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos()); 
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]