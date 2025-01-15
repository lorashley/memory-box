import { Box, Divider, List, ListItemText, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Milestone } from '../Milestone/types'
import { StyledListItem } from './styled'
import Tag from '../Tag'
import FavoriteHeart from '../FavoriteHeart'
import { useMilestonesContext } from './MilestonesProvider'

type Props = {
  searchTerm: string | null
  milestones: Milestone[]
}

const MilestonesList = ({ searchTerm, milestones }: Props) => {
  const { selectedMilestoneId, setSelectedMilestoneId } = useMilestonesContext()
  const searchedMilestones = searchTerm
    ? milestones.filter(
        (milestone) =>
          milestone.title.toLowerCase().includes(searchTerm) ||
          milestone.description.toLowerCase().includes(searchTerm),
      )
    : milestones

  const hasMilestones = milestones.length !== 0
  const isEmpty = searchedMilestones.length === 0

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {hasMilestones && isEmpty ? (
        <Typography variant='h6'>{`Oops! No Milestones found matching your search`}</Typography>
      ) : (
        <>
          {searchedMilestones.map((milestone, index) => (
            <Fragment key={index}>
              <StyledListItem
                alignItems='flex-start'
                onClick={() => setSelectedMilestoneId(milestone.id)}
                $isSelected={selectedMilestoneId === milestone.id}
              >
                <ListItemText
                  primary={
                    <>
                      {milestone.isFavorite && <FavoriteHeart isFavorite />}
                      <div>{milestone.title}</div>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{
                          color: 'text.secondary',
                          display: 'inline',
                        }}
                      >
                        {milestone.date}
                      </Typography>
                    </>
                  }
                  slotProps={{
                    primary: {
                      variant: 'h6',
                      justifyContent: 'space-between',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 3,
                      noWrap: true,
                      textOverflow: 'ellipsis',
                    },
                    secondary: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      textOverflow: 'ellipsis',
                    },
                  }}
                  secondary={
                    <>
                      {milestone.description}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {milestone.tags?.map((tag) => (
                          <Tag tag={tag} key={tag} />
                        ))}
                      </Box>
                    </>
                  }
                />
              </StyledListItem>
              <Divider variant='inset' component='li' />
            </Fragment>
          ))}
        </>
      )}
    </List>
  )
}

export default MilestonesList
