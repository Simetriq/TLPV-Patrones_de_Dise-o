class PoolConexionesDB {

    private static instancia: PoolConexionesDB;

    private constructor(){}

    static obtenerInstancia(): PoolConexionesDB {
        if(!PoolConexionesDB.instancia){
            PoolConexionesDB.instancia = new PoolConexionesDB();
        }
        return PoolConexionesDB.instancia;
    }

    conectar(): string {
        return "Conectado a PostgreSQL";
    }
}

// Ejercicio 2: Patrón Singleton (Creacional)
// Contexto:
// En un entorno de desarrollo contenerizado (usando Docker), tienes un servicio que gestiona el pool de conexiones a una base de datos PostgreSQL. 
// Si cada parte del backend (autenticación, productos, ventas) hace un new PoolConexionesDB(), se crearán múltiples pools distintos. 
// Esto saturará el límite de clientes de la base de datos y hará que colapse. Debes garantizar que, sin importar cuántas veces se solicite, toda la aplicación 
// comparta exactamente la misma instancia del pool.

// Requisitos (TODO):

// Crea la clase PoolConexionesDB.

// Bloquea la posibilidad de instanciarla desde afuera usando el modificador adecuado en el constructor.

// Crea una propiedad estática y privada que almacene la única instancia de la clase.

// Crea un método estático obtenerInstancia() que verifique: si la instancia ya existe, la retorna; si no, la crea y luego la retorna.

// Añade un método conectar() que simplemente retorne "Conectado a PostgreSQL".

// TypeScript
//? Ejemplo de uso esperado:

const poolVentas = PoolConexionesDB.obtenerInstancia();
const poolAuth = PoolConexionesDB.obtenerInstancia();

console.log(poolVentas === poolAuth); // true (¡Ambos son la misma instancia en memoria!)
