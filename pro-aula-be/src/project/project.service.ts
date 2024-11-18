import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schema/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { UserService } from 'src/user/user.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    private readonly UserService: UserService,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const { userId } = createProjectDto;
    const user = await this.UserService.findOne({ _id: userId });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    await this.projectModel.create(createProjectDto);

    return {
      message: 'Proyecto creado correctamente',
      status: HttpStatus.OK,
    };
  }

  async findAll() {
    return await this.projectModel.find();
  }

  async findOne(id: string) {
    const project = await this.projectModel.findById(id);

    if (!project) {
      throw new NotFoundException('Proyecto no encontrado');
    }

    return project;
  }

  async findByUser(userId: string) {
    const projects = await this.projectModel.find({ userId });

    if (projects.length === 0) {
      throw new NotFoundException('Proyecyo no encontrado');
    }
    return projects;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectModel.findById(id);

    if (!project) {
      throw new NotFoundException('Proyecto no encontrado');
    }

    await this.projectModel.updateOne({ _id: project._id }, updateProjectDto);

    return {
      message: 'Proyecto actualizado correctamente',
      status: HttpStatus.OK,
    };
  }

  async remove(id: string) {
    const project = await this.findOne(id);

    await this.projectModel.deleteOne({ _id: project._id });

    return {
      message: 'Proyecto eliminado correctamente',
      status: HttpStatus.OK,
    };
  }
}
