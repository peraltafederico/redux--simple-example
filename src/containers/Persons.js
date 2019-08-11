import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsTypes from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonEvent} />
                {this.props.prs.map(person => (
                    <Person 
                        id={person.id}
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePersonEvent(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPersonEvent: () => dispatch({ type: actionsTypes.ADD_PERSON }),
        onDeletePersonEvent: (id) => dispatch({ type: actionsTypes.DELETE_PERSON, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
