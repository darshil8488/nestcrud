import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Module({
  imports: [],
  controllers: [],
  providers: [JobsService],
  exports : [],
})
export class JobsModule {}
