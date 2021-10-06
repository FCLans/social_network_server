import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfig } from './configs/type-orm.config'
import { UsersModule } from './modules/domains/users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeOrmConfig),
    UsersModule
  ],
})
export class AppModule {
}
