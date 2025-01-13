import { useCallback, useState } from 'react'
import { MILESTONES } from '../constants'
import { Milestone } from '../types'

export type addMilestone = (milestone: Milestone) => void
export type removeMilestone = (milestoneId: string) => void
export type toggleFavorite = (milestoneId: string) => void

const useMilestones = (): {
  milestones: Milestone[]
  addMilestone: addMilestone
  removeMilestone: removeMilestone
  toggleFavorite: toggleFavorite
} => {
  const [milestones, setMilestones] = useState<Milestone[]>(MILESTONES)

  const addMilestone = useCallback(
    (milestone: Milestone) => {
      setMilestones((milestones) => [...milestones, milestone])
    },
    [setMilestones],
  )

  const removeMilestone = useCallback(
    (milestoneId: string) => {
      setMilestones((milestones) =>
        milestones.filter((milestone) => milestone.id !== milestoneId),
      )
    },
    [setMilestones],
  )

  const toggleFavorite = useCallback(
    (milestoneId: string) => {
      setMilestones((milestones) =>
        milestones.map((milestone) =>
          milestone.id === milestoneId
            ? { ...milestone, isFavorite: !milestone.isFavorite }
            : milestone,
        ),
      )
    },
    [setMilestones],
  )

  return {
    milestones,
    addMilestone,
    removeMilestone,
    toggleFavorite,
  }
}

export default useMilestones
