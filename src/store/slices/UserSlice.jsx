import { createSlice } from '@reduxjs/toolkit'
const users = createSlice({
    name: "User",
    initialState: [],
    reducers : {

        addUser(state,action){},  
        removeUsers(state, action){} ,
        deleteUsers(state,action){}
    },

});

export {users};