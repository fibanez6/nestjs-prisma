import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  async signupUser(
    @Body() userData: { name?: string; email: string }): Promise<UserModel> {
      return this.usersService.createUser(userData);
    }
}
