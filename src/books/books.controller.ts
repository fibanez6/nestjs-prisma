import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Book as BookModel, Prisma } from '@prisma/client';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: Prisma.BookCreateInput): Promise<BookModel> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<BookModel[]> {
    return this.booksService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<BookModel> {
  //   return this.booksService.findOne(+id);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: Prisma.BookUpdateInput): Promise<BookModel> {
    return this.booksService.update({ id: +id }, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.remove({ id: +id });
  }
}
