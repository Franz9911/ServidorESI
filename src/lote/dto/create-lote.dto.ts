export class CreateLoteDto {
    readonly unidades: number; 
    readonly costoLote: number;
    readonly unidadesDispo:number;  
    readonly precioVentaLoteSugerido:number;
    //idProducto
    readonly producto:number;
    readonly idCompra:number;
}
