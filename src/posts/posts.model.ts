import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript'

import { User } from '../users/users.model'

interface IPostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'posts ' })
export class Post extends Model<Post, IPostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  title: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content: string

  @Column({
    type: DataType.STRING
  })
  image: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User
}
