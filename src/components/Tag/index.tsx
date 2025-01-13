import { Chip } from '@mui/material'
import { Tag as TagType } from './types'
import { getTagChipColor } from './utils'

type Props = {
  tag: TagType
}

const Tag = ({ tag }: Props) => (
  <Chip label={tag} color={getTagChipColor(tag)} size='small' />
)

export default Tag
