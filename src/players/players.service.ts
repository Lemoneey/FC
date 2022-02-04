import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerSaveDto } from './dto/player_save.dto';
import { PlayerEntity } from './entities/players.entity';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly playersRepository: Repository<PlayerEntity>
    ) {}

    async savePlayer(dto: PlayerSaveDto) {
        const player = await this.playersRepository.findOne({
            where: [{ name: dto.name }]
        });

        if (!player) {
            const res = await this.playersRepository.save(dto);
            return res;
        }
        return;
    }
}
