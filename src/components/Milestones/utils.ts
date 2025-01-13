import { Tag, TAG_GROUPS } from './types'

export const getTagChipColor = (tag: Tag) => {
  const group = TAG_GROUPS.find((group) => group.tags.includes(tag))
  switch (group?.category) {
    case 'EMOTION':
      return 'primary'
    case 'ACTIVITY':
      return 'secondary'
    case 'SUBJECT':
      return 'info'
    case 'OCCASION':
      return 'success'
    case 'FIRST':
      return 'warning'
    default:
      return 'default'
  }
}
