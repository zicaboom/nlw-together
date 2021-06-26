import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid"
import { Exclude } from "class-transformer";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    @Exclude()
    admin:boolean

    @Column()
    @Exclude()
    password: string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export{User}