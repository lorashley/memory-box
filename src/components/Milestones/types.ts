export type Milestone = {
  id: string
  title: string
  date: string
  description: string
  tags?: Tag[]
}

enum Tag {
  first = 'FIRST',
}
