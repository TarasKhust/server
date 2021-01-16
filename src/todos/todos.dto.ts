import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly text: string;

  @ApiProperty()
  readonly complete: boolean;
}
