import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, IsNull, Not, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn('increment') 
    id: number;
    @Column({ nullable: false })
    nombre: string;
    @Column({ nullable: false })
    apellidoP: string;
    @Column({ nullable: true })
    apellidoM: string;
    @Column({ nullable: false })
    ci:number; 
    @Column({ nullable: false })
    telefono:number;
    @CreateDateColumn({ type: 'date' }) // Fecha de creación automática
    fechaRegistro: Date;
    @OneToOne(()=>Usuario,usuario=>(usuario.persona))
    usuario:Usuario
}
