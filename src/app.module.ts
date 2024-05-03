import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules:
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      database: 'portfolio_db',
      autoLoadEntities: true,
      synchronize: true
    })
  ]
})
export class AppModule {}
