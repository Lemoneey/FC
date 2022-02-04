import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('players')
export class PlayerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
