import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Between, Repository } from 'typeorm';
import { SearchCompraDto } from './dto/search-compra.dto';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private  compraRepository: Repository<Compra>,
  ){}

  async createCompra(createCompraDto: CreateCompraDto) {
    console.log("ingresando a la funcion crear compra" );  
    return this.compraRepository.save(createCompraDto)
  }

  //esta funcion buscara todas las compras en la db pero es posible usar filtros para la consulta 
  findAllComprasServ(id:string,estado:string,fechaReg:string,metodoPago:string):Promise<Compra[]> {
    let compraId: number | null = id === "null" ? null : parseInt(id); //compraId sera igual a un numero o null 
    //para esto se usa un operador ternario:  condicion ? valor por verdadero : valor por falso 
    let compraEstado: string | null = estado === "null" ? null : estado;
    let compraMetodoPago:string | null = metodoPago ==="null" ? null : metodoPago;
    
    let fechaInicio: Date | null = null;
    let fechaFin: Date | null = null;
    if (fechaReg !== "null") {
      fechaInicio = new Date(`${fechaReg} 00:00:00`);
      fechaFin = new Date(`${fechaReg} 23:59:59`);
  }
    try {
      return this.compraRepository.find({
        where: {
          id: compraId,
          fechaRegistro: fechaInicio && fechaFin ? Between(fechaInicio, fechaFin) : undefined,// && verifica que las fechas sean truthy
          // "truthy" (es decir, que no son null, undefined, 0, false, o una cadena vacía)  
          estado: compraEstado,
          metodoPago:compraMetodoPago,
        },order: {
                id: "DESC" },
        //relations:['lote']
      });
    } catch (error) {
      console.error("error al recuperar  las compras");
      throw new Error("error al recuperar las compras" + error);
    }  
  }

  async findCompraOne(id: number): Promise<Compra |null> {
   return this.compraRepository.findOneBy({ id })
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
