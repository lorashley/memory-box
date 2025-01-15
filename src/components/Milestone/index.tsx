import Box from '@mui/material/Box'
import { type Milestone } from './types'
import Typography from '@mui/material/Typography'
import Tag from '../Tag'
import { TagsOuter } from './styled'
import FavoriteHeart from '../FavoriteHeart'
import { useCallback } from 'react'
import { useMilestonesContext } from '../Milestones/MilestonesProvider'
import { Delete } from '@mui/icons-material'

type Props = {
  milestone: Milestone | null
}

const Milestone = ({ milestone }: Props) => {
  const { toggleFavorite, removeMilestone } = useMilestonesContext()

  const onFavoriteClick = useCallback(() => {
    if (milestone) {
      toggleFavorite(milestone.id)
    }
  }, [milestone, toggleFavorite])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        pl: 4,
        pt: 6,
        alignContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {milestone ? (
        <>
          <FavoriteHeart
            isFavorite={milestone.isFavorite}
            onClick={onFavoriteClick}
          />
          <Typography variant='h6'>{milestone.title}</Typography>
          <Typography variant='body1'>{milestone.date}</Typography>
          <TagsOuter>
            {milestone.tags?.map((tag, index) => <Tag key={index} tag={tag} />)}
          </TagsOuter>
          <Typography variant='body1'>{milestone.description}</Typography>
          <Delete onClick={() => removeMilestone(milestone.id)} />
        </>
      ) : (
        'Select a milestone to view details'
      )}
    </Box>
  )
}

export default Milestone
