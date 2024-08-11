import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post('registrar/')
  create(@Body() createCompraDto: CreateCompraDto) {
    console.log("ingresamos a crear compra");
    console.log(createCompraDto);
    return this.compraService.createCompra(createCompraDto);
  }

  @Get('listar/')
  findAll(@Req() requestCompra: Request) {
    const userAgent = requestCompra;
    //console.log(userAgent);
    console.log("hola compra")
    return this.compraService.findAll();
  }

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
