import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  HasMany
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

import { Role } from '../roles/roles.model'
import { UserRoles } from '../roles/user-roles.model'
import { Post } from '../posts/posts.model'

interface IUserCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'User id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  })
  id: number

  @ApiProperty({ example: 'user@mail.com', description: 'User email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string

  @ApiProperty({ example: '12345678', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string

  @ApiProperty({ example: 'true', description: 'User is banned' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  banned: boolean

  @ApiProperty({ example: 'Spam', description: 'User ban reason' })
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}
