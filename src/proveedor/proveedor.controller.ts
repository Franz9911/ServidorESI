import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { request } from 'http';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post('registrar/')
  create(
    @Req() request:Request,
    @Body() createProveedorDto: CreateProveedorDto) {
    console.log(createProveedorDto);
    return this.proveedorService.createProveedorServ(createProveedorDto);
  }

  @Get('listar')
  findAllProveedor() {
    console.log("ola proveedores");
    return this.proveedorService.findAllProveedoresServ();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProveedorDto: UpdateProveedorDto) {
    return this.proveedorService.update(+id, updateProveedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}
