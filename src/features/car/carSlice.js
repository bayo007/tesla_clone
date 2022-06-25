import { createSlice } from "@reduxjs/toolkit";


const initialState = {
cars: [ "Model S","Model 3","Model X", "Model Y" ]
}


const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars //car is the name of the reducer and cars is the state of the reducer
export default carSlice.reducer //the reducer is exported