import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.ru', description: 'E-mail адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: 'pa$$W0rd', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 32, { message: 'Не меньше 6 и не больше 32' })
  readonly password: string;
}
