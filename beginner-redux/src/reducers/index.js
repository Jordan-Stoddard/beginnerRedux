import {combineReducers} from 'redux'

// Right here songsReducer is essentially a data array property on state.
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '3:05'},
        {title: 'Barbie Girl', duration: '2:55'},
        {title: 'All Star', duration: '3:25'},
    ]
}

// This is essentially a songSelected key on state and if the action that is passed into is the type that we want, 
// then the payload that comes from our action creator (which in this case would be a song from our songsReducer) gets placed into the selectedSong variable. )
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

// combineReducers lets us take our two different "state-like" functions and combine them so that we can import them all at once to our src index.js to pass into our createStore function.
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})