import { ListItem } from '@mui/material'
import styled from 'styled-components'

export const StyledListItem = styled(ListItem)<{ isSelected?: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#e1f5fe' : 'white')};
`
