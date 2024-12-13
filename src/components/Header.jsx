import Searchbar from "./Searchbar";
import style from './Header.module.css'

export default function Header() {
    return (
        <div className="container">
            <header className={style.header}>
                <h1>Boolflix</h1>
                <Searchbar />
            </header>
        </div>
    )
}