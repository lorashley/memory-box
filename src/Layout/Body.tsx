import { Box } from '@mui/material'
import MilestonesList from '../components/Milestones'
import { MILESTONES } from '../components/Milestones/constants'

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
      <MilestonesList milestones={MILESTONES} searchTerm={searchTerm} />
    </Box>
  )
}
export default Body
