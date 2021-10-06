import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Photo } from './entity/photo.entity'
import { Repository } from 'typeorm'
import { User } from '../users/entity/user.entity'
import { UploadFileService } from '../../../services/uploadFile/uploadFile.service'

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private uploadFileService: UploadFileService
  ) {}

  async createPhoto(file, userId: string) {
    const photos = await this.uploadFileService.createPhoto(file, userId)

    let user = await this.userRepository.findOne({
      where: {id: userId},
      relations: ['photos']
    })

    user.photos = await this.photoRepository.save({...photos, id: user.photos?.id})

    user = await this.userRepository.save(user)

    return user.photos
  }

  async deletePhoto(userId: string) {
    const user = await this.userRepository.findOne({
      where: {id: userId},
      relations: ['photos']
    })

    const photos = {
      id: user.photos.id,
      small: null,
      large: null
    }

    return await this.photoRepository.save(photos)
  }
}
