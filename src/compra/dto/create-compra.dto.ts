export class CreateCompraDto {

    readonly fechaRecepcion:Date;
    readonly estado:string 
    //{rec:recepcionado,esp:espera: can:cancelado}
    readonly metodoPago:string; 
    //{efec: efectivo,banc:banco ,plat:plataforma ,linT:línea telefonica }

    readonly idProveedor:number;
    readonly idUsuarioResponsable:number;
    //total
    //idObservcion

}
