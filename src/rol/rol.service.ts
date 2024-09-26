import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>
  ){}
  async createRolDB(rol: Rol) {
    //const rolAux=
    try{
      return await this.rolRepository.save(rol);
    }catch{
      console.error('error al crear el rol '+ error);
      throw new Error("error en el registro del rol" + error);
    }
    
    
  }

  findAllRol() {
    try{
      return this.rolRepository.find();
    }catch{
      console.error('error al obtener los roles '+ error);
      throw new Error("error en la obtencion de los roles" + error);
    }
  }

  findOne(id: number) :Promise<Rol>{
    return this.rolRepository.findOneBy({id});
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
