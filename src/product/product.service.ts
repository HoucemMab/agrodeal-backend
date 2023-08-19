import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  create(createProductDto: Product) {
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id: id });
  }

  remove(id: string) {
    console.log(id);
    return this.productRepository.delete({ id: id });
  }
}
