import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTeacherDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  readonly cel: number;

  @IsNotEmpty()
  readonly matter: string[];

}
