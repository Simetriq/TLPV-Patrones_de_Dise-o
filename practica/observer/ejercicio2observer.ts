interface ObservadorInversor {
    actualizar(simbolo: string, precio: number, precioAnterior: number):void;
}

class Accion {
    simbolo: string;
    precio: number;
    private observadores: ObservadorInversor[] = [];

    constructor(simbolo: string, precio: number){
    this.simbolo = simbolo;
    this.precio = precio;
    }

    agregarObservador(observador: ObservadorInversor): void{
        this.observadores.push(observador);
    };

    quitarObservador(observador: ObservadorInversor):void{
        this.observadores = this.observadores.filter(obs => obs !== observador);
    };

    cambiarPrecio(nuevoPrecio: number): void{
        const precioAnterior = this.precio;
        this.precio = nuevoPrecio;
        this.notificar(precioAnterior);
    }

    private notificar(precioAnterior: number): void{
        this.observadores.forEach(obs => {
        obs.actualizar(this.simbolo, this.precio, precioAnterior);
    });
    }
}

class InversorConservador implements ObservadorInversor {
    actualizar(simbolo: string, precio: number, precioAnterior: number): void {
        if (precio < 100) {
            console.log(`Inversor Conservador: Comprando ${simbolo} a $${precio} (bajo $100)`);
        }
    }
}

class InversorAgresivo implements ObservadorInversor {
    actualizar(simbolo: string, precio: number, precioAnterior: number): void {
        const diferencia = precio - precioAnterior;
        if (diferencia > 10) {
            console.log(`Inversor Agresivo: Comprando ${simbolo} a $${precio} (subió más de $10)`);
        }
    }
}

class InversorNotificador implements ObservadorInversor {
    private registros: string[] = [];

    actualizar(simbolo: string, precio: number, precioAnterior: number): void {
        this.registros.push(`${simbolo} cambió de $${precioAnterior} a $${precio}`);
    }

    obtenerRegistros(): string[] {
        return this.registros;
    }
}

// Ejercicio Observer: Sistema de Bolsa de Valores
// Contexto: Una aplicación de bolsa de valores necesita notificar a diferentes inversores cuando el precio de una acción cambia. Cada inversor tiene una estrategia diferente de compra/venta.

// Requisitos:

// Define una interfaz ObservadorInversor que tenga un método para recibir actualizaciones.

// Crea una clase Accion (sujeto) que:

// Tenga propiedades: simbolo (ej: "AAPL"), precio

// Permita agregar y eliminar observadores

// Cuando el precio cambie, notifique a todos los observadores

// Crea 3 clases que implementen ObservadorInversor:

// InversorConservador - compra si el precio baja de $100

// InversorAgresivo - compra si el precio sube más de $10 de golpe

// InversorNotificador - solo registra todos los cambios en un array

// Ejemplo de uso esperado:

const accion = new Accion("AAPL", 95);
const conservador = new InversorConservador();
const agresivo = new InversorAgresivo();
const notificador = new InversorNotificador();

accion.agregarObservador(conservador);
accion.agregarObservador(agresivo);
accion.agregarObservador(notificador);

accion.cambiarPrecio(90);
// Inversor Conservador: Comprando AAPL a $90 (bajo $100)
// Registro: AAPL cambió de $95 a $90

accion.cambiarPrecio(105);
// Inversor Agresivo: Comprando AAPL a $105 (subió más de $10)
// Registro: AAPL cambió de $90 a $105

console.log(notificador.obtenerRegistros());
// [
//   "AAPL cambió de $95 a $90",
//   "AAPL cambió de $90 a $105"
// ]