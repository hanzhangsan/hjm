import { serve } from '@hono/node-server'
import { Hono , Context} from 'hono'

export const login = async (c: Context) => {
    const json = await c.req.json<{name:string}>()
    return c.text(json.name)
}