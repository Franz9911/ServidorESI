export class SearchCompraDto {
     id:number;
    readonly fechaRecepcion:Date;
    //readonly fecha

    readonly estado:string 
    //{rec:recepcionado,esp:espera: can:cancelado}
    readonly metodoPago:string; 
    //{efec: efectivo,banc:banco ,plat:plataforma ,linT:línea telefonica }


}