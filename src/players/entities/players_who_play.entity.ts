import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GameEntity } from 'src/games/entities/games.entity';
import { PlayerEntity } from './players.entity';

@Entity('games_players')
export class PlayerWhoPlayEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => PlayerEntity, { eager: true })
    @JoinColumn({ name: 'player_id', referencedColumnName: 'name' })
    player: PlayerEntity;

    @OneToOne(() => GameEntity, { eager: true })
    @JoinColumn({ name: 'game_id', referencedColumnName: 'started_at' })
    game: GameEntity;
}
