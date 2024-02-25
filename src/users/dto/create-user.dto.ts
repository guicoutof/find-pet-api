import { IsNotEmpty, IsString, MinLength, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
