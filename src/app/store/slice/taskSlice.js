import axios from "@/library/axios";
import { createSlice } from "@reduxjs/toolkit";

const taskSlices = createSlice({
    name: "taskSlice",
    initialState: {
        source: [],
        detail: {
            source: null
        }

    },
    reducers: {
        setSource(state, { payload }) {
            state.source = payload
        },
    }
})


export const getTask = () => async (dispatch) => {
    await axios.get("/posts").then(({ data }) => {
        dispatch(setSource(data))
    }).catch(({ response }) => {
        console.log(response)
    })
}

export const { setSource } = taskSlices.actions
export default taskSlices.reducer