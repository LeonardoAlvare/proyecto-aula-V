import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/proaula'),
    UserModule,
    AuthModule,
    ProjectModule,
    ProposalModule,
  ],
})
export class AppModule {}
