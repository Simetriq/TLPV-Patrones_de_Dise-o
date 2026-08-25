class InventarioViejo {
    private items: string[] = [];

    agregarItem(nombre: string, tipo: string, estado: string): void {
        this.items.push(`${nombre}|${tipo}|${estado}`);
    }

    obtenerItems(): string[] {
        return this.items;
    }
}


interface Equipo {
    nombre: string;
    tipo: string;
    estado: string;
}


class AdaptadorInventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    listarEquipos(): Equipo[] {
        return this.inventarioViejo.obtenerItems().map(item => {
            const [nombre, tipo, estado] = item.split('|');
            return { nombre, tipo, estado };
        });
    }
}

// Uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]