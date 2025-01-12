import { useCallback, useState } from 'react';
import Header from './Header'
import MilestonesTimeline, { Milestone } from './MilestonesTimeline';


const milestones: Milestone [] = [
  { title: 'First Smile', date: '2023-01-15', description: 'Smiled at dad for the first time!' },
  { title: 'First Word', date: '2023-06-10', description: 'Said "Mama" for the first time!' },
  { title: 'First Step', date: '2023-09-05', description: 'Walked across the living room.' },
];

function App() {
  const [searchTerm, _setSearchTerm] = useState<string|null>(null)
  const setSearchTerm = useCallback((searchTerm: string) => {
    _setSearchTerm(searchTerm.toLowerCase())
  }, [_setSearchTerm])

  return (
    <>
      <Header setSearchTerm={setSearchTerm}/>
      <MilestonesTimeline milestones={milestones} searchTerm={searchTerm}/>
    </>
  )
}

export default App
