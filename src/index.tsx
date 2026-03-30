import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { RootLayout } from './layouts/RootLayout'
import issueRouter from './routes/issueRouter'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(<RootLayout>{content}</RootLayout>)
  })
  await next()
})

app.route('/issue', issueRouter)

/**
 * Error Handling: Global Listener
 */
app.onError((err, c) => {
  console.error(`[Error]: ${err}`)
  return c.text('An unexpected error occurred', 500)
})

export default app