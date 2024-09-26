import { Persona } from "src/persona/entities/persona.entity";
import { UsuarioRol } from "src/usuario-rol/entities/usuario-rol.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment') 
    id: number;
    @Column({ nullable: false, unique:true })
    nombreU: string;
    @Column({ nullable: false , length:80})
    contrasenha:string;
    @Column({nullable:true})
    fotografia:string;
    @Column({nullable:false , length:50})
    correoE:string;
    @Column({nullable:false ,length:4})
    estado:string;
    @Column({nullable:false, length:200})
    direccion:string;
    @CreateDateColumn({ type: 'date' }) 
    fechaRegistro:Date;
    @OneToOne(()=>Persona,(persona)=>(persona.usuario))
    @JoinColumn({name:'persona',referencedColumnName:'id'})
    persona:Persona;

    @OneToMany(()=>UsuarioRol,(usuarioRol)=>usuarioRol.usuario)
    usuarioRol:UsuarioRol[];

}
