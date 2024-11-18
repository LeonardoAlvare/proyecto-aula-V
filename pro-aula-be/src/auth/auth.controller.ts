import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdatePasswordAuthDto } from './dto/update-password-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() LoginAuthDto: LoginAuthDto) {
    return this.authService.login(LoginAuthDto);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Put('update-password/:id')
  async updatePassword(@Param('id') id: string, @Body() updatePassword: UpdatePasswordAuthDto) {
    return this.authService.updatePassword(id, updatePassword);
  }
}
