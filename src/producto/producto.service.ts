import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)private productoRepo: Repository<Producto>
  ){}
  create(producto: Producto) {
    return this.productoRepo.save(producto);
  }

  findAll() {
    return this.productoRepo.find({
      relations: ['lote'],
    });
  }



  findOne(id: number) {
    return this.productoRepo.findOneBy({id});
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
