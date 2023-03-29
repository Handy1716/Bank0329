import { Body, Controller, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';

@Controller('transfer')
export class TransferController {

    constructor(private readonly ownerService: OwnerService) {}

    @Post(":sourceId/:targetId")
    transfer(@Param() params : {sourceId : number, targetId : number}, @Body() data : {amount : number}): void {
        console.log(data, params.sourceId, params.targetId);

        // throw new HttpException('Szamla nem letezik', HttpStatus.NOT_FOUND);
        // throw new HttpException('Nincs eleg penz', HttpStatus.CONFLICT);

    }

}
