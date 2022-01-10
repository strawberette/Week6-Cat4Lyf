import './App.css';
import {useState, useEffect} from "react"

const CatItem = (props) => {
    return(
        <div className="catItem">
            <img className="thumbnail" src={props.image} />
            <div className= "description">
                <p><strong>Breed:</strong> {props.breed}</p>
                <p><strong>Temperament:</strong> {props.temperament}</p>
                <p><strong>Hypoallergenic:</strong> {props.hypoallergenic}</p>
                <p><strong>Child friendly:</strong> {props.childFriendly}</p>
                <p><strong>Dog friendly:</strong> {props.dogFriendly}</p>
                <p><strong>Price:</strong> {props.price}</p>
            </div>
            {/* see: https://stackoverflow.com/questions/67815231/warning-cannot-update-a-component-app-while-rendering-a-different-component */}
            <button onClick={() => props.function(props.breed, props.price)}>ADD TO CART</button>

        </div>
    )
}

export default CatItem;