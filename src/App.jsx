import { useState } from 'react'
import GlobalContext from './contexts/GlobalContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalContext.Provider>
        <div>
          ciao
        </div>
      </GlobalContext.Provider>
    </>
  )
}

export default App
