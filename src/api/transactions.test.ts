import request from 'supertest';
import app from '../app';
import { Transaction } from '../declaration';

describe('Test Transactions API', () => {
  it('should return correct count for GET /transactions/count', () => {
    return request(app)
      .get('/transactions/count')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => expect(res.body).toEqual({ total: 42 }));
  });

  it('should return 1 transaction for GET /transactions/recent', () => {
    return request(app)
      .get('/transactions/recent')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        const jsonArray: [JSON] = JSON.parse(JSON.stringify(res.body));
        expect(jsonArray).toHaveLength(1);
        const transactions: Transaction[] = jsonArray.map(
          json => (json as unknown) as Transaction
        );
        expect(transactions).toHaveLength(1);
        expect(transactions[0]['amount']).toEqual(100.23);
        expect(transactions[0]['isDebit']).toEqual(false);
        expect(transactions[0]).toHaveProperty('when');
      });
  });
});
