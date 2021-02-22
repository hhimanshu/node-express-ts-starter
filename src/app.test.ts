import request from 'supertest';
import app from './app';

describe('The simple test', () => {
  it('should add 2+2 = 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Test Index "/" API', () => {
  it('should return 200 OK for a GET request', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .then(response =>
        expect(response.text).toBe('Hello TypeScript + NodeJS + ExpressJS')
      );
  });
});
