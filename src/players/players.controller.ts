import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlayerSaveDto } from './dto/player_save.dto';
import { PlayersService } from './players.service';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Post()
    @ApiOperation({ summary: 'Создание игры' })
    @ApiResponse({ status: 200, type: 'Player is successfully created' })
    async registerPlayerToGame(@Body() playerSaveDot: PlayerSaveDto) {
        const isPlayerCreated = await this.playersService.registerPlayer(
            playerSaveDot
        );

        if (!isPlayerCreated) {
            throw new HttpException(
                'Player with this name already registered for the game',
                HttpStatus.OK
            );
        } else {
            throw new HttpException(
                'Player with this name registered',
                HttpStatus.OK
            );
        }
    }
}
