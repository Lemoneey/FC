import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesController } from './games.controller';
import { GameEntity } from './entities/games.entity';
import { GamesService } from './games.service';

@Module({
    controllers: [GamesController],
    providers: [GamesService],
    imports: [TypeOrmModule.forFeature([GameEntity])]
})
export class GamesModule {}
