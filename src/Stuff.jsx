import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
// import Square from './Square';
import People from './People';
import Basket from './Basket';
import Clicked from './state/Clicked';
import ToggleText from './state/ToggleText';
// import Counter from './state/Counter';
import StepCounter from './state/StepCounter';
import CatchMeIfYouCan from './state/CatchMeIfYouCan';
import RollCall from './state/RollCall';
import LameGame from './state/UNFINLameGame';
import Length from './forms/Length';
import List from './forms/List';
import Adder from './forms/Adder';
import Transform from './forms/Transform';
import TempConverter from './forms/TempConverter';
import Buttons from './lifting-state/Buttons';
import Squares from './lifting-state/Squares';
import SignUp from './lifting-state/SignUp';
import Form from './lifting-state/Form';
// import Max from './lifting-state/Max';

const Stuff = ({ square }) => (
  <React.Fragment>
    <Header>Hello, world!</Header>
    <Buttons />
    <br/>
    <br/>
    <Squares />
    <br/>
    <SignUp minimumLength={ 12 }
      fields={[
        { label: "Insert Password", name: "insert-password", value: "" },
        { label: "Confirm Password", name: "confirm-password", value: "" }
      ]}
    />
    <br/>
    <Form
      fields={ fields }
    />
    {/* <Max count={ numbers }/> */}
    <Length name="lengthchecker" label="Length Checker"/>
    <List name="lister" />
    <br/>
    <Adder name="adder" label="Adder"/>
    <Transform transform={ fn } />
    <br/>
    <TempConverter toFar= { fahrenheit } toCen= { centigrade }/>
    <br/>
    <Clicked />
    <ToggleText initial="Hello" alternate="World" />
    {/* <Counter initial={ 50 } max={ 100 } /> */}
    <StepCounter max={ 100 } step={ 5 } />
    <br/><br/>
    <CatchMeIfYouCan jump={ 100 } />
    <RollCall names={ names } />
    <br/><br/>
    <LameGame aim={ 100 }/>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando?</Paragraph>
    {/* { square ? <Square colour="hotpink"/> : null } */}
    <People names={ ["Jerry", "Bob", "Tony", "Selma"] }/>
    <Basket items={ items }/>
  </React.Fragment>
)

Stuff.defaultProps = {
  square: true
}

let fn = x => x * x;

let fahrenheit = celsius => (celsius - 32) * 5/9;
let centigrade = fahrenheit => (fahrenheit * 9/5) + 32;

let fields = ["First Name", "Last Name", "Email"]

// let numbers = [1, 2, 3]

let names= ["Jerry", "Bob", "Tony", "Selma", "Tyrone", "Mr PING PONG"];

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

export default Stuff;

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.
