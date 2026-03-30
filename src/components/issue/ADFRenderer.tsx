import type { FC } from 'hono/jsx'

export const ADFRenderer: FC<{ content: any[] }> = ({ content }) => {
  if (!content) return null
  
  return (
    <>
      {content.map((block: any, i: number) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i}>
              {block.content?.map((span: any, j: number) => {
                if (span.type === 'text') return span.text
                if (span.type === 'mention') {
                  return (
                    <span key={j} className="text-primary font-medium">
                      {span.attrs.text}
                    </span>
                  )
                }
                if (span.type === 'inlineCard') {
                  return <span key={j} className="text-primary hover:underline">{span.attrs.url}</span>
                }
                return null
              })}
            </p>
          )
        }
        if (block.type === 'orderedList' || block.type === 'bulletList') {
          const Tag = block.type === 'orderedList' ? 'ol' : 'ul'
          return (
            <Tag key={i} className={`${block.type === 'orderedList' ? 'list-decimal' : 'list-disc'} pl-5 space-y-2`}>
              {block.content.map((item: any, j: number) => (
                <li key={j}><ADFRenderer content={item.content} /></li>
              ))}
            </Tag>
          )
        }
        return null
      })}
    </>
  )
}
