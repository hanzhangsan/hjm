import { Hono } from 'hono'
import hello from './api/hello'
// import user from './api/user'
// import login from './api/login'

const app = new Hono()

app.route('/api/hello', hello)
// app.route('/api/user', user)
// app.route('/api/login', login)

export default app
