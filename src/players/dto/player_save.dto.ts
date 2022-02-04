import { ApiProperty } from '@nestjs/swagger';
export class PlayerSaveDto {
    @ApiProperty({ required: true })
    name: string;
}
