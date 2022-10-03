import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Book, Prisma } from '@prisma/client';

@Injectable()
export class BooksService {

  constructor(private prisma: PrismaService) { }

  async create(createBookDto: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({
      data: createBookDto
    });
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // async findOne(id: number): Promise<Book | null> {
  //   return this.prisma.book.findUnique({
  //     where: { id }
  //   });
  // }

  async findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput
  ): Promise<Book> {
    return this.prisma.book.update({
      data,
      where
    });
  }

  async remove(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.delete({ where });
  }
}
