const rootReducer = (state = {data:[]}, action) => {
    switch (action.type) {
        case 'GIPHY_FETCH_DATA_SUCCESS':
        return Object.assign({}, state, {
            data: action.data
          });
        default:
            return state;
    }
};


export default rootReducer;