import { Hono } from 'hono'
import IssueDetailPage from '../pages/IssueDetailPage'

const issueRouter = new Hono()

// Root for /issue/:id
issueRouter.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.render(<IssueDetailPage id={id} />)
})

export default issueRouter
