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

/**
 * IssueService handles all Jira API interactions and data transformations.
 */
class IssueService {
  private readonly baseUrl = config.jira.baseUrl
  private readonly credentials = config.jira.credentials

  /**
   * Fetches full issue data from Jira REST API v3.
   */
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

  /**
   * Formats a Jira internal date string into a human-readable format.
   */
  formatDate(dateStr: string): string {
    if (!dateStr) return '-'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  /**
   * Extracts active and completed sprints from raw custom field data.
   */
  getSprintInfo(fields: any) {
    // customfield_10023 is the standard field for Sprint info in many Jira Software setups
    const sprints = fields.customfield_10023 || []
    return {
      active: sprints.find((s: any) => s.state === 'active'),
      completed: sprints.filter((s: any) => s.state === 'closed').reverse()
    }
  }

  /**
   * Extracts Story Points from common Jira custom field IDs.
   */
  getStoryPoints(fields: any) {
    // Common IDs: 10701, 10100
    return fields.customfield_10701 || fields.customfield_10100
  }
}

export const issueService = new IssueService()
