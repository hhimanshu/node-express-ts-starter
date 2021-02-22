import request from 'supertest';
import app from '../app';

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
