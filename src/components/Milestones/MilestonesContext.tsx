import { createContext } from 'react'
import Milestone from '../Milestone'

type MilestonesContextType = {
  milestones: Milestone[]
  addMilestone: (milestone: Milestone) => void
  removeMilestone: (milestoneId: string) => void
  toggleFavorite: (milestoneId: string) => void
  selectedMilestoneId: string | null
  setSelectedMilestoneId: (val: string) => void
}

const MilestonesContext = createContext<MilestonesContextType | undefined>(
  undefined,
)

export default MilestonesContext
