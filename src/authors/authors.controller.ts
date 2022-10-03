import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {

  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() data: Prisma.AuthorCreateInput): Promise<Author> {
    return this.authorsService.create(data);
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Author> {
    return this.authorsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.AuthorUpdateInput): Promise<Author> {
    return this.authorsService.update({ id: +id }, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Author> {
    return this.authorsService.remove({ id: +id });
  }
}
