import '../styles/Coffee.css'
import star from "../assets/Star_fill.svg"

export default function Coffee (props) {
    return (
        <div className="coffee">
                {props.vote_count > 95 && <div className='coffee--badge'>Popular</div>}
                <img className='coffee--img' src={props.imageUrl}></img>
                <div className='description'>
                    <p className="coffee--name">{props.name}</p>
                    <p className='coffee--price'>${props.price.toFixed(2)}</p>
                </div>

                <div className='coffee--stats--container'>
                    <div className='coffee--stats'><img src={star} ></img> <span className='rating'>{props.avg_rating}</span> <span className='vote'>({props.vote_count} votes)</span></div>
                    {!props.quantity && <p id="available">Sold out</p>}
                </div>
        </div>
    )
}