import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import "./App.css";
import Youtube from "./Api/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

export class App extends Component {
  state = {
    vidoes: [],
    selectedVideo: null,
  };
  onSearchInput = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      vidoes: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoShow = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.onSearchInput("love");
  }
  render() {
    return (
      <div className="ui container">
        <Searchbar onSearch={this.onSearchInput} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column" style={{ marginTop: "5px" }}>
              <VideoList
                videos={this.state.vidoes}
                onVideo={this.onVideoShow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
