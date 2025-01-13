import { Box } from '@mui/material'
import MilestonesTimeline, { Milestone } from '../MilestonesTimeline'

const milestones: Milestone[] = [
  {
    title: 'First Smile',
    date: '2023-01-15',
    description: 'Smiled at dad for the first time!',
  },
  {
    title: 'First Word',
    date: '2023-06-10',
    description: 'Said "Mama" for the first time!',
  },
  {
    title: 'First Step',
    date: '2023-09-05',
    description: 'Walked across the living room.',
  },
]

type Props = {
  searchTerm: string | null
}

const Body = ({ searchTerm }: Props) => {
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
      <MilestonesTimeline milestones={milestones} searchTerm={searchTerm} />
    </Box>
  )
}
export default Body
