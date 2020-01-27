import {GET_PLANETS} from './planetTypes';
import {FalconeServices} from '../services/falcone-service';
const initialState = {
    planets: []
}

const PlanetReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PLANETS:
            // state.planets = FalconeServices.getPlanets().slice();
            // console.log(state);
            return {
                ...state,
                planets: FalconeServices.getPlanets().slice()
            }
        default:
            return state
    }
}

export default PlanetReducer;