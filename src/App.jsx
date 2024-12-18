import { useState, useEffect } from 'react'
import GlobalContext from './contexts/GlobalContext'
import { BASE_URI, MY_TOKEN } from './utils/config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Main from './pages/Main'
import axios from 'axios'


function App() {
  const [filmList, setFilmList] = useState([])
  const [seriesList, setSeriesList] = useState([])

  function fetchFilm(parm) {
    axios.get(`${BASE_URI}search/movie?api_key=${MY_TOKEN}&query=${parm}`)
      .then(res => {
        setFilmList(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function fetchSeries(parm) {
    axios.get(`${BASE_URI}search/tv?api_key=${MY_TOKEN}&query=${parm}`)
      .then(res => {
        const updatedData = res.data.results.map((item) => {
          // Rinomina `newKey` : `oldKey`
          return {
            title: item.name,
            original_title: item.original_name,
            ...item
          }
        })
        setSeriesList(updatedData)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  /* useEffect(() => {
    fetchResult()
  }, []) */

  return (
    <>
      <GlobalContext.Provider value={{ filmList, seriesList, fetchFilm, fetchSeries }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
