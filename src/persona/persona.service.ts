import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonaService {
  /*datos de vital importancia
    1 las rutas si comparten el metodo que no se parescan ya que la ruta con 
    nombre mas corta se ejecuta primero
    eje:
    persona/:id
    persona/actualizar
    se eecuta primero la :id

  */
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  create(p: Persona) {
    return this.personaRepository.save(p);
  }

  findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }
  //buscar personas sin registro de usuario
  async findPersonasSinUsuario(): Promise<Persona[]> {
    return this.personaRepository
        .createQueryBuilder('persona') //crear una consulta 'persona' es un alias para la entidad Persona
        .leftJoinAndSelect('persona.usuario', 'usuario') //une las tablas persona y usuario mediante la relacion persona,usuario 
        .where('usuario.id IS NULL') //selecciona las filas con el id de usuario igual a null
        .getMany();//ejecuta la consulta y retorna el array
}

  findOne(id:any):Promise<Persona> {
    return this.personaRepository.findOneBy({id});
  }
    
    async bApellidoM(apellidoM: string): Promise<Persona[]> {
      const personas = await this.personaRepository.find({ where: { apellidoM } });
      console.log('Resultados:', personas);
      return personas;
    }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
