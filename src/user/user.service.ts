import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async addNewUser(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async findUserById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id: id });
  }
  async findUserByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ email: email });
  }
  async deleteUserById(id: string) {
    return this.userRepository.delete({ id: id });
  }

  async findAllUsers() {
    return this.userRepository.find();
  }
}
