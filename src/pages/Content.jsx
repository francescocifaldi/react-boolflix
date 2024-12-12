import { useEffect, useState } from "react"
import { BASE_URI, MY_TOKEN } from "../config"
import axios from "axios"

export default function Content() {
    const [list, setList] = useState([])

    function fetchResult() {
        axios.get(`${BASE_URI}search/movie?api_key=${MY_TOKEN}&query=ritorno`)
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
            <div>sono il contenuto</div>
        </>
    )
}