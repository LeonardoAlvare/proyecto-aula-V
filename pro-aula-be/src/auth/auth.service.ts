import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdatePasswordAuthDto } from './dto/update-password-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(LoginAuthDto: LoginAuthDto) {
    const { email, password } = LoginAuthDto;
    const user = await this.userService.findOne({ email });

    if (password != user.password) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    return user;
  }

  async register(createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  async updatePassword(userId: string, updatePassword: UpdatePasswordAuthDto) {
    const { email, newPassword, oldPassword } = updatePassword;
    
    const user = await this.userService.findOne({  email, _id: userId });

    if (oldPassword != user.password) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    if (oldPassword == newPassword) {
      throw new BadRequestException('La nueva contraseña no puede ser igual a la anterior');
    }

    await this.userService.update(user.id, { password: newPassword });

    return {
      message: 'Contraseña actualizada correctamente',
      status: HttpStatus.OK,
    };
  }
}
