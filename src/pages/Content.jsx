import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"
import Card from "../components/Card"

export default function Content() {
    const { filmList, seriesList } = useContext(GlobalContext)

    return (

        <div className="container debug">

            <h1>Elenco Film:</h1>
            <ul>
                {
                    filmList.map((el) => (
                        <li key={el.id}>
                            {<Card film={el} />}
                        </li>
                    ))
                }
            </ul>

            <h1>Elenco Serie:</h1>
            <ul>
                {
                    seriesList.map((el) => (
                        <li key={el.id}>
                            {<Card film={el} />}
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}