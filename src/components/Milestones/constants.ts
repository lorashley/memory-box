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
]
