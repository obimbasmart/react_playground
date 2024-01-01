
export default function Card(props) {
    return (
        <section className="travel--card--info">
               <h3 className="travel--date">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
        </section>
    )
}