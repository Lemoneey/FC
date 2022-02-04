import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post
} from '@nestjs/common';
import { PlayerSaveDto } from './dto/player_save.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Post()
    async savePlayer(@Body() playerSaveDot: PlayerSaveDto) {
        const isPlayerCreated = await this.playersService.savePlayer(
            playerSaveDot
        );

        if (!isPlayerCreated) {
            throw new HttpException(
                'Player with this name already exists',
                HttpStatus.OK
            );
        } else {
            throw new HttpException(
                'Player with this name created',
                HttpStatus.OK
            );
        }
    }
}
