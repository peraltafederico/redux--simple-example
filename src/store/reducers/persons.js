import * as actionsTypes from '../actions';

const initalState = {
    persons: []
}

const reducer = (state = initalState, action) => {
    if( action.type ==  actionsTypes.ADD_PERSON) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
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