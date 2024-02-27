import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decriment_Cart, Increment_Cart, removeTocart } from "./Redux/Slice";
import './Cartpage.css'
export default function CartPage() {
  const dispatch = useDispatch();
  const cardDatan = useSelector((state) => state?.cart?.data);
 
  const Handle_Remove = (id) => {
    dispatch(removeTocart(id));
  };

  const Handle_Increment=(id)=>{
    dispatch(Increment_Cart(id));
  }

  const Handle_decrement=(id)=>{
    dispatch(Decriment_Cart(id))
  }
  return (
    <div style={{display:"flex" ,flexWrap:"wrap"}}>
      {cardDatan?.map((item) => (
      
        <div className="card">
        <img src={item.image}  className="card-image" />
        <div className="card-content">
          <h2 className="card-name">{item.name}</h2>
          <p className="card-description">{item.description}</p>
          <p className="card-price">${item.price}</p>
          <div className="Button_container">
          <button className="card-button" onClick={() => Handle_Remove(item.id)}>Remove Cart</button>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8}}>


          
          <button onClick={()=>Handle_decrement(item.id)}>-</button>

          <p>{item.quantity}</p>
          <button onClick={()=>Handle_Increment(item.id)}>+</button>
          </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
