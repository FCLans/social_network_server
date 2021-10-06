import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
import * as sharp from 'sharp'
import { Photo } from '../../modules/domains/photos/entity/photo.entity'

@Injectable()
export class UploadFileService {

  async createPhoto(file: Express.Multer.File, userId: string): Promise<Omit<Photo, 'id'>> {
    const rootPath = `img/avatars/${userId}`
    const fileName = uuid.v4() + `.${file.mimetype.split('/')[1]}`
    const filePath = path.resolve(__dirname, '..', '..', 'static', 'img', 'avatars', userId)

    if(!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, {
        recursive: true
      })
    }

    await fs.writeFileSync((path.join(filePath, fileName)), file.buffer)

    await sharp(path.join(filePath, fileName))
      .resize(200, 200)
      .toFile(path.join(filePath, 'avatar_small.png'))

    await sharp(path.join(filePath, fileName))
      .resize(400, 400)
      .toFile(path.join(filePath, 'avatar_large.png'))

    await fs.unlinkSync(path.join(filePath, fileName))

    return {
      small: `${rootPath}/avatar_small.png`,
      large: `${rootPath}/avatar_large.png`
    }
  }
}