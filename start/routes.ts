import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'niomads' }
})

// API
Route.group(() => {
  Route.get('/users', 'UserController.apiIndex')
  Route.get('/users/:userId', 'UserController.getById')
}).middleware('auth').prefix('/api')

// AUTH
Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout')
}).prefix('/auth')