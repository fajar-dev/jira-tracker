import type { FC } from 'hono/jsx'

const IssueDetailPage: FC<{ id: string }> = ({ id }) => {
  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header & Breadcrumbs */}
      <header className="mb-6">
        <nav className="flex flex-wrap items-center gap-2 text-on-surface-variant mb-4">
          <span className="text-[12px] font-medium tracking-tight">Projects</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-[12px] font-medium tracking-tight">Nusawork HRIS</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-[12px] font-medium tracking-tight">{id}</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface">
          App: Handle tipe shift 24 jam yang beririsan jadwal kerjanya
        </h1>
      </header>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10">
        {/* Left Column: Content */}
        <section className="space-y-8 sm:space-y-10 order-1">
          {/* Description */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold tracking-tight">Description</h2>
            </div>
            <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl border-none ring-1 ring-black/[0.03]">
              <div className="prose prose-slate max-w-none text-on-surface-variant leading-relaxed text-sm space-y-4 font-body">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tanya ke <span className="text-primary font-medium">@Muhammad Sabrino Raharjo</span> untuk story isunya.</li>
                </ul>
                <p className="font-bold text-on-surface pt-2">Catatan pas meeting sprint planning 80:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Jika si user pilih clock in di schedule 2 maka, secara otomatis clock out-kan di schedule 1.</li>
                  <li>Namun, jika si user pilih clock out di schedule 1 jangan otomatiskan clock in di schedule 2.</li>
                  <li>Ada flow mau pilih clock out di schedule 1 atau clock in di schedule 2.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-3">Attachments</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col border border-outline-variant/30 rounded-lg overflow-hidden w-full sm:w-48 bg-surface-container-lowest">
                <div className="h-24 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">image</span>
                </div>
                <div className="p-3">
                  <div className="text-[11px] font-bold text-on-surface truncate">Screenshot 2024-12-17 at 15.45.55.png</div>
                  <div className="text-[10px] text-on-surface-variant">17 Dec 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Linked Issues */}
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-3">Linked Issues</h2>
            <div className="space-y-2">
              {[
                { type: 'relates to', key: 'HR-1106', summary: 'Integrasi API Nusawork Core', status: 'Done', statusClass: 'bg-surface-container-highest' },
                { type: 'relates to', key: 'ISV4-8809', summary: 'Logic overlap shift handling', status: 'Done', statusClass: 'bg-surface-container-highest' },
                { type: 'is blocked by', key: 'ISV4-10180', summary: 'Fix endpoint slicing schedule', status: 'In Progress', statusClass: 'bg-secondary-container text-on-secondary-container' }
              ].map(issue => (
                <div key={issue.key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 gap-2 sm:gap-3">
                  <div className="flex items-center gap-3 font-body">
                    <span className="text-xs font-bold text-on-surface-variant w-20 sm:w-24">{issue.type}</span>
                    <span className={`material-symbols-outlined text-[18px] ${issue.status === 'Done' ? 'text-primary' : 'text-tertiary'}`}>
                      {issue.status === 'Done' ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <span className="text-sm font-medium text-primary">{issue.key}</span>
                    <span className="text-sm text-on-surface truncate max-w-[150px] sm:max-w-none">{issue.summary}</span>
                  </div>
                  <div className="flex justify-end">
                    <span className={`px-2 py-0.5 ${issue.statusClass} text-[10px] font-bold rounded uppercase whitespace-nowrap`}>
                      {issue.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-6">
            <div className="border-b border-outline-variant/30">
              <nav className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
                <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">Comments</button>
                <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-medium text-sm whitespace-nowrap">History</button>
                <button className="pb-3 border-b-2 border-transparent text-on-surface-variant font-medium text-sm whitespace-nowrap">Work Log</button>
              </nav>
            </div>
            
            <div className="space-y-6 pt-4 font-body">
              {/* Comment from User */}
              <div className="flex gap-3 sm:gap-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GAz_V0YxbE_y0kYoxQnJswaBmNQmcbirpYiNxVinOnWsua6wPEODeLfPzPHg3Wf4yxhGJPOvAw1VCForkHEh7O_1oudUwJPiUdB4uSNLkR0NSgJKXSrNUJKpqbEav-xmbEe4RRm5hmXpYro23Q7YttRs6WQK24bLJUDhqpZo2PZ8ZSFZbQbCcpDDyBx4lyvxgYQWJmtFUnlmmG-AtCbEOM2loQXGGB2JEEUTyNQiHNQYlzLroB_CpnLxp3vs2i4D0tdged_lWsg" className="w-8 h-8 rounded-full object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <span className="font-bold text-sm text-on-surface">Yudi Setiawan</span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest font-medium">Jan 12, 2025</span>
                  </div>
                  <div className="text-sm text-on-surface-variant leading-relaxed">
                    Blocking karena dari endpoint slicing-nya error 500. Sudah koordinasi dengan tim backend untuk fix ini.
                  </div>
                </div>
              </div>

              {/* Automation Comments */}
              {[
                { date: 'Feb 02, 2025', text: 'The linked issue - ISV4-8809 has been resolved.' },
                { date: 'Feb 15, 2025', text: 'The linked issue - HR-1106 has been resolved.' },
                { date: 'Mar 01, 2026', text: 'Status changed to ToDo because blockers were cleared.' }
              ].map(automation => (
                <div key={automation.date} className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px] text-primary">robot_2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <span className="font-bold text-sm text-on-surface">Automation for Jira</span>
                      <span className="text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest font-medium">{automation.date}</span>
                    </div>
                    <div className="text-sm text-on-surface-variant">{automation.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Sidebar */}
        <aside className="space-y-6 order-2 lg:order-2">
          <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl space-y-6 font-body">
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Status</label>
              <div className="inline-flex items-center px-2.5 py-1 bg-surface-container-highest text-on-surface rounded font-bold text-xs border border-outline-variant/50">
                TO DO
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Assignee</label>
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GAz_V0YxbE_y0kYoxQnJswaBmNQmcbirpYiNxVinOnWsua6wPEODeLfPzPHg3Wf4yxhGJPOvAw1VCForkHEh7O_1oudUwJPiUdB4uSNLkR0NSgJKXSrNUJKpqbEav-xmbEe4RRm5hmXpYro23Q7YttRs6WQK24bLJUDhqpZo2PZ8ZSFZbQbCcpDDyBx4lyvxgYQWJmtFUnlmmG-AtCbEOM2loQXGGB2JEEUTyNQiHNQYlzLroB_CpnLxp3vs2i4D0tdged_lWsg" className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-sm font-medium text-on-surface">Yudi Setiawan</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Priority</label>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">menu</span>
                  <span className="text-sm font-medium text-on-surface">Medium</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Labels</label>
                <div className="flex flex-wrap gap-1.5">
                  {['android', 'ios', 'isv4', 'new-feature', 'next-version'].map(label => (
                    <span key={label} className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-bold text-[10px] rounded uppercase">{label}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/30 space-y-2">
              <div className="flex justify-between text-[11px] text-on-surface-variant font-medium">
                <span>Created 17 Dec 2024</span>
              </div>
              <div className="flex justify-between text-[11px] text-on-surface-variant font-medium">
                <span>Updated 7 Mar 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Development</h3>
            <div className="space-y-3 font-body">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#f1502f]">commit</span>
                  <span className="font-medium">0 commits</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">merge_type</span>
                  <span className="font-medium">0 pull requests</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default IssueDetailPage
