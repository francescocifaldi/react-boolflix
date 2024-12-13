
import Card from './Card'

export default function CardsContainer({ list }) {
    console.log(list)

    return (
        <ul className='debug'>
            {
                list.map((el) => (
                    <li key={el.id}>
                        {<Card content={el} />}
                    </li>
                ))
            }
        </ul>
    )
}