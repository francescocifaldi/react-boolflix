import { useState } from 'react'
import GlobalContext from './contexts/GlobalContext'
import { BASE_URI, MY_TOKEN } from './config'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalContext.Provider>
        <div>
          CIAO
        </div>
      </GlobalContext.Provider>
    </>
  )
}

export default App
