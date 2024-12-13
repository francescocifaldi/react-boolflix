import flagsMap from "../utils/flagsMap"
import { IMG_BASE_URL } from "../utils/config"
const imgDimension = 'w185'

export default function Card({ content }) {
    const { title, original_title, original_language, vote_average, poster_path } = content

    return (
        <div className='debug'>

            <h2>{title}</h2>

            <p>Titolo originale:{original_title}</p>

            {flagsMap[original_language] ? <img src={flagsMap[original_language]} height={20} /> : <p>{original_language}</p>}

            <p>Voto:{vote_average}</p>

            <img src={`${IMG_BASE_URL}${imgDimension}${poster_path}`} alt="" />

        </div>
    )
}