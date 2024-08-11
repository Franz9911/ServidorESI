import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Persona } from './persona/entities/persona.entity';
import { PersonaService } from './persona/persona.service';
import { PersonaController } from './persona/persona.controller';
import { ProductoModule } from './producto/producto.module';
import { Producto } from './producto/entities/producto.entity';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { Lote } from './lote/entities/lote.entity';
import { CreateLoteDto } from './lote/dto/create-lote.dto';
import { LoteController } from './lote/lote.controller';
import { LoteService } from './lote/lote.service';

import { Compra } from './compra/entities/compra.entity';
import { CompraController } from './compra/compra.controller';
import { CompraService } from './compra/compra.service';

@Module({
  imports: [


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // Cambia esto según sea necesario
      port: 5432,
      username: 'postgres',
      password: '5432',
      database: 'ESI',
      entities: [Persona,Producto,Lote,Compra],  // Asegúrate de incluir tus entidades aquí
      synchronize: true,  // No usar en producción, solo para desarrollo
    }),
    TypeOrmModule.forFeature([Persona,Producto,Lote,Compra]),
    

  
  ],
  controllers: [AppController, PersonaController,ProductoController,LoteController,CompraController],
  providers: [AppService, PersonaService,ProductoService,LoteService,CompraService],
})
export class AppModule {}
