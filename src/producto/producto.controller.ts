import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseInterceptors,
   UploadedFile } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

import { FileInterceptor } from '@nestjs/platform-express';
//import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { Multer, diskStorage } from 'multer';
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('registrar/')
  create(
    @Req() request:Request,
    @Body() p: Producto) {
      const pregunta=request;
      console.log(request);
    return this.productoService.create(p);
  }
  
  @UseInterceptors(
    FileInterceptor(
      'imgfile',{
        storage:diskStorage({
          destination:'./uploads',
          filename(req, file, callback) {
              callback(null,file.originalname)
          },
        })
      }
    )
  )
      @Post('imagen/')
      async up(@UploadedFile() file: Express.Multer.File) {
        return{
          msm:'archivo cargado '+file.filename
        }
      }


  /*@Post('agregar/')
  async create(
    request:Request,
    @UploadedFile() file: Express.Multer.File, 
    @Body() createProductoDto: CreateProductoDto) {
    console.log(request)
    const producto = new Producto();

    producto.nombre = createProductoDto.nombre;
    producto.descripcion = createProductoDto.descripcion;
    producto.modelo=createProductoDto.modelo;
    producto.marca=createProductoDto.marca;
    
    producto.imagen = file.filename; // Guarda el nombre del archivo en la DB
    return this.productoService.create(producto);
  }
*/
  @Get('listar/')
  findAll(@Req() request: Request) {
    const userAgent = request;
    //console.log(userAgent);
    console.log("hola producto")
    return this.productoService.findAll(
      //todo dentro del parentesis en nuevo y es prueba
      
    );
  }

  @Get('buscarProductoId/:id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
