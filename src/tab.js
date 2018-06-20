import React from "react";

const TabStyles = {
  tStyle: {
    borderBottom: "3px solid #71A2DF",
    color: "white",
    display: "inline-block",
    padding: "8px",
    cursor: "pointer"
  },
  tCStyle: {
    color: "white"
  }
};

export class TabContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const elToReturn =
      this.props.contentId === this.props.whichTab ? (
        <div style={TabStyles.tCStyle}>
          <p>{this.props.children}</p>
        </div>
      ) : null;

    return elToReturn;
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.onTabClicked = this.onTabClicked.bind(this);
  }
  onTabClicked() {
    this.props.afterTabClicked(this.props.tabId);
  }
  render() {
    return (
      <span
        onClick={this.onTabClicked}
        style={{
          ...TabStyles.tStyle,
          background: "#222527"
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Tab;
