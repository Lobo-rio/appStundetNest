import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCourseDto {
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly period: string;

  @IsNotEmpty()
  readonly theachers: string[];

  @IsNotEmpty()
  readonly students: string[];
}
