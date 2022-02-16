import axios from "axios";

export const GetPokemonList = (page) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        });

        const perPage = 15;
        const offset = (page * perPage) - perPage;
        // on page 1, offset is 0; on page 2, offset is 15; on page 3, offset is 30 (3 * 15 - 15 = 30)

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        })
    }
};



export const GetPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL",
        })
    }
};