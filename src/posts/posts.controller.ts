import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post as PostMethod
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { Post } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('api/posts')
export class PostsController {
  constructor(private posts_service: PostsService) {}

  // GET https://<base_url>/posts/
  @Get()
  get_all_tasks(): Post[] {
    return this.posts_service.get_all_posts();
  }

  // POST https://<base_url>/posts/
  @PostMethod()
  create_post(@Body() create_post_dto: CreatePostDto) {
    return this.posts_service.create_post(create_post_dto);
  }

  // GET https://<base_url>/posts/:id
  @Get('/:id')
  get_post_by_id(@Param('id') id: string): Post {
    return this.posts_service.get_post_by_id(id);
  }

  // DELETE https://<base_url>/posts/:id
  @Delete('/:id')
  delete_post(@Param('id') id: string): void {
    return this.posts_service.delete_post(id);
  }

  // PATCH https://<base_url>/posts/:id/title
  @Patch('/:id/title')
  update_post_title(
    @Param('id') id: string,
    @Body('title') title: string
  ): Post {
    return this.posts_service.update_post_title(id, title);
  }
}
