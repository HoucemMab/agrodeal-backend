import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwtToken(user: UserEntity): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.signAsync(payload, {
      secret: '12bob12ou2b1ob',
      expiresIn: '1h',
    });
  }
}
