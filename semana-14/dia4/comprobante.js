// function Auto(placa, color, marca) {
//     this.placa = placa,
//     this.color = color,
//     this.marca = marca
// }

// var camioneta = new Auto("EH-4323", "Rojo", "Hynduai");
// Auto.prototype.resumen = function(){
//     console.log("este auto")
// }
class Comprobante{
    comprobante_id = 0;
    comprobante_fecha = new Date();
    comprobante_total = 0;
    comprobante_detalle = [];
    constructor(comprobante_id, comprobante_fecha){
        this.comprobante_id = comprobante_id;
        this.comprobante_fecha = comprobante_fecha
    }
    anadirDetalle(objProducto){
        this.comprobante_detalle.push(objProducto);
    }
    mostraFechaComprobante(){
        console.log(this.comprobante_fecha)
    }
    calcularSubTotal(cantidad, prec_unit){
        return cantidad * prec_unit;
    }
}