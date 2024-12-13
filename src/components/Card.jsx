
import style from './Card.module.css'

export default function Card({ film }) {
    const { title, original_title, original_language, vote_average } = film

    return (
        <div className='debug'>

            <h2>{title}</h2>

            <p>Titolo originale:{original_title}</p>
            <p>Lingua originale:{original_language}</p>
            <p>Voto:{vote_average}</p>

        </div>
    )
}