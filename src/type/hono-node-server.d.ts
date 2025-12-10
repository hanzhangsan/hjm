declare module '@hono/node-server' {
  import type { Hono } from 'hono'

  export function serve(app: Hono, options?: { port?: number }): void
}
