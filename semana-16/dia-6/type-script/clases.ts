interface iProducto {
    codigo: number;
    nombre: string;
    inventario: number;
    
    sumarInventario(cantidad: number):number;
}
//clase productos use interface
class Producto implements iProducto{
    public codigo:number;
    public nombre:string;
    public inventario:number;
    private id:string = "qwerty123";
    private formulaSecreta:string = "la formula x";

    constructor(codigo:number, nombre:string, inventario:number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }

    get Id():string{
        return this.id
    }
    get Formula():string{
        return this.formulaSecreta
    }
    sumarInventario(cantidad:number):number {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}

let mouse:Producto = new Producto(1234, "Mouse Logitech", 20);
console.log(mouse.codigo);
console.log(mouse.Formula);
console.log(mouse.Id);

let inventarioFinal:number = mouse.sumarInventario(30);
console.log(inventarioFinal);

console.log(mouse.Id);