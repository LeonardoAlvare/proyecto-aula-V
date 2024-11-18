import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { StatusProject } from '../types';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({ versionKey: false })
export class Project {
  @Prop({ type: Types.ObjectId, required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  techs: string[];

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  dateInit: Date;

  @Prop({ required: true })
  dateEnd: Date;

  @Prop({ required: true })
  salary: number;

  @Prop({ required: false, default: StatusProject.Active })
  status: StatusProject;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
