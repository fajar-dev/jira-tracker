import type { FC } from 'hono/jsx'

export const SidebarSection: FC<{ fields: any, activeSprint: any, completedSprints: any[], formatDate: (d: string) => string }> = ({ fields, activeSprint, completedSprints, formatDate }) => (
  <aside className="space-y-6 order-2 lg:order-2">
    <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Status</label>
          <div className="inline-flex items-center px-2.5 py-1 bg-surface-container-highest text-on-surface rounded font-bold text-xs border border-outline-variant/50 uppercase">{fields.status.name}</div>
        </div>
        <div className="text-right">
          <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Watchers</label>
          <div className="flex items-center gap-1 text-sm font-bold text-on-surface justify-end">
            <span className="material-symbols-outlined text-[10px]">visibility</span>
            {fields.watches.watchCount}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
        <div>
          <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Sprint</label>
          {activeSprint ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-on-surface">{activeSprint.name}</div>
              {completedSprints.length > 0 && <div className="text-[10px] text-on-surface-variant">Previously: {completedSprints[0].name}</div>}
            </div>
          ) : <span className="text-sm text-on-surface-variant italic">No active sprint</span>}
        </div>

        {[
          { label: 'Assignee', user: fields.assignee },
          { label: 'Reporter', user: fields.reporter },
          { label: 'Creator', user: fields.creator }
        ].map(item => (
          <div key={item.label}>
            <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">{item.label}</label>
            <div className="flex items-center gap-3">
              {item.user ? (
                <>
                  <img alt={item.label} className="w-5 h-5 rounded-full object-cover" src={item.user.avatarUrls['32x32']} />
                  <span className="text-sm font-medium text-on-surface">{item.user.displayName}</span>
                </>
              ) : <span className="text-sm text-on-surface-variant italic">Unassigned</span>}
            </div>
          </div>
        ))}

        <div>
          <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Priority</label>
          <div className="flex items-center gap-2">
            <img src={fields.priority.iconUrl} alt={fields.priority.name} className="w-4 h-4" />
            <span className="text-sm font-medium text-on-surface">{fields.priority.name}</span>
          </div>
        </div>

        {fields.labels?.length > 0 && (
          <div>
            <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Labels</label>
            <div className="flex flex-wrap gap-1.5">
              {fields.labels.map((label: string) => (
                <span key={label} className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-bold text-[10px] rounded uppercase">{label}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-outline-variant/30 space-y-2">
        {['Created', 'Updated'].map(key => (
          <div key={key} className="flex justify-between text-[11px] text-on-surface-variant">
            <span>{key} {formatDate(fields[key.toLowerCase()])}</span>
          </div>
        ))}
      </div>
    </div>
  </aside>
)
