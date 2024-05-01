import { Module } from '@nestjs/common';

// Modules:
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule]
})
export class AppModule {}
