import { Hono } from 'hono'
import { hello } from './api/hello'

const app = new Hono()

app.get('/api/hello', hello)

export default app
