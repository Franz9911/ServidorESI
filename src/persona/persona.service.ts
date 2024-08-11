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

  findOne(id:any):Promise<Persona> {
    return this.personaRepository.findOneBy({id});
  }
    
      // Método corregido
    //async bApellidoM(apellidoM: string): Promise<Persona[]> {
    //return this.personaRepository.find({ where: { apellidoM  } });
    //}
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
