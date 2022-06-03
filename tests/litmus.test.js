/* globals expect it */
const app = require('../server')
const supertest = require('supertest')
const request = supertest(app)

it('Testando para ver se o Jest funciona', () => {
  expect(1).toBe(1)
})

it('obtém o endpoint de teste', async done => {
  const response = await request.get('/test')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})
