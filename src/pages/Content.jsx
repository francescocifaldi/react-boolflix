import { useEffect, useState } from "react"
import { BASE_URI, MY_TOKEN } from "../config"
import axios from "axios"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"

export default function Content() {
    const { list } = useContext(GlobalContext)
    console.log('log nel content', list)

    return (
        <>
            <div>sono il contenuto</div>
            <ul>
                unordered list
                {
                    list.map((el) => {
                        <li key={el.id}>elemento: {el.title}</li>
                    })
                }
            </ul>
        </>
    )
}