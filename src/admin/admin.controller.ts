import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { LoginAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: Admin) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Post('/login')
  login(@Body() admin: LoginAdminDto) {
    return this.adminService.login(admin);
  }
}
