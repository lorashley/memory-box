import { useCallback, useState } from 'react'
import Header from './Header'
import MilestonesTimeline, { Milestone } from './MilestonesTimeline'
import AppDrawer from './AppDrawer'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

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

  const [isOpen, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        setSearchTerm={setSearchTerm}
        handleDrawerOpen={handleDrawerOpen}
        isOpen={isOpen}
      />
      <AppDrawer isOpen={isOpen} handleDrawerClose={handleDrawerClose} />
      <MilestonesTimeline milestones={milestones} searchTerm={searchTerm} />
    </Box>
  )
}

export default App
