import React from "react";
import connect from "@vkontakte/vkui-connect";
import { Root, View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Main from "./panels/Main";

class App extends React.Component {
  state = {
    activePanel: "main",
    fetchedUser: null
  };

  componentDidMount() {
    connect.subscribe(e => {
      switch (e.detail.type) {
        case "VKWebAppGetUserInfoResult":
          this.setState({ fetchedUser: e.detail.data });
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send("VKWebAppGetUserInfo", {});
  }

  go = e => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };

  render() {
    const { activePanel, fetchedUser } = this.state;
    return (
      <Root activeView="main">
        <Main id="main" fetchedUser={fetchedUser} go={this.go} />
      </Root>
    );
  }
}

export default App;
