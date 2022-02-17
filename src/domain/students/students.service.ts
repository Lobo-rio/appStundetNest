import { Injectable } from '@nestjs/common';
import { StudentsEntity } from './entities/Students.entity';

@Injectable()
export class StudentsService {
    private students: StudentsEntity[] = [
        {
            id: 1,
            name: 'Gilberto Medeiros',
            age: new Date('05/08/1970'),
            series: 3
        },
    ];

    findAll() {
        return this.students;
    }

    findOne(id: string) {
        return this.students.find((student) => student.id === Number(id));
    }

    create(createStudentDto: any ) {
        this.students.push(createStudentDto);
        return createStudentDto;
    }

    update(id: string, updateStudentsDto: any) {
        const indexStudent = this.students.findIndex(
            (student) => student.id === Number(id),
        );

        this.students[indexStudent] = updateStudentsDto;
    }

    remove(id: string){
        const indexStudent = this.students.findIndex(
            (student) => student.id === Number(id),
        );

        if (indexStudent >= 0) {
           this.students.splice(indexStudent, 1);
        }
    }

}
