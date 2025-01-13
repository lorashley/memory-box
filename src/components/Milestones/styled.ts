import { ListItem } from '@mui/material'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const StyledListItem = styled(ListItem)<{ isSelected?: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#e1f5fe' : 'white')};
`

export const FavoriteFilled = styled(FavoriteIcon)`
  color: #f08faf;
`
