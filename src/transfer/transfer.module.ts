import { Module } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { OwnerService } from 'src/owner/owner.service';
import { TransferController } from './transfer.controller';

@Module({
    controllers: [TransferController],
    providers: [OwnerService, AccountService]
  })
  export class TransferModule {}
