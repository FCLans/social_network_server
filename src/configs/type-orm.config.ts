import * as dotenv from 'dotenv'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '../modules/domains/users/entity/user.entity'
import { Photo } from '../modules/domains/users/entity/photo.entity'
import { Contact } from '../modules/domains/users/entity/contact.entity'
dotenv.config()

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    User,
    Photo,
    Contact
  ],
  synchronize: true,
}