import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { Lote } from './entities/lote.entity';

@Controller('lote')
export class LoteController {
  constructor(private readonly loteService: LoteService) {}

  @Post('registrar/')
  create(@Body() createLote: CreateLoteDto) {
    console.log("ingresamos a crear lote");
    console.log(createLote);
    return this.loteService.create(createLote);
  }

  @Get('listar/')
  findAll() {
    return this.loteService.findAll();
  }

  @Get('buscarLoteId/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.loteService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoteDto: UpdateLoteDto) {
    return this.loteService.update(+id, updateLoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loteService.remove(+id);
  }
}
