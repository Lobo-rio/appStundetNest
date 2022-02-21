import { Test } from '@nestjs/testing';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

describe('TeachersController', () => {
  let controller: TeachersController;
  let service: TeachersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [TeachersController],
        providers: [TeachersService],
      }).compile();

    service = moduleRef.get<TeachersService>(TeachersService);
    controller = moduleRef.get<TeachersController>(TeachersController);
  });

  describe('findAll', () => {
    it('should return an array of teachers', async () => {
      const result = [
        {
          id: 1,
          name: 'Andreia Mattos',
          email: 'andreia@gmail.com',
          cel: 21978485858,
          matter: ['Informática', 'Matemática', 'Inglês']
        },
      ];

      const response = controller.findAll();

      expect(response[0].id).toBe(result[0].id);
    });

  });

  describe('findOne', () => {
    it('should return an of teacher', async () => {
      const result = {
        id: 1,
        name: 'Andreia Mattos',
        email: 'andreia@gmail.com',
        cel: 21978485858,
        matter: ['Informática', 'Matemática', 'Inglês']
      };

      const id = '1';
      const response = controller.findOne(id);

      expect(response.id).toBe(result.id);

    });
  });


  describe('create', () => {
    it('should return an of teacher save', async () => {
      const createTeacherDto =
        {
          id: 2,
          name: 'Raphael Silva',
          email: 'raphael@gmail.com',
          cel: 21978485123,
          matter: ['Informática', 'Matemática', 'Inglês']
        };

      const response = controller.create(createTeacherDto);

      expect(response.id).toBe(2);
    });
  });

});
