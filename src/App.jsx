import { useState, useEffect } from 'react'
import GlobalContext from './contexts/GlobalContext'
import { BASE_URI, MY_TOKEN } from './config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Content from './pages/Content'
import axios from 'axios'


function App() {
  const [list, setList] = useState([])

  function fetchResult(parm) {
    axios.get(`${BASE_URI}search/movie?api_key=${MY_TOKEN}&query=${parm}`)
      .then(res => {
        console.log(res.data.results)
        setList(res.data.results)
      })
  }

  useEffect(() => {
    fetchResult()
  }, [])

  return (
    <>
      <GlobalContext.Provider value={{ list, setList, fetchResult }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Content />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
