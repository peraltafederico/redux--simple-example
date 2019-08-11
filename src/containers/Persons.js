import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsTypes from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

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
        onAddPersonEvent: (name, age) => dispatch({ type: actionsTypes.ADD_PERSON, paramsPerson:{name: name, age:age} }),
        onDeletePersonEvent: (id) => dispatch({ type: actionsTypes.DELETE_PERSON, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
