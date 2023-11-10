import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Заголовок',
    description: 'Уникальный заголовок поста',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Тут какой-то текст поста',
    description: 'Содержимое поста',
  })
  readonly content: string;

  @ApiProperty({ example: '3', description: 'Идентификатор пользователя' })
  readonly userId: number;
}
