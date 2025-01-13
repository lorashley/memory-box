import { Box } from '@mui/material'
import { useState, useCallback } from 'react'
import MilestonesList from '../components/Milestones'
import { Milestone } from '../components/Milestone/types'
import AppBar from './AppBar'

type Props = {
  isOpen: boolean
  openDrawer: () => void
  setSelectedMilestone: (milestone: Milestone) => void
  selectedMilestoneId: string | null
}
const MainColumn = ({
  isOpen,
  openDrawer,
  setSelectedMilestone,
  selectedMilestoneId,
}: Props) => {
  const [searchTerm, _setSearchTerm] = useState<string | null>(null)
  const setSearchTerm = useCallback(
    (searchTerm: string) => {
      _setSearchTerm(searchTerm.toLowerCase())
    },
    [_setSearchTerm],
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
      <AppBar
        setSearchTerm={setSearchTerm}
        handleDrawerOpen={openDrawer}
        isOpen={isOpen}
      />
      <MilestonesList
        searchTerm={searchTerm}
        selectedMilestoneId={selectedMilestoneId}
        setSelectedMilestone={setSelectedMilestone}
      />
    </Box>
  )
}

export default MainColumn
