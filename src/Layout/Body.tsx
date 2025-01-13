import { Box } from '@mui/material'
import { useState } from 'react'
import { Milestone } from '../components/Milestone/types'
import MilestoneDetails from '../components/Milestone'
import MainColumn from './MainColumn'

type Props = {
  isOpen: boolean
  openDrawer: () => void
}

const Body = ({ isOpen, openDrawer }: Props) => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(
    null,
  )
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignContent: 'flex-start',
        }}
      >
        <MainColumn
          selectedMilestoneId={selectedMilestone?.id || null}
          setSelectedMilestone={setSelectedMilestone}
          isOpen={isOpen}
          openDrawer={openDrawer}
        />

        <MilestoneDetails milestone={selectedMilestone} />
      </Box>
    </>
  )
}
export default Body
