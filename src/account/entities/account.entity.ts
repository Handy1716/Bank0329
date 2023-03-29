import { Owner } from "src/owner/entities/owner.entity";
import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

export class Account {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    accountNumber: string;

    @Column()
    balance: number;

    @ManyToOne(() => Owner, (owner) => owner.account)
    owner: Owner;

}
