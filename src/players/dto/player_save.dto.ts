import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
export class PlayerSaveDto {
    @ApiProperty({ required: true })
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsDateString()
    whichGame: Date;
}
