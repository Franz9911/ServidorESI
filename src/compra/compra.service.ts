import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';

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

  findAll():Promise<Compra[]> {
    return this.compraRepository.find();
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
