import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
// import { drawerWidth } from '../../Layout/AppDrawer'

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'isOpen',
//   })<AppBarProps>(({ theme }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     variants: [
//       {
//         props: ({ isOpen }) => isOpen,
//         style: {
//           width: `calc(100% - ${drawerWidth}px)`,
//           marginLeft: `${drawerWidth}px`,
//           transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//           }),
//         },
//       },
//     ],
//   }))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid ' + theme.palette.grey[300],
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //   },
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
