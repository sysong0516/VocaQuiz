import { configureStore } from "@reduxjs/toolkit";
import diff from "./diff"

export default configureStore({
  reducer: {
    diff: diff.reducer
  }
})