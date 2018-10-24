import React from "react"

const SnackItem = (props) => (
    <div>
        <h1 className="page-header">{props.name}</h1>
        <ul>
          
           <li>Price : {props.price}</li>
           <li><img src={"./assets/images/" + props.image}></img></li>
           <li>Quantity : {props.quantity}</li>
           <li><button>Add to Cart</button></li>
        </ul>
    </div>





);

export default SnackItem;