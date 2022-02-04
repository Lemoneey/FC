import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create_game.dto';
import { GameEntity } from './entities/games.entity';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(GameEntity)
        private readonly gamesRepository: Repository<GameEntity>
    ) {}

    async createGame(dto: CreateGameDto) {
        const isExistGame = await this.gamesRepository.findOne({
            where: { started_at: dto.date }
        });

        if (!isExistGame) {
            return this.gamesRepository.save({ started_at: dto.date });
        }

        return;
    }
}
