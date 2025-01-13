import AppDrawer from './AppDrawer'
import Box from '@mui/material/Box'
import useSwitch from '../hooks/useSwitch'
import Body from './Body'

function App() {
  const [isOpen, openDrawer, closeDrawer] = useSwitch(true)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppDrawer isOpen={isOpen} handleDrawerClose={closeDrawer} />
      <Body isOpen={isOpen} openDrawer={openDrawer} />
    </Box>
  )
}

export default App
