import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { IUserEntity, User } from './entity/user.entity'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll()
  }

  @Post()
  async create(@Body() user): Promise<User> {
    return this.usersService.create(user)
  }
}