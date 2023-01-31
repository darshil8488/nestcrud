import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs.modules';
import { MongooseModelModule } from './schema/mongoose-model.module';
import { UserModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/nest_crud") , 
    MongooseModelModule , 
    JobsModule , 
    UserModule 
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
