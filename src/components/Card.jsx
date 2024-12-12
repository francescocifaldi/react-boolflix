
import style from './Card.module.css'

export default function Card({ film }) {
    const { title, original_title, original_language, vote_average, name } = film
    //inserire conditional render per stampare titolo o nome in base al fatto che sia film o serie
    return (
        <div className='debug'>

            <p>{title}</p>
            <p>{name}</p>

            <p>{original_title}</p>
            <p>{original_language}</p>
            <p>{vote_average}</p>

        </div>
    )
}