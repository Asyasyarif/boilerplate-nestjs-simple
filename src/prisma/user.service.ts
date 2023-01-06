import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserUpdateDto } from 'src/user/dto';
import { PrismaService } from './prisma.service';

export class UserServices {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async UpdateUser(dto: UserUpdateDto){
    
  }
}