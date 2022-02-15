import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerSaveDto } from './dto/player_save.dto';
import { PlayerEntity } from './entities/players.entity';
import { PlayerWhoPlayEntity } from './entities/players_who_play.entity';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly playersRepository: Repository<PlayerEntity>,
        @InjectRepository(PlayerWhoPlayEntity)
        private readonly playersWhoPlayRepository: Repository<PlayerWhoPlayEntity>
    ) {}

    async registerPlayer(dto: PlayerSaveDto) {
        let player = await this.playersRepository.findOne({
            where: [{ name: dto.name }]
        });

        if (!player) {
            player = await this.playersRepository.create();
            player.name = dto.name;
            await this.playersRepository.save(player);
            return await this.playersWhoPlayRepository.create();
        }

        const playerWhoPlay = await this.playersWhoPlayRepository.findOne({
            where: [{ name: dto.name }]
        });

        playerWhoPlay.player = player;
        return await this.playersWhoPlayRepository.save(playerWhoPlay);
    }
}
