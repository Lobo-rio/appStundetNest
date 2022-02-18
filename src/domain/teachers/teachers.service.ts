import { Injectable } from '@nestjs/common';
import { TeachersEntity } from './entities/Teachers.entity';

@Injectable()
export class TeachersService {
  private teachers: TeachersEntity[] = [
    {
      id: 1,
      name: 'Andreia Mattos',
      email: 'andreia@gmail.com',
      cel: 21978485858,
      matter: ['Informática', 'Matemática', 'Inglês']
    },
  ]

  findAll(){
    return this.teachers;
  }

  findOne(id: string){
    return this.teachers.find((teacher) => teacher.id === Number(id));
  }

  create(createTeacherDto: any){
    this.teachers.push(createTeacherDto);
    return createTeacherDto;
  }

  update(id: string, updateTeacherDto: any){
    const indexTeacher = this.teachers.findIndex(
      (teacher) => teacher.id === Number(id),
    );

    this.teachers[indexTeacher] = updateTeacherDto;
  }

  remove(id: string){
    const indexTeacher = this.teachers.findIndex(
      (teacher) => teacher.id === Number(id),
    );

    if (indexTeacher >= 0) {
      this.teachers.splice(indexTeacher, 1);
    }
  }

}
