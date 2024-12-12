import { useEffect, useState } from "react"
import { BASE_URI, MY_TOKEN } from "../config"
import axios from "axios"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"
import Card from "../components/Card"

export default function Content() {
    const { list } = useContext(GlobalContext)
    console.log('log nel content', list)

    return (

        <div className="container debug">
            <ul>
                {
                    list.map((el) => (
                        <li key={el.id}>
                            {<Card film={el} />}
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}