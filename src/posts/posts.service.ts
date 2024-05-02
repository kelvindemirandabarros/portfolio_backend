import { Injectable } from '@nestjs/common';
import { v4 as uuid_v4 } from 'uuid';

import { Post } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsFilteredDto } from './dto/get-posts-filtered.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  get_all_posts(): Post[] {
    return this.posts;
  }

  get_posts_with_filters(filter_dto: GetPostsFilteredDto): Post[] {
    const { search } = filter_dto;

    const posts_filtered = this.posts.filter((post) => {
      if (post.title.includes(search) || post.description.includes(search)) {
        return true;
      }

      return false;
    });

    return posts_filtered;
  }

  create_post(create_post_dto: CreatePostDto): Post {
    const { title, description } = create_post_dto;

    const post: Post = {
      id: uuid_v4(),
      title: title,
      description: description,
      images_url: []
    };

    this.posts.push(post);

    return post;
  }

  get_post_by_id(id: string): Post {
    return this.posts.find((post) => post.id === id);
  }

  delete_post(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  update_post_title(id: string, title: string): Post {
    const post = this.get_post_by_id(id);

    post.title = title;

    return post;
  }

  update_post_description(id: string, description: string): Post {
    const post = this.get_post_by_id(id);

    post.description = description;

    return post;
  }
}
