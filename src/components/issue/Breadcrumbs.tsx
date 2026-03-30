import type { FC } from 'hono/jsx'

export const Breadcrumbs: FC<{ project: any, issueKey: string }> = ({ project, issueKey }) => (
  <nav className="flex flex-wrap items-center gap-2 text-on-surface-variant mb-4">
    <span className="text-[12px] font-medium tracking-tight hover:text-primary transition-colors cursor-pointer">Projects</span>
    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
    <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
      <img src={project.avatarUrls['16x16']} alt="Project" className="w-4 h-4 rounded-sm" />
      <span className="text-[12px] font-medium tracking-tight">{project.name}</span>
    </div>
    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
    <span className="text-[12px] font-medium tracking-tight text-on-surface font-bold">{issueKey}</span>
  </nav>
)
