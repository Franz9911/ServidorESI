import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { Repository } from 'typeorm';
import { Producto } from 'src/producto/entities/producto.entity';
import { ProductoService } from 'src/producto/producto.service';
import { CompraService } from 'src/compra/compra.service';

@Injectable()
export class LoteService {
  constructor(
    @InjectRepository(Lote) private readonly loteRepository: Repository<Lote>,
    //@InjectRepository(Producto) private readonly productoRepo: Repository<Producto>
    private readonly servProduc:ProductoService,
    private readonly servCompra:CompraService, 
    ){}
  async create(createLote: CreateLoteDto) {
  console.log("ingresando a la funcion" );  
    const producto= await this.servProduc.findOne(createLote.producto)
    if (!producto) {
      throw new NotFoundException('el producto no se encontro el prodcto en la base de datos');
    }
    const compra= await this.servCompra.findCompraOne(createLote.idCompra)
    if(!compra){
      throw new NotFoundException("la compra no pudo ser encontrada");
    }
    
    const newlote = new Lote();
    console.log("producto encontrado");
    console.log(producto);
    console.log("producto de lote");
    console.log(createLote);
    console.log( JSON.stringify(newlote.producto));
    console.log(JSON.stringify(compra));
    
    newlote.producto = producto;
    newlote.unidades = createLote.unidades;
    newlote.costoLote=createLote.costoLote;
    newlote.precioVentaLoteSugerido=createLote.precioVentaLoteSugerido;
    newlote.unidadesDispo=createLote.unidadesDispo;
    newlote.compra=compra;

    return this.loteRepository.save(newlote); 
    //console.log(newlote);
  }

  findAll(){
    console.log("prueba")
    return this.loteRepository.find({
      //sin esta line no se muestra las relaciones en el json  
      relations: ['producto','compra'],
    });
  }

  findOne(id: number) {
    return this.loteRepository.findOneBy({id});
  }

  update(id: number, updateLoteDto: UpdateLoteDto) {
    return `This action updates a #${id} lote`;
  }

  remove(id: number) {
    return `This action removes a #${id} lote`;
  }
}
