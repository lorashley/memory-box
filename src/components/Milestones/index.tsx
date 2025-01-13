import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { Fragment } from 'react'
import { Milestone } from './types'

type Props = {
  milestones: Milestone[]
  searchTerm: string | null
}

const MilestonesList = ({ milestones, searchTerm }: Props) => {
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
              <ListItem alignItems='flex-start'>
                <ListItemText
                  primary={milestone.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {milestone.date}
                      </Typography>
                      {milestone.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </Fragment>
          ))}
        </>
      )}
    </List>
  )
}

export default MilestonesList
