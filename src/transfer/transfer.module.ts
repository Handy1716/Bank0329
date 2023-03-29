import { Module } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';
import { TransferController } from './transfer.controller';

@Module({
    controllers: [TransferController],
    providers: [OwnerService]
  })
  export class TransferModule {}
