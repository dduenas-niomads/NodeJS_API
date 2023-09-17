import { test } from '@japa/runner'

test('display home', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ hello: 'niomads' })
})

test('display api users without token', async ({ client }) => {
  const response = await client.get('/api/users')

  response.assertStatus(401)
})