
import CardHeader from "./CardHeader"
import CardInfo from "./CardInfo"
import "../styles/Card.css"


export default function Card(props) {
    return (
        <section className="travel--card">
                <img src={props.imageUrl} />
                <div className="travel--info">
                        <CardHeader location={props.location}
                                    title={props.title}/>
                        <CardInfo description={props.description}
                                  endDate={props.endDate}
                                  startDate={props.startDate}/> 
                </div>
        </section>
    )
}