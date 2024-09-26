import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioRolService } from './usuario-rol.service';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';
import { UpdateUsuarioRolDto } from './dto/update-usuario-rol.dto';
import { UsuarioRol } from './entities/usuario-rol.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RolService } from 'src/rol/rol.service';
import { error } from 'console';

@Controller('usuario-rol')
export class UsuarioRolController {
  constructor(private readonly usuarioRolService: UsuarioRolService,
    private readonly usuarioService: UsuarioService,
    private readonly rolService:RolService,
    ) {}

  @Post('registrar')
  async createUsuarioRol(@Body() usuarioRol: CreateUsuarioRolDto) {
    console.log("hola");
    //al parecer la mejor opcion es recibir solo los ids de usuario y rol
    console.log(usuarioRol);
    let usuarioRolTrue:any;
    
    try{
      const rol = await this.rolService.findOne(usuarioRol.idRol);
      const usuario = await this.usuarioService.findId(usuarioRol.idUsuario);
      const usuarioRolAux:UsuarioRol={
        usuario:usuario,
        rol:rol,
        id:0,
        estado:"act"
      }
      usuarioRolTrue=usuarioRolAux;
    }catch{
      throw new error("error en el registro " + error);
    }
    //return {"bien":"bien"};
    return this.usuarioRolService.createUsuarioRolDB(usuarioRolTrue);
  }


  @Get('listar')
  findAllUsuarioRol() {
    return this.usuarioRolService.findAllUsuarioRol(

    );
  }

  @Get('usuarioId/:usuarioId')
  async findOneUsuario(@Param('usuarioId') usuarioId: number) {
    console.log("paso 3 usuario roles ") 
    console.log(usuarioId);
    return this.usuarioRolService.findUsusario(usuarioId);
  }

  @Patch('actualizarEstado/:id')
  @HttpCode(HttpStatus.OK) // Esto establece el código de estado 200
  async actualizarEstado(@Param('id') id: number, @Body('estado') estado: string) {
    const resultado = await this.usuarioRolService.updateEstadoRol(id, estado);
    return {
        status: HttpStatus.OK,
        message: 'Estado actualizado correctamente',
        data: resultado,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioRolService.remove(+id); 
  }
}
