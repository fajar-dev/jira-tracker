import type { FC } from 'hono/jsx'

export const LinkedIssues: FC<{ links: any[] }> = ({ links }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-bold tracking-tight">Linked Issues</h2>
    <div className="space-y-2">
      {links?.map((link: any) => {
        const issue = link.outwardIssue || link.inwardIssue
        const type = link.type.inward || link.type.outward
        const status = issue.fields.status
        const isDone = status.statusCategory.key === 'done'
        const pty = issue.fields.priority

        return (
          <div key={link.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="text-xs font-bold text-on-surface-variant w-20 sm:w-24 shrink-0">{type}</span>
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <img src={issue.fields.issuetype.iconUrl} alt="Type" className="w-4 h-4 shrink-0" />
                <span className="text-sm font-medium text-primary whitespace-nowrap shrink-0">{issue.key}</span>
                <span className="text-sm text-on-surface truncate max-w-[450px]" title={issue.fields.summary}>{issue.fields.summary}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end shrink-0">
              <img src={pty.iconUrl} alt={pty.name} title={pty.name} className="w-4 h-4" />
              <span className={`px-2 py-0.5 ${isDone ? 'bg-surface-container-highest' : 'bg-secondary-container text-on-secondary-container'} text-[10px] font-bold rounded uppercase`}>
                {status.name}
              </span>
            </div>
          </div>
        )
      })}
      {(!links || links.length === 0) && (
        <p className="text-sm text-on-surface-variant italic">No linked issues.</p>
      )}
    </div>
  </div>
)
