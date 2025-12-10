import { Hono } from "hono";
var app = new Hono
app.post('/', (c) => {
    return c.text('POST /')
})