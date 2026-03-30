import type { FC } from 'hono/jsx'

export const RootLayout: FC<{ title?: string; children?: any }> = (props) => {
  const pageTitle = props.title
  return (
    <html lang="en" className="light h-full">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="icon" href="https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/jira-tracker/static/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen font-body">{props.children}</body>
    </html>
  )
}
