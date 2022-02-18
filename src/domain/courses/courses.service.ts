import { Injectable } from '@nestjs/common';
import { CoursesEntity } from './entities/Courses.entity';

@Injectable()
export class CoursesService {
  private courses:CoursesEntity[] = [
    {
      id: 1,
      name: '5 Ano',
      description: '5 Ano letivo 2022',
      period:  'Manhã',
      theachers: [ '1' ],
      students: [ '1' ]
    },
  ];

  findAll(){
    return this.courses;
  }

  findOne(id: string){
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any){
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any){
    const indexCourse = this.courses.findIndex((course)=> course.id === Number(id));

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string){
    const indexCourse = this.courses.findIndex((course)=> course.id === Number(id));

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }

}
