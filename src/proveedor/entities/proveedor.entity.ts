import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({nullable:false,length:40,comment:"nompre del proveedor"})
    nombre: string;
    @Column({nullable:true,length:30,comment:"numero de identifacion tributaria"})
    nit: string;
    @Column({nullable:false,length:20,comment:"telefono del proveedor"})
    telefono: string;
    @Column({nullable:false,length:3,comment:"tipo de proveedor: mayorista= may, minorista=min, fabricante=fab"})
    tipo:string;
    @Column({nullable:true,length:300,comment:"condiciones de pago como anticipos, plazos de pago, etc"})
    condiciones_pago: string;
    @Column({nullable:true,length:50,comment:"correo electronico del proveedor"})
    correo: string;
    @Column({nullable:true,length:50,comment:"pagina web del proveedor"})
    web:string;
    /*
    Ubicacion
    @Column({nullable:true,length:20,comment:"pais donde se encuentra establecida la empresa proveedora"})
    pais:string;
    @Column({nullable:true,length:20,comment:"ciudad donde se encuentra establecida la empresa proveedora"})
    ciudad:string;
    @Column({nullable:true,length:20,comment:"direccion de la empresa proveedora"})
    direccion:string;
    
    cuenta_bancaria{
        num_cuenta
        banco
        //ciudad
        codigo de transferencia iternacional Swift
    }
    contacto{
        nombre 
        apellidoP
        apellidoM
        cargo
        telefono
        correo
    }
    */
}
