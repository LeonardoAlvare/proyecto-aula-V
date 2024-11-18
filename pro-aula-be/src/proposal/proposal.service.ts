import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { Proposal } from './schema/proposal.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/project/schema/project.schema';

@Injectable()
export class ProposalService {
  constructor(
    @InjectModel(Proposal.name) private proposalModel: Model<Proposal>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async create(createProposalDto: CreateProposalDto) {
    const { userId, projectId } = createProposalDto;
    const existingProposal = await this.proposalModel.exists({
      userId,
      projectId,
    });

    if (existingProposal) {
      throw new ConflictException('Propuesta existente');
    }
    
    const existingProject = await this.projectModel.exists({ _id: projectId });

    if (!existingProject) {
      throw new NotFoundException('Proyecto no encontrado');
    }

    await this.proposalModel.create(createProposalDto);

    return {
      message: 'Propuesta creado correctamente',
      status: HttpStatus.OK,
    };
  }

  async findAll() {
    return await this.proposalModel.find();
  }

  async findOneByUserId(id: string) {
    const porposals = await this.proposalModel.find({ userId: id });

    return porposals;
  }

  async findOneByProjectId(id: string) {
    const porposals = await this.proposalModel.find({ projectId: id });

    return porposals;
  }

  async update(id: string, updateProposalDto: UpdateProposalDto) {
    const proposal = await this.proposalModel.findById(id);

    if (!proposal) {
      throw new NotFoundException('Propuesta no encontrado');
    }

    await this.proposalModel.updateOne(
      { _id: proposal._id },
      updateProposalDto,
    );

    return {
      message: 'Propuesta actualizado correctamente',
      status: HttpStatus.OK,
    };
  }

  async removeByUserId(id: string) {
    const proposal = await this.proposalModel.findOne({ userId: id });

    if (!proposal) {
      throw new NotFoundException('Propuesta no encontrado');
    }

    await this.proposalModel.updateOne(
      {
        _id: proposal._id,
      },
      {
        $set: {
          userId: null,
        },
      },
    );

    return {
      message: 'Propuesta eliminado correctamente',
      status: HttpStatus.OK,
    };
  }

  async removeByProjectId(id: string) {
    const proposal = await this.proposalModel.findOne({ projectId: id });

    if (!proposal) {
      throw new NotFoundException('Propuesta no encontrado');
    }

    await this.proposalModel.updateOne(
      { _id: proposal._id },
      {
        $set: {
          projectId: null,
        },
      },
    );

    return {
      message: 'Propuesta eliminado correctamente',
      status: HttpStatus.OK,
    };
  }
}
