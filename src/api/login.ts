import { serve } from '@hono/node-server'
import { Hono , Context} from 'hono'

export const login = async (c: Context) => {
    const json = await c.req.json<{name:string;password:string}>()
    const db = c.env.MYSQL
    if(!json.name||!json.password){
         return c.json({
            code:400,
            msg:"账户名称与密码不能为空"
         },400)
    }
    var user = await db
    .prepare('SELECT * FROM users WHERE name = ?')
    .bind(json.name)
    .get()
    if(!user){
        return c.json({
            code:400,
            msg:"用户不存在"
        })
    }
    return c.json({
        code:200,
        data:user
    },200)
}