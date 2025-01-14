import { useState, useCallback, useContext } from 'react'
import Milestone from '../Milestone'
import { MILESTONES } from './constants'
import MilestonesContext from './MilestonesContext'

export const useMilestonesContext = () => {
  const context = useContext(MilestonesContext)
  if (!context) {
    throw new Error(
      'useMilestonesContext must be used within a MilestonesProvider',
    )
  }
  return context
}

type ProviderProps = {
  children: React.ReactNode
}
const MilestonesProvider = ({ children }: ProviderProps) => {
  const [milestones, setMilestones] = useState<Milestone[]>(MILESTONES)

  const addMilestone = useCallback((milestone: Milestone) => {
    setMilestones((current) => [...current, milestone])
  }, [])

  const removeMilestone = useCallback((milestoneId: string) => {
    setMilestones((current) =>
      current.filter((milestone) => milestone.id !== milestoneId),
    )
  }, [])

  const setMilestone = useCallback(
    (milestoneId: string, updatedMilestone: Milestone) => {
      const newMilestones = milestones.map((milestone) =>
        milestone.id === milestoneId ? updatedMilestone : milestone,
      )
      setMilestones(newMilestones)
    },
    [milestones],
  )

  const toggleFavorite = useCallback(
    (milestoneId: string) => {
      const updatedMilestone = milestones.find(
        (milestone) => milestone.id === milestoneId,
      )
      if (updatedMilestone) {
        setMilestone(milestoneId, {
          ...updatedMilestone,
          isFavorite: !updatedMilestone.isFavorite,
        })
      }
    },
    [milestones, setMilestone],
  )

  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(
    null,
  )

  return (
    <MilestonesContext.Provider
      value={{
        milestones,
        addMilestone,
        removeMilestone,
        toggleFavorite,
        selectedMilestoneId,
        setSelectedMilestoneId,
      }}
    >
      {children}
    </MilestonesContext.Provider>
  )
}

export default MilestonesProvider
