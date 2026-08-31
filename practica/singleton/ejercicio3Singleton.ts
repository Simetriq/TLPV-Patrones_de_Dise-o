class SesionUsuario {
    private nombreUsuario: string = "";
    private rol: "admin" | "usuario" | "invitado" = "invitado";
    private iniciada: boolean = false;
    private static instancia: SesionUsuario;

    private constructor(){}

    static obtenerInstancia(): SesionUsuario {
        SesionUsuario.instancia ??= new SesionUsuario()
        return SesionUsuario.instancia
    }
    iniciarSesion(nombre: string, rol:"admin" | "usuario" | "invitado"){
        this.nombreUsuario = nombre;
        this.rol = rol
        this.iniciada = true;
    }

    cerrarSesion(){
        this.iniciada = false;
        this.nombreUsuario = "";  
    }

    obtenerInformacion(){
        return { nombreUsuario: this.nombreUsuario, rol: this.rol, iniciada: this.iniciada };
    }
}



// Crea una clase SesionUsuario que siga el patrón Singleton.

// Debe tener propiedades privadas para:

// nombreUsuario (string)

// rol (string) - ej: "admin", "usuario", "invitado"

// iniciada (boolean)

// Debe tener métodos para:

// Iniciar sesión con nombre y rol

// Cerrar sesión

// Obtener información de la sesión actual

// Solo debe existir UNA instancia de SesionUsuario en toda la aplicación.

// Ejemplo de uso esperado:

const sesion1 = SesionUsuario.obtenerInstancia();
const sesion2 = SesionUsuario.obtenerInstancia();

sesion1.iniciarSesion("Ana", "admin");
console.log(sesion2.obtenerInformacion());
// { nombreUsuario: "Ana", rol: "admin", iniciada: true }

console.log(sesion1 === sesion2); // true

sesion2.cerrarSesion();
console.log(sesion1.obtenerInformacion());
// { nombreUsuario: "", rol: "", iniciada: false }