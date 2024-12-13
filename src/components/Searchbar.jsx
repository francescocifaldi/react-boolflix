import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import { useState } from "react"

export default function Searchbar() {
    const [search, setSearch] = useState('')
    const { fetchResult } = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault()
        fetchResult(search)
        setSearch('')
    }

    function onChange(e) {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} action="" className='form'>
                <label htmlFor="search">Titolo</label>
                <input onChange={onChange} id='title' name='title' value={search} type="text" placeholder='Contenuto da cercare' />
                <input type="submit" value='VAI' />
            </form>
        </div>
    )
}