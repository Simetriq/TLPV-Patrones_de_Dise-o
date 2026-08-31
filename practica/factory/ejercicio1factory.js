"use strict";
class Cafe {
    tipo = "Cafe";
    tamaño = "";
    constructor(tipo, tamaño) {
        this.tipo = tipo;
        this.tamaño = tamaño;
    }
    describir() {
        return `${this.tipo} ${this.tamaño}`;
    }
}
class Te {
    tipo = "Te";
    tamaño = "";
    constructor(tipo, tamaño) {
        this.tipo = tipo;
        this.tamaño = tamaño;
    }
    describir() {
        return `${this.tipo} ${this.tamaño}`;
    }
}
class Jugo {
    tipo = "Jugo";
    tamaño = "";
    constructor(tipo, tamaño) {
        this.tipo = tipo;
        this.tamaño = tamaño;
    }
    describir() {
        return `${this.tipo} ${this.tamaño}`;
    }
}
class FabricaBebidas {
    crearBebida(tipo, tamaño) {
        switch (tipo) {
            case "Jugo":
                return new Jugo(tipo, tamaño);
                break;
            case "Te":
                return new Te(tipo, tamaño);
                break;
            case "Cafe":
                return new Cafe(tipo, tamaño);
                break;
            default:
                throw new Error("La bebida ingresada no la servimos");
        }
    }
}
const fabrica = new FabricaBebidas();
const cafe = fabrica.crearBebida("Cafe", "grande");
console.log(cafe.describir());
// "Café grande"
const te = fabrica.crearBebida("Te", "mediano");
console.log(te.describir());
// "Té mediano"
const jugo = fabrica.crearBebida("Jugo", "pequeño");
console.log(jugo.describir());
// "Jugo pequeño"
