import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post
} from '@nestjs/common';
import { CreateGameDto } from './dto/create_game.dto';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService) {}

    @Post('create-game')
    async createNewGame(@Body() dto: CreateGameDto) {
        const created = await this.gamesService.createGame(dto);

        if (created) {
            throw new HttpException(
                'Game is successfully created',
                HttpStatus.OK
            );
        } else {
            throw new HttpException(
                'Game already exists',
                HttpStatus.FORBIDDEN
            );
        }
    }
}
