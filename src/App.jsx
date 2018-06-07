import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

// ------- MAIN IMPORTS --------
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
import FourOhFour from './FourOhFour';
import Max from './lifting-state/Max';
// import Appify from './appify/Parent';
// {/* { square ? <Square colour="hotpink"/> : null } */}
// {/* <Counter initial={ 50 } max={ 100 } /> */}

// ------------------ Main App --------------------

const App = () => (
  <Router>
    <React.Fragment>
      <Header>Hello, world!</Header>
      <Switch>
        <Route exact path="/" component={ Buttons } />

        <Route path="/squares/:colour" render={ ({ match }) => (
          <Squares colour={ match.params.colour }/>
        )}/>

        <Route path="/signup" render={ () => (
          <React.Fragment>
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
            <Length name="lengthchecker" label="Length Checker"/>
          </React.Fragment>
        )}/>

        <Route path="/wordplay" render={ () => (
          <React.Fragment>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando?</Paragraph>
            <br/>
            <List name="lister" />
            <br/>
            <br/>
            <RollCall names={ names } />
            <br/>
            <br/>
            <Clicked />
            <br/>
            <ToggleText initial="Hello" alternate="World" />
            <br/>
            <br/>
            <People names={ ["Jerry", "Bob", "Tony", "Selma"] }/>
          </React.Fragment>
        )}/>

        <Route path="/numbershit" render={ () => (
          <React.Fragment>
            <Adder name="adder" label="Adder"/>
            <Transform transform={ fn } />
            <br/>
            <TempConverter toFar= { fahrenheit } toCen= { centigrade }/>
            <br/>
            <Max count={ numbers } max={ 20 }/>
            <br/>
          </React.Fragment>
        )}/>

        <Route path="/steps/:max/:step" render={ ({ match }) => (
          <StepCounter max={ match.params.max } step={ match.params.step } />
        )}/>

        <Route path="/crapgames" render={ () => (
          <React.Fragment>
            <CatchMeIfYouCan jump={ 100 } />
            <br/><br/>
            <LameGame aim={ 100 }/>
          </React.Fragment>
        )}/>

        <Route path="/misc" render={ () => (
          <Basket items={ items } />
        )}/>

        <Route component={ FourOhFour }/>
      </Switch>
    </React.Fragment>
  </Router>
);


// -------- Prop info for the above components -------

App.defaultProps = {
  square: true
}

let fn = x => x * x;

let fahrenheit = celsius => (celsius - 32) * 5/9;
let centigrade = fahrenheit => (fahrenheit * 9/5) + 32;

let fields = ["First Name", "Last Name", "Email"]

let numbers = [1, 2, 3]

let names= ["Jerry", "Bob", "Tony", "Selma", "Tyrone", "Mr PING PONG"];

let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

export default App;
