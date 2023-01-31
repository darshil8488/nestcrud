import { Module } from '@nestjs/common';
import { UserContoller } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UserContoller],
  providers: [UsersService],
  exports : [],
})
export class UserModule {}
