import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateOwnerDto {

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsBoolean()
    @IsNotEmpty()
    business: boolean;

}
