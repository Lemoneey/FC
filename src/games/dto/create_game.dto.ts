import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class CreateGameDto {
    @ApiProperty({ required: true })
    @IsDateString()
    date: Date;
}
