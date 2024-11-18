import { Proposal, ProposalSchema } from './schema/proposal.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Proposal.name, schema: ProposalSchema },
    ]),
    ProjectModule,
  ],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
