import { Injectable } from '@nestjs/common'
import { User } from './entity/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { ManyItems } from '../types/types'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
  }

  async getAll(take = 20, skip = 0): Promise<ManyItems<User[]>> {
    const items = await this.userRepository.find({
      take,
      skip
    })

    const count = await this.userRepository.count()
    
    return {
      items: items,
      count: count
    }
  }

  async create(user: User): Promise<User> {
    const createUser = await this.userRepository.create(user)

    return await this.userRepository.save(createUser)
  }

  async getStatusByUserId(userId: string) {
    return await this.userRepository.findOne({
      where: {id: userId},
      select: ['status', 'fullName', 'id']
    })
  }

  async getUserById(userId: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {id: userId},
      relations: ['photos', 'contacts']
    })
  }

  async update(userDto: User, userId: string): Promise<User> {
    let user = await this.userRepository.findOne({
      where: {id: userId}
    })

    user = {...user, ...userDto}

    return await this.userRepository.save(user)
  }
}