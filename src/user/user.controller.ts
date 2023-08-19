import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findUserById(id);
  }

  @Post()
  async create(@Body() UserEntity: UserEntity): Promise<UserEntity> {
    return this.userService.addNewUser(UserEntity);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }

  @Post('register')
  async register(@Body() createUserDto: UserEntity) {
    return this.userService.addNewUser(createUserDto);
  }

  @Post('login')
  async login(@Body() body: any) {
    console.log(body.email);
    let user: UserEntity = await this.userService.findUserByEmail(body.email);
    console.log(user);
    if (user) {
      return this.authService.generateJwtToken(user);
    }
  }
}
