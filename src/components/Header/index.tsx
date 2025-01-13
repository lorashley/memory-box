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
    <Toolbar>
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
