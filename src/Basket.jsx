import React from "react";
import BasketItem from './BasketItem';

const Basket = ({ items }) => (
  <table className="table">
     <thead>
         <tr><th>Name</th><th>Price</th></tr>
     </thead>
     <tbody>
       {items.map((a, i) => (
         <BasketItem key={i} price= {a.price} name= {a.name}/>
       ))}
      </tbody>
 </table>
)

export default Basket;
