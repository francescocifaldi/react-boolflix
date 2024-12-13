import flagsMap from "../utils/flagsMap"
import { IMG_BASE_URL } from "../utils/config"
const imgDimension = 'w342'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons/faStar"
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import style from './Card.module.css'
import { useState } from "react"

export default function Card({ content }) {
    const { title, original_title, original_language, vote_average, poster_path } = content
    const [hover, setHover] = useState(false);

    const starArr = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.ceil((vote_average) / 2)) {
            starArr.push(<FontAwesomeIcon key={i} icon={fullStar} />);
        } else {
            starArr.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
        }
    }

    const poster = <img src={`${IMG_BASE_URL}${imgDimension}${poster_path}`} alt="" className={style.cover} />
    const description = <div className={style.description}>
        <h2>{title}</h2>
        <p>Titolo originale:{original_title}</p>
        {flagsMap[original_language] ? <img src={flagsMap[original_language]} height={20} /> : <p>{original_language}</p>}
        <p>{starArr}</p>
    </div>

    return (
        <div className={`debug ${style.card}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover && description}
            {poster}
        </div >
    )
}