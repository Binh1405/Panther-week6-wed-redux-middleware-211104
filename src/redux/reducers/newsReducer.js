const initialState = {
    allNews: [],
    isLoading: false,
}

const newsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case "GET ALL NEWS REQUEST":
            return {...state, isLoading: true}
        case "GET ALL NEWS":
            return {...state, allNews: payload, isLoading: false}
        case "GET ALL NEWS FAILS":
            return {...state, isLoading: false}
        default:
            return state
    }
}

export default newsReducer

//1st render: state = {allNews:[]}