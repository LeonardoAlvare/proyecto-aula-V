import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const userFound = await this.userModel.findOne({ email });

    if (userFound && userFound.email !== email) {
      throw new ConflictException('El email ya está en uso');
    }

    const newUser = await this.userModel.create(createUserDto);
    return {
      message: 'Usuario creado correctamente',
      status: HttpStatus.CREATED,
      user: newUser,
    };
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(filters: FilterQuery<User>) {
    const userFound = await this.userModel.findOne(filters);

    if (!userFound) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return userFound;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { email } = updateUserDto;

    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const foundUser = await this.userModel.findOne({ email });

    if (foundUser && foundUser.email !== email) {
      throw new ConflictException('El email ya está en uso');
    }

    const newUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    return {
      message: 'Usuario actualizado correctamente',
      status: HttpStatus.OK,
      user: newUser,
    };
  }

  async remove(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    await this.userModel.findByIdAndDelete(id);

    return {
      message: 'Usuario eliminado correctamente',
      status: HttpStatus.OK,
    };
  }
}
