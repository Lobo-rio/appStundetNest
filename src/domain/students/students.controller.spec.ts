import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { StudentsModule } from './students.module';
import { StudentsService } from './students.service';

describe('Students', () => {
  let app: INestApplication;
  let studentsService = { findAll: () =>  [
        {
          id: 1,
          name: 'Gilberto Medeiros',
          age: '1970-05-08T03:00:00.000Z',
          series: 3
        },
      ]
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [StudentsModule],
    })
      .overrideProvider(StudentsService)
      .useValue(studentsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET students findAll`, () => {
    return request(app.getHttpServer())
      .get('/students')
      .expect(200)
      .expect(studentsService.findAll());
  });

  it(`/GET students findOne`, () => {
    return request(app.getHttpServer())
      .get('/students')
      .expect(200);
  });

  it(`/POST students create`, () => {
    return request(app.getHttpServer())
      .post('/students')
      .expect(500);
  });

  afterAll(async () => {
    await app.close();
  });

});
