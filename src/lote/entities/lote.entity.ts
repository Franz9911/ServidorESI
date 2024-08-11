import { type } from "os";
import { Compra } from "src/compra/entities/compra.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Lote {
    //@PrimaryGeneratedColumn('increment',{ type: 'bigint' }) 
    //cuando usamos bigint nos devuelve el int como string ejem: "id":"123"  
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: "smallint", nullable: false })
    unidades: number; //prueba de int8 
    @Column({type:"real", nullable: false })
    costoLote: number;
    @Column({ type:"smallint", nullable: true })
    unidadesDispo:number;  
    @Column({type:"real", nullable:false})
    precioVentaLoteSugerido:number;
    //idProducto
    @ManyToOne(()=> Producto,(producto)=>producto.lote)
    //@ManyToOne(()=> Producto)
    @JoinColumn({name:"idProducto",referencedColumnName:"id"})
    producto:Producto;

    //idCompra
    @ManyToOne(()=> Compra,(compra)=>compra.lote)
    @JoinColumn({name:"idCompra",referencedColumnName:"id"})
    compra:Compra
}
