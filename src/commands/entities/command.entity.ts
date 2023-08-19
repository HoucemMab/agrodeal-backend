import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Command {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  adresse: number;

  @Column()
  ownerUsername: string;

  @Column()
  listProducts: Product[];

  @Column()
  totalPrice: number;
}
