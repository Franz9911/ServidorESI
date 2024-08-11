import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
//import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
