import map_icon from "../assets/location.svg"
import "../styles/CardHeader.css"


export default function CardHeader(props) {
    return (
        <section className="travel--card--header">
                <div className="card--header--location">
                        <div className="card--header--location--icon">
                                <img src={map_icon} />
                                <p>{props.location}</p>
                        </div>
                        <a href="map.com">View on Google Maps</a>
                </div>
                
                <h2>{props.title}</h2>
                
        </section>
    )
}