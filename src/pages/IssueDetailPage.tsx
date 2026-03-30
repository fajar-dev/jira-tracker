import type { FC } from 'hono/jsx'
import { issueService } from '../services/issueService'
import { ADFRenderer } from '../components/issue/ADFRenderer'
import { IssueHeader } from '../components/issue/IssueHeader'
import { AttachmentGrid } from '../components/issue/AttachmentGrid'
import { LinkedIssues } from '../components/issue/LinkedIssues'
import { CommentSection } from '../components/issue/CommentSection'
import { SidebarSection } from '../components/issue/SidebarSection'

const IssueDetailPage: FC<{ id: string }> = async ({ id }) => {
  let fields: any
  try {
    const data = await issueService.getIssueById(id)
    fields = data.fields
  } catch (error) {
    return (
      <div className="p-10 text-center space-y-4">
        <span className="material-symbols-outlined text-error text-5xl">warning</span>
        <h2 className="text-xl font-bold">Error loading issue</h2>
        <p className="text-on-surface-variant">{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    )
  }

  const { active: activeSprint, completed: completedSprints } = issueService.getSprintInfo(fields)
  const storyPoints = issueService.getStoryPoints(fields)
  const formatDate = (date: string) => issueService.formatDate(date)

  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      <IssueHeader fields={fields} id={id} storyPoints={storyPoints} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-12">
        <div className="space-y-10 min-w-0">
          <div className="space-y-3">
            <h2 className="text-lg font-bold tracking-tight">Description</h2>
            <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl ring-1 ring-black/[0.03] prose prose-slate max-w-none text-on-surface-variant leading-relaxed text-sm">
              {fields.description ? <ADFRenderer content={fields.description.content} /> : <i className="opacity-50">No description provided.</i>}
            </div>
          </div>

          <AttachmentGrid attachments={fields.attachment} formatDate={formatDate} />
          <LinkedIssues links={fields.issuelinks} />
          <CommentSection comment={fields.comment} formatDate={formatDate} />
        </div>

        <SidebarSection 
          fields={fields} 
          activeSprint={activeSprint} 
          completedSprints={completedSprints} 
          formatDate={formatDate} 
        />
      </div>
    </main>
  )
}

export default IssueDetailPage


