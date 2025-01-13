import Box from '@mui/material/Box'
import { type Milestone } from './types'
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
          {milestone.isFavorite}
        </>
      ) : (
        'Select a milestone to view details'
      )}
    </Box>
  )
}

export default Milestone
