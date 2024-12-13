import { useState, useEffect } from 'react'
import GlobalContext from './contexts/GlobalContext'
import { BASE_URI, MY_TOKEN } from './config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Content from './pages/Content'
import axios from 'axios'


function App() {
  const [filmList, setFilmList] = useState([])
  const [seriesList, setSeriesList] = useState([])

  function fetchResult(parm) {
    axios.get(`${BASE_URI}search/movie?api_key=${MY_TOKEN}&query=${parm}`)
      .then(res => {
        setFilmList(res.data.results)
      })
    axios.get(`${BASE_URI}search/tv?api_key=${MY_TOKEN}&query=${parm}`)
      .then(res => {
        console.log(res.data.results[0])
        const updatedData = res.data.results.map((item) => {
          const { name, ...rest } = item; // Estrai `oldKey` e il resto delle chiavi
          return { title: name, ...rest }; // Rinomina `oldKey` in `newKey`
        });
        console.log(updatedData[0])
        setSeriesList(updatedData)
      })
  }

  /* useEffect(() => {
    fetchResult()
  }, []) */

  return (
    <>
      <GlobalContext.Provider value={{ filmList, seriesList, fetchResult }}>
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
