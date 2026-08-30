interface datosPago {
    monto: number;
    nombre: string;
    fecha: string;
}

interface Pago {
    procesoPago(): string;
}

class PagoPaypal implements Pago{
    procesoPago(){
        return "Se realizo el pago por PayPal"
    }
}


class PagoStripe implements Pago{
    procesoPago(){
        return "Se realizo el pago por Stripe"
    }
}

class Singleton {

    pagos: datosPago[] = [];
    private static instancia: Singleton;

    private constructor(){}

    static instanciar(): Singleton {
        Singleton.instancia ??= new Singleton();
        return Singleton.instancia
    }

    agregarPagos(pago: datosPago[]): void {
        this.pagos.push(...pago)
    }

    listarPagos(){
        return this.pagos
    }

    totalProcesado(){
        return this.pagos.reduce((total, pago) => total + pago.monto, 0) 
    }
}



// Contexto: Una tienda online necesita procesar pagos con diferentes proveedores. Todos los pagos deben tener la misma estructura, y el sistema que registra los pagos debe ser único (Singleton).

// Requisitos:

// Define una interfaz para los datos de un pago (piensa qué información debe tener un pago).

// Define una interfaz que establezca el contrato para procesar pagos.

// Crea dos clases que procesen pagos de manera diferente (por ejemplo, PayPal y Stripe).

// Crea una clase singleton que registre todos los pagos del sistema.

// El registro debe permitir:

// Agregar pagos

// Listar todos los pagos

// Calcular el total procesado

const registro = RegistroPagos.obtenerInstancia();
const paypal = new PayPal();
const stripe = new Stripe();

// Crear pagos y procesarlos con diferentes proveedores
// Registrar los pagos en el sistema
// Listar pagos y mostrar total