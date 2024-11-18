import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type userDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  email: string;

  @Prop({})
  password: string;

  @Prop({ required: false })
  socialMedia: string[];

  @Prop({ default: false })
  isFreelancer: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
