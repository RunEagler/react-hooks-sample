

const events = (state = [],action ) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = {title:action.title,body:action.body}
            const id = state.length===0?1:state[state.length-1].id+1
            return [...state,{id,...event}];
        case 'DELETE_EVENT':
            return state.filter(s=>s.id !== action.id)
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}

export default events
