import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

import { User } from '../users/users.model'
import { UserRoles } from '../roles/user-roles.model'

interface IRoleCreationAttrs {
  value: string
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, IRoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'User id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  value: string

  @ApiProperty({ example: 'Rules it all', description: 'Role description' })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}
