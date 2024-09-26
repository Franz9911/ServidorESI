import { Persona } from "src/persona/entities/persona.entity";
export class CreateUsuarioDto {
   
    nombreU: string;
    contrasenha: string;
    fotografia:string;
    correoE:string;
    estado:string;
    direccion:string;
    fechaRegistro:Date;
    persona:Persona;
    

}
