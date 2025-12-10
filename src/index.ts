import { Hono } from 'hono'
import { hello } from './api/hello'
import { login } from './api/login'

const app = new Hono()

app.get('/api/hello', hello)
app.post('/api/login', login)

export default app
