import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import pgConfig from 'ormconfig';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
            isGlobal: true
        }),
        TypeOrmModule.forRoot(pgConfig),
        PlayersModule,
        GamesModule
    ]
})
export class AppModule {}
