import Box from '@mui/material/Box'
import { type Milestone } from './types'
import Typography from '@mui/material/Typography'
import Tag from '../Tag'
import { TagsOuter } from './styled'
import FavoriteHeart from '../FavoriteHeart'

type Props = {
  milestone: Milestone | null
}

const Milestone = ({ milestone }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        pt: 8,
        alignContent: 'flex-start',
      }}
    >
      {milestone ? (
        <>
          <FavoriteHeart isFavorite={milestone.isFavorite} />
          <Typography variant='h6'>{milestone.title}</Typography>
          <Typography variant='body1'>{milestone.date}</Typography>
          <TagsOuter>
            {milestone.tags?.map((tag, index) => <Tag key={index} tag={tag} />)}
          </TagsOuter>
          <Typography variant='body1'>{milestone.description}</Typography>
        </>
      ) : (
        'Select a milestone to view details'
      )}
    </Box>
  )
}

export default Milestone
