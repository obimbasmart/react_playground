import "../styles/Navbar.css"


import l_icon from "../assets/world.svg"

export default function Navbar() {
    return (
        <nav>
                <img src={l_icon} alt="world icon" />
                <p>my travel journal.</p>
        </nav>
    )
}