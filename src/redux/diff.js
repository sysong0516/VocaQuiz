import { configureStore, createSlice} from "@reduxjs/toolkit";

const diff = createSlice({
  name: 'diff',
  initialState: {
    count:0
  },
  reducers:{
    changeDiff(state, action){
      state.count=action.payload
    }
  }
})

export const { changeDiff } = diff.actions

export default diff