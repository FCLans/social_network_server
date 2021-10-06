import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../users/entity/user.entity'
import { Photo } from './entity/photo.entity'
import { UploadFileService } from '../../../services/uploadFile/uploadFile.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Photo])
  ],
  controllers: [PhotosController],
  providers: [PhotosService, UploadFileService]
})
export class PhotosModule {}
