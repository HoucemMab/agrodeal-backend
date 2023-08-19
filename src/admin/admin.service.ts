import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}
  create(createAdminDto: Admin) {
    return this.adminRepository.save(createAdminDto);
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: string) {
    return this.adminRepository.findOneBy({ id: id });
  }
  findOneByUsername(username: string) {
    return this.adminRepository.findOneBy({ username: username });
  }
  async login(adminDto: LoginAdminDto) {
    console.log(adminDto);
    const admin: Admin = await this.adminRepository
      .findOneBy({ username: adminDto.username })
      .catch((err) => {
        throw new NotFoundException('User Not Found');
      });
    console.log(admin);
    if (admin.password == adminDto.password) {
      return { username: admin.username, email: admin.email, id: admin.id };
    }
  }
}
