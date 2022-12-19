import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
// import { SendNotification } from './application/use-cases/send-notification';
import { DataBaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DataBaseModule, MessagingModule],
  controllers: [],
  providers: []

})
export class AppModule { }
