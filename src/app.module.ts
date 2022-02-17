import { Module } from '@nestjs/common';
import { StudentsController } from './domain/students/students.controller';
import { StudentsModule } from './domain/students/students.module';
import { StudentsService } from './domain/students/students.service';

@Module({
  imports: [StudentsModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class AppModule {}
