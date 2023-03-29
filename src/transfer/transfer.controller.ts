import { Body, Controller, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { OwnerService } from 'src/owner/owner.service';

@Controller('transfer')
export class TransferController {

    constructor(private readonly ownerService: OwnerService,
        private readonly accountService: AccountService) {}

    @Post(":sourceId/:targetId")
    async transfer(@Param() params : {sourceId : number, targetId : number}, @Body() data : {amount : number}): Promise<string> {
        console.log(data, params.sourceId, params.targetId);

        const sourceAccount = await this.accountService.findOne(params.sourceId);
        const targetAccount = await this.accountService.findOne(params.targetId);
        
        if (!sourceAccount || !targetAccount) {
            throw new HttpException('Szamla nem letezik', HttpStatus.NOT_FOUND);
        }
        if (targetAccount.balance < data.amount) {
            throw new HttpException('Nincs eleg penz', HttpStatus.CONFLICT);
        }
        
        // TODO: mentes

        return 'ok';
    }

}
