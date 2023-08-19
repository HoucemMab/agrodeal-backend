import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
