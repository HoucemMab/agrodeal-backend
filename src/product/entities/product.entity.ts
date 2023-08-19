import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductType } from '../dto/productType.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  productName: string;

  @Column()
  productPrice: string;

  @Column()
  productPicture: string;

  @Column()
  productDescription: string;

  @Column()
  productType: ProductType;
}
