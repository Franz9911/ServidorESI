import { PartialType } from '@nestjs/mapped-types';
import { CreateCompraDto } from './create-compra.dto';

export class UpdateCompraDto extends PartialType(CreateCompraDto) {
    readonly fechaRecepcion:Date;
    readonly estado:string 
    //{rec:recepcionado,esp:espera: can:cancelado}
    readonly metodoPago:string; 
    //{efec: efectivo,banc:banco ,plat:plataforma ,linT:línea telefonica }

    //readonly idProveedor:number;
    //readonly idUsuarioResponsable:number;
}
