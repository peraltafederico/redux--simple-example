import * as actionsTypes from '../actions';

const initalState = {
    persons: []
}

const reducer = (state = initalState, action) => {
    if( action.type ==  actionsTypes.ADD_PERSON) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.paramsPerson.name,
            age: action.paramsPerson.age
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    if( action.type =  actionsTypes.DELETE_PERSON) {
        return {
            ...state, 
            persons: state.persons.filter((person, index) => person.id !== action.id)
        }
    }

    return state
}

export default reducer;