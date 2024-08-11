import { Lote } from "src/lote/entities/lote.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('increment')
    id:number; //codigo 
    @Column({nullable: false})
    nombre:string;
    @Column({nullable: false})
    modelo:string;
    @Column({nullable: false})
    marca:string;
    @CreateDateColumn({type: 'date'})
    fechaRegistro:Date;
    @Column({nullable: true})
    imagen:string; 
    @Column({nullable: true})
    descripcion:string;
    @OneToMany(()=>Lote,(lote)=>lote.producto)
    lote:Lote[];
}