import { User } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

class UserUpdateDto {
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  firstName: string;
}

export { UserUpdateDto };
