const request = require('supertest');
const app = require('../server');

describe('Testes de Integração e Rota de Healthcheck', () => {
  it('Deve retornar status 200 no endpoint /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});
