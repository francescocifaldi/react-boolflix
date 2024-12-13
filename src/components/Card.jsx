import flagsMap from "../utils/flagsMap"
import { IMG_BASE_URL } from "../utils/config"
const imgDimension = 'w342'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons/faStar"
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import style from './Card.module.css'

export default function Card({ content }) {
    const { title, original_title, original_language, vote_average, poster_path } = content

    const starArr = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.ceil((vote_average) / 2)) {
            starArr.push(<FontAwesomeIcon key={i} icon={fullStar} />);
        } else {
            starArr.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
        }
    }


    return (
        <div className={`debug ${style.card}`}>
            <h2>{title}</h2>

            <p>Titolo originale:{original_title}</p>

            {flagsMap[original_language] ? <img src={flagsMap[original_language]} height={20} /> : <p>{original_language}</p>}

            <p>{starArr}</p>

            <img src={`${IMG_BASE_URL}${imgDimension}${poster_path}`} alt="" />

        </div>
    )
}