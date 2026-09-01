interface Observador {
    actualizar(datos: number): void;
}

class EstacionClima {
    temperatura: number;
    private observadores: Observador[] = [];

    constructor(){
        this.temperatura = 0;
    };

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    };

    cambiarTemperatura(nuevaTemperatura: number): void{
        this.temperatura = nuevaTemperatura;
        this.notificar();
    };

    private notificar():void{
        this.observadores.forEach(obs => {
            obs.actualizar(this.temperatura)
        });
    };
}

class PantallaActual implements Observador {
    actualizar(datos: number): void {
        console.log(`Pantalla: La temperatura actual es ${temperatura}°C`)
    }
}

class AlertaTemperatura implements Observador {
    actualizar(temperatura: number): void {
        if (temperatura > 30) {
            console.log(`⚠️ ALERTA: Temperatura muy alta (${temperatura}°C)`);
        }
    }
}


// Ejercicio Observer: Sistema de Clima
// Contexto: Una estación meteorológica registra la temperatura y debe avisar a diferentes dispositivos cuando la temperatura cambia.

// Requisitos:

// Define una interfaz Observador que tenga el método para recibir actualizaciones.

// Crea una clase EstacionClima (sujeto) que:

// Tenga una propiedad temperatura

// Permita agregar observadores

// Cuando la temperatura cambie, notifique a todos los observadores

// Crea 2 clases que implementen Observador:

// PantallaActual - muestra la temperatura actual

// AlertaTemperatura - muestra una alerta si la temperatura es muy alta (>30°C)

// Ejemplo de uso esperado:

const estacion = new EstacionClima();
const pantalla = new PantallaActual();
const alerta = new AlertaTemperatura();

estacion.agregarObservador(pantalla);
estacion.agregarObservador(alerta);

estacion.cambiarTemperatura(25);
// Pantalla: La temperatura actual es 25°C

estacion.cambiarTemperatura(35);
// Pantalla: La temperatura actual es 35°C
// ⚠️ ALERTA: Temperatura muy alta (35°C)