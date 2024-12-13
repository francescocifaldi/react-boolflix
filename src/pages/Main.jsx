import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"
import CardsContainer from "../components/CardsContainer"

export default function Main() {
    const { filmList, seriesList } = useContext(GlobalContext)

    return (

        <div className="container">

            {filmList.length > 0 ? <><h1>Elenco Film:</h1></> : ''}
            <CardsContainer list={filmList} />

            {seriesList.length > 0 ? <><h1>Elenco Serie:</h1></> : ''}
            <CardsContainer list={seriesList} />
        </div>

    )
}