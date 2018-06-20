import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Tab from "./tab";
import { TabContent } from "./tab";
// primary black #1B1C1E
// second black #222527

// primary blue #71A2DF

const TabWrapperStyles = {
  tWStyle: {
    background: "#1B1C1E",
    padding: "8px",
    height: "400px"
  }
};

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.afterTabClicked = this.afterTabClicked.bind(this);
    this.state = { whichTab: 1 };
  }
  afterTabClicked(tabId) {
    console.log("clicked", tabId);
    this.setState({
      whichTab: tabId
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            background: "#222527"
          }}
        >
          <Tab tabId={1} afterTabClicked={this.afterTabClicked}>
            Tab one
          </Tab>
          <Tab tabId={2} afterTabClicked={this.afterTabClicked}>
            Tab Two
          </Tab>
          <Tab tabId={3} afterTabClicked={this.afterTabClicked}>
            Tab Three
          </Tab>
        </div>
        <div style={TabWrapperStyles.tWStyle}>
          <TabContent whichTab={this.state.whichTab} contentId={1}>
            Tab one
          </TabContent>
          <TabContent whichTab={this.state.whichTab} contentId={2}>
            Tab two
          </TabContent>
          <TabContent whichTab={this.state.whichTab} contentId={3}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </TabContent>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainApp />, document.getElementById("root"));
