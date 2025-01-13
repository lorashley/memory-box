import { Box } from '@mui/material'
import MilestonesList from '../components/Milestones'
import { useState } from 'react'
import { Milestone } from '../components/Milestones/types'

type Props = {
  searchTerm: string | null
}

const Body = ({ searchTerm }: Props) => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(
    null,
  )
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
      <MilestonesList
        searchTerm={searchTerm}
        selectedMilestone={selectedMilestone}
        setSelectedMilestone={setSelectedMilestone}
      />
    </Box>
  )
}
export default Body
