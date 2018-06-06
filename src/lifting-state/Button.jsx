// Create the <Button> and <Buttons> components from the notes. Once you're done, update it so that it displays four <Button>s. Make sure only one of them can be turned on at once.

import React from "react";

const Button = ({ name, selected, onClick }) => (
    <button
        className={ "btn " + (selected ? "btn-danger" : "btn-primary") }
        onClick={ onClick }
    >
        { name }
    </button>
);

export default Button;
