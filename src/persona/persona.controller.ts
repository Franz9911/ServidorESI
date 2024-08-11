import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Query } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Request,Response } from 'express';
import { Persona } from './entities/persona.entity';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post('/agregar')
  create(
    @Req() request:Request,
    @Body() p: Persona) {
      const pers=request;
      console.log(request);
    return this.personaService.create(p);
  }

  @Get("listar/")
  findAll(@Req() request: Request) {
    const userAgent = request;
    //console.log(userAgent);
    console.log("hola user")
    return this.personaService.findAll();
  }

  @Get('buscarpersona/:id')
  findOne( @Param('id') id: string) {

    console.log(id)
    return this.personaService.findOne(parseInt(id));
  }
  @Get('/se')
  findByNameAndEmail(
    @Req()request: Request, 
    @Query('apellidoM') apellidoM: string,
   
  ){
    const userAgent = request;
    console.log(userAgent);
    return this.personaService.bApellidoM(apellidoM);  
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}


