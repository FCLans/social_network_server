import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { Photo } from './entity/photo.entity'
import { PhotosService } from './photos.service'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import {v4} from 'uuid'

@Controller('photo')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post('/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async createPhoto(
    @Param('userId') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return await this.photosService.createPhoto(file, userId)
  }

  @Delete('/:userId')
  async deletePhoto(@Param('userId') userId: string) {
    return await this.photosService.deletePhoto(userId)
  }
}
