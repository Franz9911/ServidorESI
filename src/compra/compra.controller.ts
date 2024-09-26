import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from './entities/compra.entity';
import { SearchCompraDto } from './dto/search-compra.dto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post('registrar/')
  create(@Body() createCompraDto: CreateCompraDto) {
    console.log("ingresamos a crear compra");
    console.log(createCompraDto);
    return this.compraService.createCompra(createCompraDto);
  }

  @Get('listar/:id/:estado/:fechaReg/:metodoPago')
  findAllCompras(@Req() requestCompra: Request, 
  @Param('id') id: string,
  @Param('estado') estado: string,
  @Param('fechaReg') fechaReg: string,
  @Param('metodoPago') metodoPago: string,
  ) {
    const userAgent = requestCompra;
    //console.log(userAgent);
    console.log("hola compra");
    return this.compraService.findAllComprasServ(id,estado,fechaReg,metodoPago);
  }

  /*
   @Get('usuarioId/:usuarioId')
  async findOneUsuario(@Param('usuarioId') usuarioId: number) {
    console.log("paso 3 usuario roles ") 
    console.log(usuarioId);
    return this.usuarioRolService.findUsusario(usuarioId);
  }
  */

  @Get('buscarCompraId/:id')
  findCompraOne(@Param('id') id: string) {
    return this.compraService.findCompraOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
