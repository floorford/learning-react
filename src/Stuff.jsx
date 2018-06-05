import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

const Stuff = ({ square }) => (
  <React.Fragment>
    <Header>Hello, world!</Header>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
    { square ? <Square /> : null }
    <People names={ ["Jerry", "Bob", "Tony", "Selma"] }/>
    <Basket items={ items }/>
  </React.Fragment>
)

Stuff.defaultProps = {
  square: true
}

export default Stuff;

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.
