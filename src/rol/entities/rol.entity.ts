import { UsuarioRol } from "src/usuario-rol/entities/usuario-rol.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn('increment',{comment:'Identificador de Rol '})
    id:number;
    @Column({nullable:false,length:6,
        comment:
        'Nombre de la rol: administrador=Admi-1, servicio tecnico = SerT-2, ventas = Vent-3'})
    nombre: string;
    @OneToMany(()=>UsuarioRol,(usuarioRol)=>usuarioRol.rol)
    usuarioRol:UsuarioRol[]; 

}
