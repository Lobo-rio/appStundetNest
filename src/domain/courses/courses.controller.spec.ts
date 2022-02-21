import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CoursesModule } from './courses.module';
import { CoursesService } from './courses.service';

describe('Courses', () => {
  let app: INestApplication;
  let courseService = { findAll: () =>  [
        {
          id: 1,
          name: '5 Ano',
          description: '5 Ano letivo 2022',
          period:  'Manhã',
          theachers: [ '1' ],
          students: [ '1' ]
        },
      ]
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CoursesModule],
    })
      .overrideProvider(CoursesService)
      .useValue(courseService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET courses findAll`, () => {
    return request(app.getHttpServer())
      .get('/courses')
      .expect(200)
      .expect(courseService.findAll());
  });

  it(`/GET courses findOne`, () => {
    return request(app.getHttpServer())
      .get('/courses')
      .expect(200);
  });

  it(`/POST courses create`, () => {
    return request(app.getHttpServer())
      .post('/courses')
      .expect(500);
  });

  afterAll(async () => {
    await app.close();
  });
});
