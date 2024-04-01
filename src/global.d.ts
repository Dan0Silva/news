export {}

declare global {
  interface PostData {
    id: string
    owner_id: string
    parent_id: string | null
    slug: string
    title: string
    status: string
    source_url: string
    created_at: string // Assuming ISO 8601 date-time format
    updated_at: string // Assuming ISO 8601 date-time format
    published_at: string // Assuming ISO 8601 date-time format
    deleted_at: string | null
    tabcoins: number
    tabcoins_credit: number
    tabcoins_debit: number
    owner_username: string
    children_deep_count: number
  }
}
