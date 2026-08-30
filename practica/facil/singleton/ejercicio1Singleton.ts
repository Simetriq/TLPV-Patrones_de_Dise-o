
class Configuracion {
    private idioma: string = "";
    private tema: string = "";
    private static instancia: Configuracion

    private constructor(){}

    establecerIdioma(idioma: string): void {
         this.idioma = idioma
    }

    establecerTema(tema: string): void {
         this.tema = tema
    }

    obtenerConfiguracion(){
        return {idioma: this.idioma, tema: this.tema}
    }

    static obtenerInstancia(): Configuracion {

        if(!Configuracion.instancia){
            return Configuracion.instancia = new Configuracion
        }else{
            return Configuracion.instancia
        }
    }
}


// Problema: Sistema de Configuración

// Necesitas crear una clase Configuracion que siga el patrón Singleton. Esta clase debe:

// Tener una propiedad privada idioma (string)

// Tener una propiedad privada tema (string)

// Un método establecerIdioma(idioma: string)

// Un método establecerTema(tema: string)

// Un método obtenerConfiguracion() que devuelva un objeto con { idioma, tema }

// Requisitos:

// Solo debe existir UNA instancia de Configuracion

// Debe tener un método estático obtenerInstancia()

// El constructor debe ser privado

// Ejemplo de uso esperado:

const config1 = Configuracion.obtenerInstancia();
const config2 = Configuracion.obtenerInstancia();

config1.establecerIdioma("español");
config2.establecerTema("oscuro");

console.log(config1.obtenerConfiguracion());
// { idioma: "español", tema: "oscuro" }

console.log(config1 === config2); // true