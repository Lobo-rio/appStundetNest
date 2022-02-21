import { Test } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CoursesEntity } from './entities/Courses.entity';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CoursesController],
        providers: [CoursesService],
      }).compile();

    service = moduleRef.get<CoursesService>(CoursesService);
    controller = moduleRef.get<CoursesController>(CoursesController);
  });

  describe('findAll', () => {
    it('should return an array of courses', async () => {
      const result = [
        {
          id: 1,
          name: '5 Ano',
          description: '5 Ano letivo 2022',
          period:  'Manhã',
          theachers: [ '1' ],
          students: [ '1' ]
        },
        {
          id: 1,
          name: '5 Ano',
          description: '5 Ano letivo 2022',
          period:  'Manhã',
          theachers: [ '1' ],
          students: [ '1' ]
        },
      ];

      const response = controller.findAll();

      expect(response[0].id).toBe(result[0].id);
    });

  });

  describe('findOne', () => {
    it('should return an of course', async () => {
      const result = {
          id: 1,
          name: '5 Ano',
          description: '5 Ano letivo 2022',
          period:  'Manhã',
          theachers: [ '1' ],
          students: [ '1' ]
        };

      const id = '1';
      const response = controller.findOne(id);

      expect(response.id).toBe(result.id);

    });
  });


  describe('create', () => {
    it('should return an of course save', async () => {
      const createCourseDto =
        {
          id: 2,
          name: '6 Ano',
          description: '6 Ano letivo 2022',
          period:  'Manhã',
          theachers: [ '1' ],
          students: [ '1' ]
        };

      const response = controller.create(createCourseDto);

      expect(response.id).toBe(2);
    });
  });

});
