export const searchable=()=>{
    return {
        type:'SEARCHABLE'
    }
}

export const setNavigation=(path)=>{
    return {
        type:'NAVIGATE',
        data:path
    }
}

export const setActiveTvSeries=(name)=>{
    return {
        type:'ACTIVE_TVSERIES',
        data:name
    }
}