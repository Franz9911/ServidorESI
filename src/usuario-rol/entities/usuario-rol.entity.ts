import { Rol } from "src/rol/entities/rol.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioRol {
@PrimaryGeneratedColumn('increment')
id: number;
//cambiar a true mas adelante 
@Column({nullable:true,length:3,
    comment:
    'estado del rol activo = act, inactivo = ina'})
estado:string;
@ManyToOne(() => Usuario, (usuario) => usuario.id)
@JoinColumn({name:"usuario",referencedColumnName:"id"})//comment: id de usuario
usuario:Usuario;
@ManyToOne(()=>Rol, (rol)=>rol.id)
@JoinColumn({ name:"rol",referencedColumnName:"id"})//comment : id del rol
rol:Rol
}
