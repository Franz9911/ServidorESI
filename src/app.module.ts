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
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { PersonaModule } from './persona/persona.module';

import { RolModule } from './rol/rol.module';
import { Rol } from './rol/entities/rol.entity';
import { RolController } from './rol/rol.controller';
import { RolService } from './rol/rol.service';

import { UsuarioRolModule } from './usuario-rol/usuario-rol.module';
import { UsuarioRol } from './usuario-rol/entities/usuario-rol.entity';
import { UsuarioRolController } from './usuario-rol/usuario-rol.controller';
import { UsuarioRolService } from './usuario-rol/usuario-rol.service';

import { ProveedorModule } from './proveedor/proveedor.module';
import { Proveedor } from './proveedor/entities/proveedor.entity';
import { ProveedorController } from './proveedor/proveedor.controller';
import { ProveedorService } from './proveedor/proveedor.service';

@Module({
  imports: [


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // Cambia esto según sea necesario
      port: 5432,
      username: 'postgres',
      password: '5432',
      database: 'ESI',
      entities: [Persona,Producto,Lote,Compra,Proveedor,Usuario,Rol,UsuarioRol],  // Asegúrate de incluir tus entidades aquí
      synchronize: true,  // No usar en producción, solo para desarrollo
    }),
    TypeOrmModule.forFeature([Persona,Producto,Lote,Compra,Proveedor,Usuario,Rol,UsuarioRol]),
    AutenticacionModule,
    PersonaModule,
    UsuarioModule,
  ],
  controllers: [
    AppController, 
    PersonaController,
    ProductoController,
    LoteController,
    CompraController,
    ProveedorController,
    RolController,
    UsuarioRolController,
    CompraController,
    UsuarioController,
  ],
  providers: [
    AppService, 
    PersonaService,
    ProductoService,
    LoteService,
    CompraService,
    ProveedorService,
    RolService,
    UsuarioRolService,
    CompraService,
    UsuarioService
  ],
  exports: [TypeOrmModule.forFeature([Persona,Usuario])],
})
export class AppModule {}
