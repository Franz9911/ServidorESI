import { Injectable } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>
  ){}
  async createProveedorServ(createProveedorDto: CreateProveedorDto) {
    /*const producto= await this.servProduc.findOne(createLote.producto)
    if (!producto) {
      throw new NotFoundException('el producto no se encontro el prodcto en la base de datos');
    }*/
    console.log(createProveedorDto);
    const newProveedor=new Proveedor();
    newProveedor.id=createProveedorDto.id;
    newProveedor.nombre=createProveedorDto.nombre;
    newProveedor.nit=createProveedorDto.nit;
    newProveedor.telefono=createProveedorDto.telefono;
    newProveedor.tipo=createProveedorDto.tipo;
    newProveedor.condiciones_pago=createProveedorDto.condiciones_pago;
    newProveedor.correo=createProveedorDto.correo;
    newProveedor.web=createProveedorDto.web;

    try {
      return await this.proveedorRepository.save(newProveedor);
    } catch (error) {
      throw  new Error('Error al crear el proveedor:'+ error);
      

    }
    

  }

  findAllProveedoresServ() {
    return this.proveedorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedor`;
  }

  update(id: number, updateProveedorDto: UpdateProveedorDto) {
    return `This action updates a #${id} proveedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedor`;
  }
}
