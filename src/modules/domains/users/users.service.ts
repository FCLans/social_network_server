import { Injectable } from '@nestjs/common'
import { IUserEntity, User } from './entity/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
  }
  async getAll(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['photos', 'contacts']
    })
  }

  async create(user): Promise<User> {
    const createUser = await this.userRepository.save(user)
    return createUser
  }
}