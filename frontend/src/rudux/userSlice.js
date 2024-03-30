import { createSlice } from "@reduxjs/toolkit";
import userFeedbackAction, { GetUserFeedbackAction } from "./userAction";

const userSlice = createSlice({
    name: "users",
    initialState: { users: [],  },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userFeedbackAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userFeedbackAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(userFeedbackAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(GetUserFeedbackAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetUserFeedbackAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(GetUserFeedbackAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

        




    }

})
export default userSlice.reducer
export const UsersData = state => state.allUsers