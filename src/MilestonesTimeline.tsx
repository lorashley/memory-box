import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import { Typography } from '@mui/material';

type Props = {
  searchTerm: string | null
}
const MilestonesTimeline = ({searchTerm}: Props) => {
  const milestones = [
    { title: 'First Smile', date: '2023-01-15', description: 'Smiled at dad for the first time!' },
    { title: 'First Word', date: '2023-06-10', description: 'Said "Mama" for the first time!' },
    { title: 'First Step', date: '2023-09-05', description: 'Walked across the living room.' },
  ];

  const searchedMilestones = searchTerm ? milestones.filter((milestone) => 
    milestone.title.includes(searchTerm) || milestone.description.includes(searchTerm)
  ): milestones

  const hasMilestones = milestones.length !== 0
  const isEmpty = searchedMilestones.length === 0

  return (
    <Timeline>{ hasMilestones && isEmpty ? <Typography variant="h6">{`Oops! No Milestones found matching your search`}</Typography> :<>
      {searchedMilestones.map((milestone, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < milestones.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{milestone.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {milestone.date}
            </Typography>
            <Typography variant="body1">{milestone.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}</>}
    </Timeline>
  );
};

export default MilestonesTimeline;
