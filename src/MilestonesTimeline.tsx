import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from '@mui/lab'
import { Typography } from '@mui/material'

enum Tag {
  first = 'FIRST',
}

export type Milestone = {
  title: string
  date: string
  description: string
  tags?: Tag[]
}

type Props = {
  milestones: Milestone[]
  searchTerm: string | null
}

const MilestonesTimeline = ({ milestones, searchTerm }: Props) => {
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
    <Timeline>
      {hasMilestones && isEmpty ? (
        <Typography variant='h6'>{`Oops! No Milestones found matching your search`}</Typography>
      ) : (
        <>
          {searchedMilestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'>{milestone.title}</Typography>
                <Typography variant='body2' color='textSecondary'>
                  {milestone.date}
                </Typography>
                <Typography variant='body1'>{milestone.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </>
      )}
    </Timeline>
  )
}

export default MilestonesTimeline
