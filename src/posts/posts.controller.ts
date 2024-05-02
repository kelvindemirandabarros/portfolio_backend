import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post as PostMethod,
  Query
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { Post } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsFilteredDto } from './dto/get-posts-filtered.dto';

@Controller('api/posts')
export class PostsController {
  constructor(private posts_service: PostsService) {}

  // GET https://<base_url>/api/posts
  // GET https://<base_url>/api/posts?search=<...>
  @Get()
  get_all_tasks(@Query() filter_dto: GetPostsFilteredDto): Post[] {
    // Se algum filtro for definido, chamar a função .get_posts_with_filters(), senão chama a .get_all_posts().
    if (Object.keys(filter_dto).length > 0) {
      return this.posts_service.get_posts_with_filters(filter_dto);
    } else {
      return this.posts_service.get_all_posts();
    }
  }

  // POST https://<base_url>/api/posts/
  @PostMethod()
  create_post(@Body() create_post_dto: CreatePostDto) {
    return this.posts_service.create_post(create_post_dto);
  }

  // GET https://<base_url>/api/posts/:id
  @Get('/:id')
  get_post_by_id(@Param('id') id: string): Post {
    return this.posts_service.get_post_by_id(id);
  }

  // DELETE https://<base_url>/api/posts/:id
  @Delete('/:id')
  delete_post(@Param('id') id: string): void {
    return this.posts_service.delete_post(id);
  }

  // PATCH https://<base_url>/api/posts/:id/title
  @Patch('/:id/title')
  update_post_title(
    @Param('id') id: string,
    @Body('title') title: string
  ): Post {
    return this.posts_service.update_post_title(id, title);
  }
}
