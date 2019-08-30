class factura extends Comprobante {
    factura_igv_porcentaje = 0;
    factura_igv_total = 0;
    constructor(comprobante_id, comprobante_fecha, factura_igv_porcentaje){
        super(comprobante_id, comprobante_fecha);
        this.factura_igv_porcentaje = factura_igv_porcentaje
    }
    recalculo(){
        let total = 0;
        for(let i = 0; i < this.comprobante_detalle.length; i++){
            let cantidad = this.comprobante_detalle[i].cantidad;
            let precio_unt = this.comprobante_detalle[i].precio_unt
            total += this.calcularSubTotal(cantidad, precio_unt);
        }
        this.factura_igv_total = total * this.factura_igv_porcentaje / 100;
        this.comprobante_total = total;
    }
}