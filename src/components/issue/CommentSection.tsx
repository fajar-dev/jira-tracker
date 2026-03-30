import type { FC } from 'hono/jsx'
import { ADFRenderer } from './ADFRenderer'

export const CommentSection: FC<{ comment: any, formatDate: (d: string) => string }> = ({ comment, formatDate }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-bold tracking-tight">Comments</h2>
    <div className="space-y-6 pt-2">
      {comment?.comments.map((item: any) => (
        <div key={item.id} className="flex gap-3 sm:gap-4">
          {item.author.displayName === 'Automation for Jira' ? (
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[18px] text-primary">robot_2</span>
            </div>
          ) : (
            <img alt={item.author.displayName} className="w-8 h-8 rounded-full object-cover shrink-0" src={item.author.avatarUrls['48x48']} />
          )}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
              <span className="font-bold text-sm text-on-surface">{item.author.displayName}</span>
              <span className="text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest font-medium">{formatDate(item.created)}</span>
            </div>
            <div className="text-sm text-on-surface-variant leading-relaxed">
              <ADFRenderer content={item.body.content} />
            </div>
          </div>
        </div>
      ))}
      {(!comment?.comments || comment.comments.length === 0) && (
        <p className="text-sm text-on-surface-variant italic">No comments yet.</p>
      )}
    </div>
  </div>
)
