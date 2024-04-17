import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cheese {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column("decimal")
    pricePerKilo: number

    @Column()
    description: string

    @Column()
    imageUrl: string

    @Column()
    type: string

    @Column()
    color: string

}
