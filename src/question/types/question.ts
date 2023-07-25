export type Question = {
  id: number
  title: string
  content: string
  createdAt: string
  user: {
    id: number
    username: string
  }
}