import { useCallback, useState } from 'react'
import Header from './Header'
import MilestonesTimeline, { Milestone } from './MilestonesTimeline'
import AppDrawer from './AppDrawer'
import Box from '@mui/material/Box'
import useSwitch from './hooks/useSwitch'

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

function App() {
  const [searchTerm, _setSearchTerm] = useState<string | null>(null)
  const setSearchTerm = useCallback(
    (searchTerm: string) => {
      _setSearchTerm(searchTerm.toLowerCase())
    },
    [_setSearchTerm],
  )

  const [isOpen, openDrawer, closeDrawer] = useSwitch(true)

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        setSearchTerm={setSearchTerm}
        handleDrawerOpen={openDrawer}
        isOpen={isOpen}
      />
      <AppDrawer isOpen={isOpen} handleDrawerClose={closeDrawer} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          p: 8,
          alignContent: 'flex-start',
        }}
      >
        <MilestonesTimeline milestones={milestones} searchTerm={searchTerm} />
      </Box>
    </Box>
  )
}

export default App
