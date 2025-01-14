import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from './styled'

type Props = {
  setSearchTerm: (value: string) => void
  handleDrawerOpen: () => void
  isOpen: boolean
}

const Header = ({ setSearchTerm, handleDrawerOpen, isOpen }: Props) => {
  return (
    <Toolbar
      sx={{
        position: 'sticky', // Makes the header stick at the top
        top: 0, // Keeps it at the top of the container
        zIndex: 1, // Ensures it remains above scrolling content
        backgroundColor: 'background.default', // Prevents overlapping content from showing through
      }}
    >
      {!isOpen && (
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
    </Toolbar>
  )
}

export default Header
