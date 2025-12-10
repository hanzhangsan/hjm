import type { Context } from 'hono'

export const hello = (c: Context) => {
  return c.json({ msg: 'Hello API' })
}
