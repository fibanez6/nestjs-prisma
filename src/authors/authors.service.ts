import { Injectable } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorsService {

  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    return this.prisma.author.create({
      data
    });
  }

  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany();
  }

  async findOne(where: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    return this.prisma.author.findUnique({
      where
    });
  }

  async update(
    where: Prisma.AuthorWhereUniqueInput, 
    data: Prisma.AuthorUpdateInput
  ): Promise<Author> {
    return this.prisma.author.update({
      data,
      where
    });
  }

  async remove(where: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    return this.prisma.author.delete({ where });
  }
}
