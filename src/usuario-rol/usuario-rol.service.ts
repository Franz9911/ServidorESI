import { Injectable } from '@nestjs/common';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';
import { UpdateUsuarioRolDto } from './dto/update-usuario-rol.dto';
import { UsuarioRol } from './entities/usuario-rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioRolService {
  constructor(
    @InjectRepository(UsuarioRol)
    private readonly usuarioRolRepository: Repository<UsuarioRol>
  ){}
  async createUsuarioRolDB(usuarioRol: UsuarioRol) {
    try {
      return  await this.usuarioRolRepository.save(usuarioRol);

    } catch (error) {
      console.log("error en el registro de la usuarioRol"+ error)      
      throw new Error("error en el registro del rol del usuario "+ error) 
    }
  }

  findAllUsuarioRol() {
    try {
      return this.usuarioRolRepository.find({
        relations:['usuario','rol'],
      })
    } catch (error) {
      console.log("error en la busqueda de la usuarioRol"+ error)
      throw new Error("error al obtener los usuarioRol" + error) 
    }
    
  }

  async findUsusario(usuarioId: number) {
    console.log("paso 4 ususrios rol");
    console.log(usuarioId);
    try {
      return this.usuarioRolRepository.find({
        where: {
          usuario: {
            id: usuarioId
          }
        },
        relations: ['rol']
      });
    } catch (error) {
      console.log("Error al buscar los roles del usuario: " + error);
      throw error;
    }
  }

  update(id: number, updateUsuarioRolDto: UpdateUsuarioRolDto) {
    return `This action updates a #${id} usuarioRol`;
  }
  //actualizar estado rol
  async updateEstadoRol(id: number, nuevoEstado: string){
    try {
      const usuarioRol = await this.usuarioRolRepository.findOne({where:{id}});
      usuarioRol.estado = nuevoEstado;
      console.log(usuarioRol)
      return await this.usuarioRolRepository.save(usuarioRol);
    } catch (error) {
        console.log("error en la actualizacion del estado del usuarioRol"+ error)
        throw new Error("error en la actualizacion del estado del usuarioRol "+ error)
        }
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioRol`;
  }
}
