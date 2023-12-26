import { configureStore } from "@reduxjs/toolkit"
import { RocketSlice } from "../features/slice"

export const Store = configureStore({
    reducer: RocketSlice,
})