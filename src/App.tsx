import './App.css'
import Button from './components/Button'
import SegmentedControl from './components/SegmentedControl'

function App() {

  return (
    <>
      <h1>Diamond Simulator</h1>
      <SegmentedControl toggleButtons={['GIA Import', 'Manual Entry']} onChange={() => console.log('clicked')}/>
      <div className="card">

      </div>
      <p className="read-the-docs">
        Hobby app created for the diamond shopping girlies
      </p>
    </>
  )
}

export default App
