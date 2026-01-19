import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"
export default function CardStar(props){

     let starIcon = props.isFavorite ? starFilled : starEmpty

    return(        
    <button 
        onClick={props.handleClick}
        aria-pressed={props.isFavorite}
        aria-label={props.isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="favorite-button">
        <img
            src={starIcon}
            alt={props.isFavorite ? starFilled : starEmpty}
            className="favorite"/>
    </button>)

}