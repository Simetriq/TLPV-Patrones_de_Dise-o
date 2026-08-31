interface Actividad {
    usuario: string;
    accion: string; 
    fecha: string; 
}

class RegistroActividades {

    private static instancia: RegistroActividades;
    private actividades: Actividad [] = [];
    
    private constructor(){}

    static obtenerInstancia(){
        RegistroActividades.instancia ??= new RegistroActividades();
        return RegistroActividades.instancia;
    };

    registrarActividad(usuario: string, accion: string, fecha: string): void {
        this.actividades.push({usuario, accion, fecha})
    };

    obtenerActividades(){
        return this.actividades;
    };

    obtenerActividadesPorUsuario(usuario: string){
        return this.actividades.filter(act => act.usuario === usuario);
    };

    contarActividades(){
        return this.actividades.length
    }
};




//  Ejercicio Singleton: Registro de Actividades (Logger)
// Contexto: Una aplicación necesita registrar todas las actividades que realizan los usuarios. Este registro debe ser único en todo el sistema.

// Requisitos:

// Crea una clase RegistroActividades que siga el patrón Singleton.

// Debe tener una propiedad privada para guardar las actividades (piensa en qué tipo de estructura usar).

// Debe tener métodos para:

// Registrar una nueva actividad (con usuario, acción y fecha)

// Obtener todas las actividades

// Obtener actividades por usuario específico

// Contar el total de actividades registradas

// Ejemplo de uso esperado:

const registro1 = RegistroActividades.obtenerInstancia();
const registro2 = RegistroActividades.obtenerInstancia();

registro1.registrarActividad("Ana", "inicio_sesion", "2024-01-15");
registro2.registrarActividad("Luis", "comprar_producto", "2024-01-15");
registro1.registrarActividad("Ana", "cerrar_sesion", "2024-01-15");

console.log(registro2.obtenerActividades());
// [
//   { usuario: "Ana", accion: "inicio_sesion", fecha: "2024-01-15" },
//   { usuario: "Luis", accion: "comprar_producto", fecha: "2024-01-15" },
//   { usuario: "Ana", accion: "cerrar_sesion", fecha: "2024-01-15" }
// ]

console.log(registro1.obtenerActividadesPorUsuario("Ana"));
// [
//   { usuario: "Ana", accion: "inicio_sesion", fecha: "2024-01-15" },
//   { usuario: "Ana", accion: "cerrar_sesion", fecha: "2024-01-15" }
// ]

console.log(registro2.contarActividades()); // 3
console.log(registro1 === registro2); // true