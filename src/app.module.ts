import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module'
import { UserRoles } from './roles/user-roles.model'
import { User } from './users/users.model'
import { Role } from './roles/roles.model'
import { Post } from './posts/posts.model'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule
  ]
})

export class AppModule {}
