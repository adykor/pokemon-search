const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0,

};

const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                error: ""
            };
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get Pokemon"
            };
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: "",
                count: action.payload.count
             };
        default:
            return state
    }
};

export default PokemonListReducer;