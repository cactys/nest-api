import { ApiProperty } from '@nestjs/swagger';
import {
  // BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
// import { User } from 'src/users/users.model';

interface FileCreationAttr {
  name: string;
  type: string;
}

@Table({ tableName: 'files' })
export class File extends Model<File, FileCreationAttr> {
  @ApiProperty({ example: '8', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  type: string;

  @Column({ type: DataType.STRING })
  accessLink: string;

  @Column({ type: DataType.BIGINT })
  size: bigint;

  // @Column({ type: DataType.STRING })
  // path: string;

  @Column({ type: DataType.DATE })
  date: string;

  // @BelongsTo(() => User)
  // user: User;
}
