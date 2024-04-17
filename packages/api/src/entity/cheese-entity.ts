import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'cheese'})
export class CheeseEntity {

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
