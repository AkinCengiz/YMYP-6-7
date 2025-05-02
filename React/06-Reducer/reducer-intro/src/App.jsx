import Counter from './components/Counter'
import CounterReducer from './components/CounterReducer'
import './App.css'
import Calculate from './components/Calculate'
import CalculateReducer from './components/CalculateReducer'




function App() {

  
  return (
    <>
      <br/><hr /><br />
      <Counter />
      <hr/>
      <CounterReducer />
      <Calculate />
      <CalculateReducer />
    </>
  )
}

export default App
