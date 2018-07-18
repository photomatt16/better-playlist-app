import React, { Component } from "react";
import "./App.css";

let defaultStyle = {
  color: "#fff"
};
let fakeServerData = {
  user: {
    name: "Matt",
    playlists: [
      {
        name: "My Favorites",
        songs: [
          { name: "Happy", duration: 1234 },
          { name: "Sad", duration: 1234 },
          { name: "Mad", duration: 1234 }
        ]
      },
      {
        name: "Other",
        songs: [
          { name: "Banana", duration: 1234 },
          { name: "Burger", duration: 1234 },
          { name: "Shake", duration: 1234 }
        ]
      },
      {
        name: "Discover Weekly",
        songs: [
          { name: "Green", duration: 1234 },
          { name: "Blue", duration: 1234 },
          { name: "Parywinkle", duration: 1234 }
        ]
      },
      {
        name: "Oops",
        songs: [
          {name: "Tennis", duration: 1234},
          {name: "Chess", duration: 1234},
          {name: "Lazer tag", duration: 1234}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let totalDuration =
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{totalDuration} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, "font-size": "54px" }}>
              {this.state.serverData.user.name}'s Playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h1 style={defaultStyle}>Loding...</h1>
        )}
      </div>
    );
  }
}

export default App;
