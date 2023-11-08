import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.ru', description: 'E-mail адрес' })
  readonly email: string;

  @ApiProperty({ example: 'pa$$W0rd', description: 'Пароль' })
  readonly password: string;
}
