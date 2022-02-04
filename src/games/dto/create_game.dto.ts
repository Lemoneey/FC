import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class CreateGameDto {
    @ApiProperty({ required: true })
    @IsDate()
    date: Date;
}
