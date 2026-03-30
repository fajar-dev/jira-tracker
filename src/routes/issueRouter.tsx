import { Hono } from 'hono'
import IssueDetailPage from '../pages/IssueDetailPage'
import { issueService } from '../services/issueService'

const issueRouter = new Hono<{ Variables: { title?: string } }>()

// Root for /issue/:id
issueRouter.get('/:id', async (c) => {
  const id = c.req.param('id')
  
  try {
    const data = await issueService.getIssueById(id)
    c.set('title', `${id}: ${data.fields.summary}`)
    return c.render(
      <IssueDetailPage id={id} fields={data.fields} />
    )
  } catch (error) {
    c.set('title', 'Error Loading Issue')
    return c.render(
      <div className="p-10 text-center space-y-4">
        <span className="material-symbols-outlined text-error text-5xl">warning</span>
        <h2 className="text-xl font-bold">Error loading issue</h2>
        <p className="text-on-surface-variant font-medium">{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    )
  }
})

export default issueRouter
