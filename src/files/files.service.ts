import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import { UploadFileDto } from './dto/upload-file.dto';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './files.model';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File) private fileRepository: typeof File) {}

  async createFile(
    file,
    format: string,
    fileSavePath: string,
  ): Promise<string> {
    try {
      const fileName = uuid() + format;
      const filePath = path.resolve(__dirname, '..', 'static', fileSavePath);

      console.log(fileName);
      console.log(filePath);

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      throw new HttpException(
        'Произошло ошибка при загрузки файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createDir(dto: UploadFileDto): Promise<string> {
    try {
      const { userName, parent, pathDir } = dto;
      const dirPath = path.resolve(
        __dirname,
        '..',
        'static',
        userName,
        pathDir,
        parent,
      );

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      console.log(dirPath);

      return dirPath;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Произошло ошибка при создании папки',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async uploadFile() {}
}
