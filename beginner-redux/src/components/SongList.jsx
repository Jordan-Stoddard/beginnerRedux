import React from "react";
import { connect } from "react-redux"; // HOC that comes from react-redux, which allows us to map the redux state to this components prop, and to pass in an object with actions inside, and then it calls a store.dispatch function on the actions passed in when called.
import { selectSong } from "../actions"; // The action we wrote in the actions/index.js

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
        
          <div className="right floated content">
                                    {//We're calling selectSong which has been passed into our props from the connect HOC at the bottom of the page and passing in the instance of the song object that we're clicking on.
                                    }
            <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// This is a function that passes the state coming from the redux store and adds it to the props of this component.
const mapStateToProps = state => {
  return { songs: state.songs };
};
            // connect is a HOC that takes invokes one function, in the first function you have two arguments: pass in mapStatetoProps function,
            // and an object with the actions you want to pass in, the second function invoked is used to connect this component to the Provider.
export default connect(mapStateToProps, {selectSong})(SongList);
