import  React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    inputNameChangedHandler = (event) => (
        this.setState({name: event.target.value })
    )
    

    inputAgeChangedHandler = (event) => {
        this.setState({age: event.target.value })
    }

    render() {
        return(
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={(event) => this.inputNameChangedHandler(event)} />
                <input type="number" placeholder="Age" onChange={(event) => this.inputAgeChangedHandler(event)} />    
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div> 
        ); 
    }     
}

export default AddPerson;