
import style from './Card.module.css'

export default function Card({ film }) {
    const { title, original_title, original_language, vote_average } = film

    return (
        <div className='debug'>

            <p>{title}</p>

            <p>{original_title}</p>
            <p>{original_language}</p>
            <p>{vote_average}</p>

        </div>
    )
}