import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'User email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Must be between 4 and 16 characters' })
  readonly password: string
}
