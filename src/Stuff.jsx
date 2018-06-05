import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';
import Clicked from './state/Clicked';
import ToggleText from './state/ToggleText';
import Counter from './state/Counter';
import StepCounter from './state/StepCounter';
import CatchMeIfYouCan from './state/CatchMeIfYouCan';
import RollCall from './state/RollCall';

const Stuff = ({ square }) => (
  <React.Fragment>
    <Header>Hello, world!</Header>
    <Clicked />
    <ToggleText initial="Hello" alternate="World" />
    <Counter initial={ 50 } max={ 100 } />
    <StepCounter max={ 100 } step={ 5 } />
    <br/><br/>
    <CatchMeIfYouCan jump={ 100 } />
    <RollCall names={ names } />
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
    { square ? <Square /> : null }
    <People names={ ["Jerry", "Bob", "Tony", "Selma"] }/>
    <Basket items={ items }/>
  </React.Fragment>
)

Stuff.defaultProps = {
  square: true
}

let names= ["Jerry", "Bob", "Tony", "Selma", "Tyrone", "Mr PING PONG"];

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

export default Stuff;

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.
