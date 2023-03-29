import { Account } from "src/account/entities/account.entity";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class Owner {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;

    @Column()
    business: boolean;

    @OneToMany(() => Account, (account) => account.owner)
    account: Account[]
}
