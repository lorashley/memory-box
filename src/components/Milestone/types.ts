import { Tag } from '../Tag/types'

export type Milestone = {
  id: string
  title: string
  date: string
  description: string
  tags?: Tag[]
  isFavorite?: boolean
}
