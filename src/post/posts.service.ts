import { Injectable } from '@nestjs/common';
import { Post } from './posts.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { FilesService } from 'src/files/files.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private userRepository: UsersService,
    private fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const userName = await this.userRepository.getUserByName(dto.name);
    console.log(userName.name);
    const fileName = await this.fileService.createFile(
      image,
      '.jpg',
      userName.name,
    );
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }
}
