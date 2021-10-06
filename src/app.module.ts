import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfig } from './configs/type-orm.config'
import { UsersModule } from './modules/domains/users/users.module'
import { PhotosModule } from './modules/domains/photos/photos.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeOrmConfig),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'dist', 'static')
    }),
    UsersModule,
    PhotosModule
  ],
})
export class AppModule {
}
