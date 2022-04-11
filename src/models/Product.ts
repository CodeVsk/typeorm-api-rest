import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    amount: number

    @Column({default: true})
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAd: Date

}