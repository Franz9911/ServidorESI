import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { PersonaService } from 'src/persona/persona.service';
import * as bcrypt from 'bcrypt';
import { Persona } from 'src/persona/entities/persona.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository:Repository<Usuario>,
    private readonly servPersona: PersonaService,

  ){}
  async createUsuarioDb(createUsuarioDto: CreateUsuarioDto) {
    console.log("ingresamos a crear usuario en db");
    console.log(createUsuarioDto)
    const salt=10; //nivel de seguridad para el hash

    //const persona = await this.servPersona.findOne(createUsuarioDto.persona);
    // if(!persona){
    //   return {message: "Persona no encontrada"};
    // }
    const contrasenha = await bcrypt.hash(createUsuarioDto.contrasenha, salt);
    if(contrasenha==null || contrasenha.length<15){
      return {message: "Error al generar contraseña"};
    }
    const usuarioAux=new Usuario()
    usuarioAux.contrasenha=contrasenha;
    //usuarioAux.persona=persona
    usuarioAux.nombreU=createUsuarioDto.nombreU;
    usuarioAux.estado=createUsuarioDto.estado;
    //usuarioAux.fotografia=createUsuarioDto.fotografia;
    usuarioAux.correoE=createUsuarioDto.correoE;
    usuarioAux.direccion=createUsuarioDto.direccion;
    usuarioAux.persona=createUsuarioDto.persona;
    console.log(usuarioAux);
    //return usuarioAux;
    if(usuarioAux.persona){
      console.log(usuarioAux.persona);
      return this.usuarioRepository.save(usuarioAux);
    }
    else{
      return null;
    }
    
  }


  findAll(): Promise<Usuario[]>{
    return this.usuarioRepository.find({
      relations:['persona'],
    })
  }
  findId(id:number):Promise<Usuario>{
    return this.usuarioRepository.findOne({where:{id},relations:['persona']});
  }

  findNombreUsuario(nombreU: string) : Promise<Usuario>{
    return this.usuarioRepository.findOne({where:{nombreU}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
