import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { ManyItems } from '../types/types'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('/')
  async getAll(
    @Query('skip') skip,
    @Query('take') take
  ): Promise<ManyItems<User[]>> {
    return this.usersService.getAll(take, skip)
  }

  @Get('/status/:userId')
  async getStatusByUserId(@Param('userId') userId: string) {
    return this.usersService.getStatusByUserId(userId)
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId)
  }

  @Post('/')
  async create(@Body() user): Promise<User> {
    return this.usersService.create(user)
  }

  @Patch('/:userId')
  async update(
    @Param('userId') userId: string,
    @Body() userDto: User
  ) {
    return await this.usersService.update(userDto, userId)
  }
}