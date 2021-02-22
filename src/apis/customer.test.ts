import request from 'supertest';
import app from '../app';
import { Customer } from '../declaration';

describe('Test Customers API', () => {
  it('should return 2 customers from "/customers/newest" endpoint', () => {
    return request(app)
      .get('/customers/newest')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        const jsonArray: [JSON] = JSON.parse(JSON.stringify(response.body));
        const customers: Customer[] = jsonArray.map(
          json => (json as unknown) as Customer
        );
        expect(customers.length).toEqual(2);
        expect(customers[0].first).toBe('Tony');
        expect(customers[0].last).toBe('Stark');
        expect(customers[1].first).toBe('Joy');
        expect(customers[1].last).toBe('Pinilla');
      });
  });
});
