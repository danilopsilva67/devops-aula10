const request = require('supertest');
const app = require('../server');

describe('Testes de Integração e Rota de Healthcheck', () =&gt; {
  it('Deve retornar status 200 no endpoint /health', async () =&gt; {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
  });
});
