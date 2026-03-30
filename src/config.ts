export const config = {
  app: {
    port: process.env.PORT,
  },
  jira: {
    baseUrl: process.env.JIRA_BASE_URL || 'https://nusanet.atlassian.net/rest/api/3',
    email: process.env.JIRA_EMAIL,
    apiToken: process.env.JIRA_API_TOKEN,
    get credentials() {
      if (!this.email || !this.apiToken) {
        console.error('Missing JIRA_EMAIL or JIRA_API_TOKEN in .env')
        return ''
      }
      return btoa(`${this.email}:${this.apiToken}`)
    }
  }
}
