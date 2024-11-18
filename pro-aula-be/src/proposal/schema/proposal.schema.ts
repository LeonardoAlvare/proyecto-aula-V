import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';
import { StatusProposal } from '../types';

export type ProposalDocument = HydratedDocument<Proposal>;

@Schema({ versionKey: false })
export class Proposal {
  @Prop({ required: false, default: StatusProposal.Pending })
  status: StatusProposal;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  projectId: string;

  @Prop({ required: true })
  nameProject: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  userEmail: string;
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
