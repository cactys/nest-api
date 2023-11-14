import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { File } from './files.model';
import { UploadFileDto } from './dto/upload-file.dto';

@ApiTags('Файлы')
@Controller('files')
export class FilesController {
  constructor(private fileService: FilesService) {}

  @ApiOperation({ summary: 'Создать директорию' })
  @ApiResponse({ status: 200, type: File })
  @Post()
  createDir(@Body() dto: UploadFileDto) {
    return this.fileService.createDir(dto);
  }
}
