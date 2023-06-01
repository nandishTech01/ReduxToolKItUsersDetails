import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        
        addUser(state,action){},  
        removeUsers(state, action){} ,
        deleteUsers(state,action){}
    },

});

console.log(userSlice.actions); 

export default userSlice.reducer ;






//     reducers : {
//         addUser(state,action){},  
//         removeUsers(state, action){} ,
//         deleteUsers(state,action){}
//     },

// });

// export {userSlice};