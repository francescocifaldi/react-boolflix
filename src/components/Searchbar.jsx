import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import { useState } from "react"

export default function Searchbar() {
    const [search, setSearch] = useState('')
    const { fetchFilm, fetchSeries } = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault()
        fetchFilm(search)
        fetchSeries(search)
        setSearch('')
    }

    function onChange(e) {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <form onSubmit={onSubmit} action="" className='form'>
            <input onChange={onChange} id='title' name='title' value={search} type="text" placeholder='Contenuto da cercare' />
        </form>
    )
}