import { Test } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

describe('StudentsController', () => {
  let controller: StudentsController;
  let service: StudentsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [StudentsController],
        providers: [StudentsService],
      }).compile();

    service = moduleRef.get<StudentsService>(StudentsService);
    controller = moduleRef.get<StudentsController>(StudentsController);
  });

  describe('findAll', () => {
    it('should return an array of students', async () => {
      const result = [
        {
          id: 1,
          name: 'Gilberto Medeiros',
          age: new Date('05/08/1970'),
          series: 3
        },
      ];

      const response = controller.findAll();

      expect(response[0].id).toBe(result[0].id);
    });

  });

  describe('findOne', () => {
    it('should return an of student', async () => {
      const result = {
        id: 1,
        name: 'Gilberto Medeiros',
        age: new Date('05/08/1970'),
        series: 3
      };

      const id = '1';
      const response = controller.findOne(id);

      expect(response.id).toBe(result.id);

    });
  });


  describe('create', () => {
    it('should return an of student save', async () => {
      const createStudentDto =
        {
          id: 2,
          name: 'Andreia Mattos',
          age: new Date('17/06/1976'),
          series: 3
        };

      const response = controller.create(createStudentDto);

      expect(response.id).toBe(2);
    });
  });

});
