import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [BooksModule, UsersModule, PostsModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
