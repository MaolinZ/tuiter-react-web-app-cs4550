import {createSlice} from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "data:image/png;base64,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",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1)
        },

        toggleLike(state, action) {
            console.log("HERE")
            const tuit = state.find(tuit => tuit._id === action.payload);
            tuit.liked ? tuit.likes = tuit.likes - 1 : tuit.likes = tuit.likes + 1
            tuit.liked = !tuit.liked
        }
    }
});

export const {createTuit, deleteTuit, toggleLike} = tuitsSlice.actions
export default tuitsSlice.reducer;