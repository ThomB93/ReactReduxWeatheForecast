import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  //console.log("action received", action);
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); //adds new array to old array, doesnt change old array
      return [action.payload.data, ...state]; //ES6 syntax, insert new array at front in state array
  }
  return state;
}
