import { Box } from '@mui/material'
import { useMemo } from 'react'
import MilestoneDetails from '../components/Milestone'
import MainColumn from './MainColumn'
import { useMilestonesContext } from '../components/Milestones/MilestonesProvider'

type Props = {
  isOpen: boolean
  openDrawer: () => void
}

const Body = ({ isOpen, openDrawer }: Props) => {
  const { milestones, selectedMilestoneId } = useMilestonesContext()

  const selectedMilestone = useMemo(
    () => milestones.find((milestone) => milestone.id === selectedMilestoneId),
    [milestones, selectedMilestoneId],
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
          isOpen={isOpen}
          openDrawer={openDrawer}
          milestones={milestones}
        />

        <MilestoneDetails milestone={selectedMilestone ?? null} />
      </Box>
    </>
  )
}
export default Body
