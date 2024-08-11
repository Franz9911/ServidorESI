import { Column, CreateDateColumn, Entity, IsNull, Not, PrimaryGeneratedColumn } from "typeorm";

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
}
