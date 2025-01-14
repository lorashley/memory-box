import { styled, useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ListIcon from '@mui/icons-material/List'
import FlightIcon from '@mui/icons-material/Flight'
import MoodIcon from '@mui/icons-material/Mood'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import PoolIcon from '@mui/icons-material/Pool'
import SchoolIcon from '@mui/icons-material/School'
export const drawerWidth = 240

interface Props extends MuiAppBarProps {
  isOpen?: boolean
  handleDrawerClose: () => void
}

const MAIN_CATEGORIES = [
  { title: 'All Milestones', icon: <ListIcon /> },
  { title: 'Favorites', icon: <FavoriteIcon /> },
]

const SECONDARY_CATEGORIES = [
  { title: 'Firsts', icon: <WorkspacePremiumIcon /> },
  { title: 'Emotions', icon: <MoodIcon /> },
  { title: 'Language', icon: <RecordVoiceOverIcon /> },
  { title: 'Physical', icon: <PoolIcon /> },
  { title: 'School', icon: <SchoolIcon /> },
  { title: 'Travel', icon: <FlightIcon /> },
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

type ListGroupProps = {
  title: string
  icon: React.ReactNode
}
const ListGroup = ({ title, icon }: ListGroupProps) => (
  <ListItem key={title} disablePadding>
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  </ListItem>
)

const AppDrawer = ({ isOpen }: Props) => {
  const theme = useTheme()
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
      open={isOpen}
    >
      <DrawerHeader>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </DrawerHeader>
      <Divider />
      <List>
        {MAIN_CATEGORIES.map(({ title, icon }) => (
          <ListGroup title={title} icon={icon} key={title} />
        ))}
      </List>
      <Divider />
      <List>
        {SECONDARY_CATEGORIES.map(({ title, icon }) => (
          <ListGroup title={title} icon={icon} key={title} />
        ))}
      </List>
    </Drawer>
  )
}

export default AppDrawer
