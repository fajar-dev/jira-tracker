import type { FC } from 'hono/jsx'

export const AttachmentGrid: FC<{ attachments: any[], formatDate: (d: string) => string }> = ({ attachments, formatDate }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-bold tracking-tight">Attachments</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {attachments?.map((file: any) => {
        const isImage = file.mimeType.startsWith('image/')
        return (
          <div key={file.id} className="flex flex-col border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest group cursor-pointer hover:border-primary/50 transition-colors">
            <div 
              className={`h-32 bg-surface-container flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105 ${isImage ? '' : 'p-4'}`}
              style={isImage ? { backgroundImage: `url(${file.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}
            >
              {!isImage && <span className="material-symbols-outlined text-4xl text-on-surface-variant">description</span>}
            </div>
            <div className="p-3">
              <div className="text-[11px] font-bold text-on-surface truncate" title={file.filename}>{file.filename}</div>
              <div className="text-[10px] text-on-surface-variant flex justify-between items-center mt-1">
                <span>{formatDate(file.created)}</span>
                <span>{(file.size / 1024).toFixed(0)} KB</span>
              </div>
            </div>
          </div>
        )
      })}
      {(!attachments || attachments.length === 0) && (
        <p className="text-sm text-on-surface-variant italic">No attachments.</p>
      )}
    </div>
  </div>
)
