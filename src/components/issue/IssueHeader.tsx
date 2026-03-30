import type { FC } from 'hono/jsx'
import { Breadcrumbs } from './Breadcrumbs'

export const IssueHeader: FC<{ fields: any, id: string, storyPoints: any }> = ({ fields, id, storyPoints }) => (
  <header className="mb-6 space-y-4">
    <Breadcrumbs project={fields.project} issueKey={id} />
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <img src={fields.issuetype.iconUrl} alt={fields.issuetype.name} className="w-6 h-6 mt-1.5 shrink-0" />
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface break-words leading-tight">
          {fields.summary}
        </h1>
      </div>
      {storyPoints && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/30 shrink-0 self-start sm:self-auto">
          <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Story Points</span>
          <span className="px-2 py-0.5 bg-primary text-on-primary rounded-full text-xs font-bold">{storyPoints}</span>
        </div>
      )}
    </div>
  </header>
)
