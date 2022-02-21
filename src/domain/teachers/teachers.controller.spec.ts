import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TeachersModule } from './teachers.module';
import { TeachersService } from './teachers.service';

describe('Teachers', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TeachersModule],
    })
      .overrideProvider(TeachersService)
      .useValue(TeachersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET teachers findAll`, () => {
    return request(app.getHttpServer())
      .get('/teachers')
      .expect(500);
  });

  it(`/GET teachers findOne`, () => {
    return request(app.getHttpServer())
      .get('/teachers')
      .expect(500);
  });

  it(`/POST teachers create`, () => {
    return request(app.getHttpServer())
      .post('/teachers')
      .expect(500);
  });

  afterAll(async () => {
    await app.close();
  });

});
