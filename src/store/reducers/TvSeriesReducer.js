const initalState={
    tvSeiesName:'Sherlock',
}

function TvSeriesName(state=initalState,action) {

    switch (action.type) {
        case 'ACTIVE_TVSERIES':
            return {
                ...state,
                tvSeiesName:action.data
            }
            break;
        default:
            return state
    }
}

export default TvSeriesName;