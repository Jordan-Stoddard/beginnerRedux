// Action Creator

// Essentially an action creator is similar to this.setState, but we're able to select exactly what state is going into the Redux store's state.

export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
