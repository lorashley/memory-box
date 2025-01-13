import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import pink from '@mui/material/colors/pink'

type Props = {
  isFavorite?: boolean
}

const FavoriteHeart = ({ isFavorite }: Props) => {
  return isFavorite ? (
    <FavoriteIcon sx={{ color: pink[500] }} />
  ) : (
    <FavoriteBorderIcon sx={{ color: pink[500] }} />
  )
}

export default FavoriteHeart
