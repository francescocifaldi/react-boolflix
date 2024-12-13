
import Card from './Card'

export default function CardsContainer({ list }) {

    return (
        <ul className='row'>
            {
                list.map((el) => (
                    <li key={el.id} className='col-33'>
                        {<Card content={el} />}
                    </li>
                ))
            }
        </ul>
    )
}