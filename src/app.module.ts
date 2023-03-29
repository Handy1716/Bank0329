import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { OwnerModule } from './owner/owner.module';
import { TransferController } from './transfer/transfer.controller';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [AccountModule, OwnerModule, TransferModule],
  controllers: [AppController, TransferController],
  providers: [AppService],
})
export class AppModule {}
