import { Box } from '@mui/material'
import { useState, useCallback } from 'react'
import MilestonesList from '../components/Milestones'
import { Milestone } from '../components/Milestone/types'
import Header from '../components/Header'

type Props = {
  isOpen: boolean
  openDrawer: () => void
  milestones: Milestone[]
}
const MainColumn = ({ isOpen, openDrawer, milestones }: Props) => {
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
        width: '600px',
        height: '100vh',
        alignContent: 'flex-start',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        overflow: 'auto',
      }}
    >
      <Header
        setSearchTerm={setSearchTerm}
        handleDrawerOpen={openDrawer}
        isOpen={isOpen}
      />
      <MilestonesList milestones={milestones} searchTerm={searchTerm} />
    </Box>
  )
}

export default MainColumn
