import '../styles/Header.css'

export default function Header({ filterFunc, resetFunc }) {
    return (
        <header className="header">
            <h1>Our Collection</h1>
            <p>
                Introducing our Coffee Collection, a selection of 
                unique coffees from different roast types and origins,
                expertly roasted in small batches and shipped fresh weekly.
            </p>

            <div className="header--filters">
                    <button id='all--product' onClick={resetFunc}>All Product</button>
                    <button id='available--product' onClick={filterFunc}>Available Now</button>
            </div>
        </header>
    )
}