import Searchbar from "../components/Searchbar"
import { Outlet } from "react-router-dom"

export default function DefalutLayout() {
    return (
        <>
            <Searchbar />
            <Outlet />
        </>
    )
}