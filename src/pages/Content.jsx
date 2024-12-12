import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"
import Card from "../components/Card"

export default function Content() {
    const { filmList, seriesList } = useContext(GlobalContext)

    return (

        <div className="container debug">
            <ul> Elenco Film:
                {
                    filmList.map((el) => (
                        <li key={el.id}>
                            {<Card film={el} />}
                        </li>
                    ))
                }
            </ul>
            <ul> Elenco Serie:
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