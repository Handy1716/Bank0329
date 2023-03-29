import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateAccountDto {
  
    @IsString()
    @IsNotEmpty()
    accountNumber: string;
  
    @IsNumber()
    @IsNotEmpty()
    balance: number;
  

}
