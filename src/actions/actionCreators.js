export const GIPHY_FETCH_DATA_SUCCESS = 'GIPHY_FETCH_DATA_SUCCESS';

export const giphyFetchDataSuccess = (data) => {
    return {
        type: GIPHY_FETCH_DATA_SUCCESS,
        data: data
    };
};

export const addGiphyData = (searchValue) =>
{
    return (dispatch) => {

        const url = 'http://api.giphy.com/v1/gifs/search?q=';
        const apiKey = '&api_key=3whiADS5q2I87ugJpVmZqjPraaI11u5a';
        let limitValue = 4
        const limit = '&limit='+ limitValue

        fetch(url + searchValue + apiKey + limit)
            .then(res => res.json())
            .then(
                (data) => {
                    dispatch(giphyFetchDataSuccess(data.data))
                })

    }
};