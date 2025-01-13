export type Milestone = {
  title: string
  date: string
  description: string
  tags?: Tag[]
}

enum Tag {
  first = 'FIRST',
}
