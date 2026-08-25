interface Equipo {
    nombre: string;
    ram: string;
    procesador: string;
}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string){
        switch(tipo) {
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo inválido");
        }
    }
}

class Notebook implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Equipo {
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

// Objetivo: Implementar el patrón Factory Method para centralizar la creación de distintos tipos de equipos informáticos.

// Crear una fábrica llamada EquipoFactory.
// La fábrica debe tener un método crearEquipo.
// El método debe recibir el tipo de equipo que se desea crear: "Notebook", "Desktop" o "Servidor".
// Según el tipo recibido, debe crear y devolver el objeto correspondiente.
// Crear una clase específica para cada tipo de equipo:
// Notebook
// Desktop
// Servidor
// Cada clase debe tener propiedades propias, como ram, procesador u otras características relevantes.
// Probar la fábrica creando al menos un equipo de cada tipo.


const factory = new EquipoFactory();
const Notebook1 = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook1.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7