import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
}
export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadpeople :(state ,actions)=>{
        state.info=actions.payload;

    },
    removepeople :(state )=>{
        state.info=null;
        
    }
    
  },
})


export const { loadpeople ,removemopeople} = peopleSlice.actions

export default peopleSlice.reducer