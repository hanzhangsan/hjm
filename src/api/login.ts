import { serve } from '@hono/node-server'
import { Hono , Context} from 'hono'

export const login = async (c: Context) => {
    const json = await c.req.json<{name:string;password:string}>()
    if(!json.name||!json.password){
         return c.json({
            code:400,
            msg:"账户名称与密码不能为空"
         },400)
    }
    return c.json({
        code:200,
        data:{
            name:json.name,
            password:json.name
        }
    })
}