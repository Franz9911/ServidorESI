import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { CreateAutenticacionDto } from './dto/create-autenticacion.dto';
import { UpdateAutenticacionDto } from './dto/update-autenticacion.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { error } from 'console';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    private readonly autenticacionService: AutenticacionService,
    private readonly usuarioServ:UsuarioService) {}

  @Post('login')
  async login(@Body() body:{nombreU:string,contrasenha:string}) {
    //const usuarioL=await this.autenticacionService.validar(body.nombre,body.contrasenha);
    const usuarioL= await this.usuarioServ.findNombreUsuario(body.nombreU);
    if(!usuarioL){
      throw new HttpException('usuario no encontrado',HttpStatus.NOT_FOUND)

    }
    //const usuarioL=await this.autenticacionService.validarNombre(body.nombreU);
    if(usuarioL && await bcrypt.compare(body.contrasenha,usuarioL.contrasenha)){
      console.log(usuarioL);
      return this.autenticacionService.login(usuarioL);
      //return usuarioL;
    }else{
      throw new HttpException('usuario incorrecto revise sus credenciales ',HttpStatus.UNAUTHORIZED);
    } 
    

  }
}
