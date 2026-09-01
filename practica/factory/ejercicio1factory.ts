interface Bebida {
    tipo: string;
    tamaño: string;

    describir(): string;
}


class Cafe implements Bebida {
    tipo: string = "Cafe";
    tamaño: string = "";

    constructor(tipo: string, tamaño: string){
        this.tipo = tipo;
        this.tamaño = tamaño;
    }

    describir(): string {
        return `${this.tipo} ${this.tamaño}`
    }
}

class Te implements Bebida {
    tipo: string = "Te";
    tamaño: string = "";

    constructor(tipo: string, tamaño: string){
        this.tipo = tipo;
        this.tamaño = tamaño;
    }

    describir(): string {
        return `${this.tipo} ${this.tamaño}`
    }
}

class Jugo implements Bebida {
    tipo: string = "Jugo";
    tamaño: string = "";

    constructor(tipo: string, tamaño: string){
        this.tipo = tipo;
        this.tamaño = tamaño;
    }

    describir(): string {
        return `${this.tipo} ${this.tamaño}`
    }
}

class FabricaBebidas {
    
    crearBebida(tipo: "Jugo"| "Te" | "Cafe", tamaño: "grande" | "mediano" | "pequeño"){
        switch(tipo){ 

            case "Jugo":
                return new Jugo(tipo, tamaño);
                break;
            
            case "Te":
                return new Te(tipo,tamaño);
                break;
            
            case "Cafe":
                return new Cafe(tipo, tamaño);
                break;
            default:
                throw new Error("La bebida ingresada no la servimos")
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