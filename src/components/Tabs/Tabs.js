import { PureComponent } from "react";

class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  //================== { PureComponent } ================= //
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabIndex = (idx) => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
