import { Controller, Get, Param, Put, UseGuards, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { UserUpdateDto } from './dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  userProfile(@GetUser() user: User) {
    return user;
  }

  @Put('profile/:id')
  updateProfile(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto) {
    return this;
  }
}
