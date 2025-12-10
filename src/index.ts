import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/home', (c) => {
  return c.text('Hello home!')
})

export default app
