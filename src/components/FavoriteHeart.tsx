import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import pink from '@mui/material/colors/pink'
import useSwitch from '../hooks/useSwitch'

type Props = {
  isFavorite?: boolean
  onClick?: () => void
}

const FavoriteHeart = ({ isFavorite, onClick }: Props) => {
  const [isHovered, setIsHovered, unsetIsHovered] = useSwitch(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={setIsHovered}
      onMouseLeave={unsetIsHovered}
    >
      {isFavorite || isHovered ? (
        <FavoriteIcon sx={{ color: pink[500] }} onClick={onClick} />
      ) : (
        <FavoriteBorderIcon
          sx={{
            color: pink[500],
          }}
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default FavoriteHeart
