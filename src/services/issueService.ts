import { config } from '../config'

export interface IssueData {
  id: string
  key: string
  fields: {
    summary: string
    description: any
    status: { name: string }
    priority: { name: string; iconUrl: string }
    issuetype: { name: string; iconUrl: string }
    project: { name: string; avatarUrls: any }
    assignee: any
    reporter: any
    creator: any
    created: string
    updated: string
    labels: string[]
    attachment: any[]
    issuelinks: any[]
    comment: { total: number; comments: any[] }
    watches: { watchCount: number }
    [key: string]: any
  }
}

class IssueService {
  private readonly baseUrl = config.jira.baseUrl
  private readonly credentials = config.jira.credentials

  async getIssueById(id: string): Promise<IssueData> {
    const response = await fetch(`${this.baseUrl}/issue/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${this.credentials}`
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch issue: ${response.statusText}`)
    }

    return await response.json()
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  getSprintInfo(fields: any) {
    const sprints = fields.customfield_10023 || []
    return {
      active: sprints.find((s: any) => s.state === 'active'),
      completed: sprints.filter((s: any) => s.state === 'closed').reverse()
    }
  }

  getStoryPoints(fields: any) {
    return fields.customfield_10701 || fields.customfield_10100
  }
}

export const issueService = new IssueService()
