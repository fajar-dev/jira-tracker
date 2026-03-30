import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { RootLayout } from './layouts/RootLayout'
import issueRouter from './routes/issueRouter'
import { config } from './config'

const app = new Hono<{ Variables: { title?: string } }>().basePath('/jira-tracker')

app.use('/static/*', serveStatic({ 
  root: './',
  rewriteRequestPath: (path) => path.replace(/^\/jira-tracker/, '')
}))
app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    const title = c.get('title') as string
    return c.html(<RootLayout title={title}>{content}</RootLayout>)
  })
  await next()
})

app.route('/', issueRouter)

/**
 * Error Handling: Global Listener
 */
app.onError((err, c) => {
  console.error(`[Error]: ${err}`)
  return c.text('An unexpected error occurred', 500)
})

export default {
  port: config.app.port,
  fetch: app.fetch,
}