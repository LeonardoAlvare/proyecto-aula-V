import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';

@Controller('proposal')
export class ProposalController {
  constructor(private readonly proposalService: ProposalService) {}

  @Post()
  create(@Body() createProposalDto: CreateProposalDto) {
    return this.proposalService.create(createProposalDto);
  }

  @Get()
  findAll() {
    return this.proposalService.findAll();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.proposalService.findOneByUserId(id);
  }

  @Get('/project/:id')
  findOneByProjectId(@Param('id') id: string) {
    return this.proposalService.findOneByProjectId(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProposalDto: UpdateProposalDto,
  ) {
    return this.proposalService.update(id, updateProposalDto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: string) {
    return this.proposalService.removeByUserId(id);
  }

  @Delete('/project/:id')
  removeByProjectId(@Param('id') id: string) {
    return this.proposalService.removeByProjectId(id);
  }
}
