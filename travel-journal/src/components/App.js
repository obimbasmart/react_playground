import Navbar from "./Navbar"
import Card from "./Card"
import locationData from "../data"
import "../styles/App.css"

export default function App() {
    const cards = locationData.map(item =>
        <Card {...item} />)
    return (
        <main className="app--container">
            <Navbar />
            <section className="card--container">
                {cards}
            </section>

        </main>
    )
}