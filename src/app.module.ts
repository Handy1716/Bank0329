import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { OwnerModule } from './owner/owner.module';
import { TransferController } from './transfer/transfer.controller';
import { TransferModule } from './transfer/transfer.module';
import { OwnerService } from './owner/owner.service';
import { AccountService } from './account/account.service';

@Module({
  imports: [AccountModule, OwnerModule, TransferModule],
  controllers: [AppController, TransferController],
  providers: [AppService, OwnerService, AccountService],
})
export class AppModule {}
