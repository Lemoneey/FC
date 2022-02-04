import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';
export class PlayerSaveDto {
    @ApiProperty({ required: true })
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsDate()
    whichGame: Date;
}
