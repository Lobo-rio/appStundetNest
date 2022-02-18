import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {
  readonly id:number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  //@IsDate()
  @IsNotEmpty()
  readonly age: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly series: number;
}
