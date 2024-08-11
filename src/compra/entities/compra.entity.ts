import { type } from "os";
import { Lote } from "src/lote/entities/lote.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Compra {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @CreateDateColumn({type:"date"})
    fechaRegistro:Date;
    @Column({type:"date",nullable:true})
    fechaRecepcion:Date
    @Column({type:"varchar",length:3,nullable:false})
    estado :string;
    @Column({type:"varchar",length:4,nullable:false})
    metodoPago:string;
    //modificar
    //idcompra
    @OneToMany(()=>Lote,(lote)=>lote.compra) 
    lote:Lote[];
}
