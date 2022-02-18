import { Module } from '@nestjs/common';
import { StudentsController } from './domain/students/students.controller';
import { StudentsModule } from './domain/students/students.module';
import { StudentsService } from './domain/students/students.service';
import { TeachersModule } from './domain/teachers/teachers.module';

@Module({
  imports: [StudentsModule, TeachersModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class AppModule {}
