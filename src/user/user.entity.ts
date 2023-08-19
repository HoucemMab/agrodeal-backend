import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;
  @Column()
  lastname: string;
}
