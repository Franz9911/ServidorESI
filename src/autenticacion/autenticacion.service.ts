import { Injectable } from '@nestjs/common';
import { CreateAutenticacionDto } from './dto/create-autenticacion.dto';
import { UpdateAutenticacionDto } from './dto/update-autenticacion.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AutenticacionService {
  constructor(private readonly jwtServ: JwtService) {}

  async login(usuario:any){
    const payload ={nombre: usuario.nombre};
    //generar el JWT para el usuario
    return{ access_token: this.jwtServ.sign(payload),idU:usuario.id}
  }
  create(createAutenticacionDto: CreateAutenticacionDto) {
    return 'This action adds a new autenticacion';
  }

  findAll() {
    return `This action returns all autenticacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autenticacion`;
  }

  update(id: number, updateAutenticacionDto: UpdateAutenticacionDto) {
    return `This action updates a #${id} autenticacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} autenticacion`;
  }
}
