import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('games')
export class GameEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    started_at: Date;
}
