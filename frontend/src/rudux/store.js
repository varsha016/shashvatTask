import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'






const store = configureStore({
    reducer: {
        allUsers: userSlice,

    }
})
export default store