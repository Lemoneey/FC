import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
    @ApiProperty({ required: true })
    date: Date;
}
