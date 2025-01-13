import { Milestone, Tag } from './types'

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
  },
  {
    id: '5',
    title: 'First Day of School',
    date: '2030-09-01',
    description: 'First day of kindergarten!',
    tags: [Tag.FIRST, Tag.SCHOOL],
  },
]
