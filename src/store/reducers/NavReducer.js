const initalState={
    currentNav:'TV Series',
    searchEnable:false
}

function NavReducer(state=initalState,action) {
    switch (action.type) {
        case 'SEARCHABLE':
            return {
                ...state,
                searchEnable: !state.searchEnable
            }
            break

        case 'NAVIGATE':
            return {
                ...state,
                currentNav: action.data
            }
            break
        default:
            return state
    }
}

export default NavReducer;