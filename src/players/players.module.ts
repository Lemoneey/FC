import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entities/players.entity';
import { PlayerWhoPlayEntity } from './entities/players_who_play.entity';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
    providers: [PlayersService],
    controllers: [PlayersController],
    imports: [TypeOrmModule.forFeature([PlayerEntity, PlayerWhoPlayEntity])]
})
export class PlayersModule {}
