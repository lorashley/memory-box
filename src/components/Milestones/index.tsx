import { Divider, List, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Milestone } from './types'
import { StyledListItem } from './styled'

type Props = {
  milestones: Milestone[]
  searchTerm: string | null
  selectedMilestone: Milestone | null
  setSelectedMilestone: (milestone: Milestone) => void
}

const MilestonesList = ({
  milestones,
  searchTerm,
  selectedMilestone,
  setSelectedMilestone,
}: Props) => {
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
                onClick={() => setSelectedMilestone(milestone)}
                isSelected={selectedMilestone?.id === milestone.id}
              >
                <ListItemText
                  primary={
                    <React.Fragment>
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
                    </React.Fragment>
                  }
                  slotProps={{
                    primary: {
                      variant: 'h6',
                      justifyContent: 'space-between',
                      display: 'flex',
                      flexDirection: 'row',
                    },
                  }}
                  secondary={milestone.description}
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