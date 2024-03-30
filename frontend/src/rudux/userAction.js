import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userFeedbackAction = createAsyncThunk("Users/adds", async (addData, { getState, rejectWithValue }) => {
    try {

        const { data: { result } } = await axios.post("http://localhost:5000/feedback/userdata", addData)
        localStorage.setItem("login", JSON.stringify(result))
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})
export default userFeedbackAction;
export const GetUserFeedbackAction = createAsyncThunk("Users/get", async (addData, { getState, rejectWithValue }) => {
    try {

        const { data: { result } } = await axios.get("http://localhost:5000/feedback/userget", addData)
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})