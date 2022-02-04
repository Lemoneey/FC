import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class PlayerSaveDto {
    @ApiProperty({ required: true })
    @IsString()
    name: string;
}
