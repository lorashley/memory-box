import { Milestone } from '../Milestone/types'
import { Tag } from '../Tag/types'

export const MILESTONES: Milestone[] = [
  {
    id: '1',
    title: 'First Smile',
    date: '2023-01-15',
    description: 'Smiled at dad for the first time!',
    tags: [Tag.FIRST, Tag.HAPPY],
  },
  {
    id: '2',
    title: 'First Word',
    date: '2023-06-10',
    description: 'Said "Mama" for the first time!',
    tags: [Tag.FIRST, Tag.LANGUAGE],
  },
  {
    id: '3',
    title: 'First Step',
    date: '2023-09-05',
    description: 'Walked across the living room.',
    tags: [Tag.FIRST, Tag.PHYSICAL],
  },
  {
    id: '4',
    title: 'Said Chicken Guggets',
    date: '2023-10-01',
    description: 'Said "Chicken Guggets" instead of "Chicken Nuggets"!',
    tags: [Tag.FUNNY, Tag.LANGUAGE],
    isFavorite: true,
  },
  {
    id: '5',
    title: 'First Day of School',
    date: '2030-09-01',
    description: 'First day of kindergarten!',
    tags: [Tag.FIRST, Tag.SCHOOL],
  },
  {
    id: '6',
    title: 'Lost two front teeth',
    date: '2035-03-20',
    description: 'Put them under the pillow and got $5 from the tooth fairy!',
    tags: [Tag.FUNNY, Tag.PHYSICAL],
  },
  {
    id: '7',
    title: 'Counted to 30',
    date: '2035-07-15',
    description: 'Counted to 30, and instead of saying 29, 20-10, said 30!',
    tags: [Tag.FUNNY, Tag.LANGUAGE],
  },
]
