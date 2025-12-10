import { Hono } from 'hono'

const app = new Hono()

app.get('/', c => c.json({ msg: "Hello API" }))

export default app
