import { useCallback, useState } from 'react'
import Header from './Header'
import AppDrawer from './AppDrawer'
import Box from '@mui/material/Box'
import useSwitch from '../hooks/useSwitch'
import Body from './Body'

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
      <Body searchTerm={searchTerm} />
    </Box>
  )
}

export default App
