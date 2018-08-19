import React, { Component, PropTypes, Fragment } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import style from './MainSection.css';

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <div className={style.wrapper}>
        <TradingViewWidget
          className={style.test}
          symbol="BINANCE:VETBTC"
          width={770}
          height={560}
          interval="30"
          timezone="Etc/UTC"
          style="1"
          theme={Themes.Light}
          hideideas={true}
          toolbar_bg='rgba(245, 245, 245, 0.59)'
          allow_symbol_change={true}
          studies={[ "MACD@tv-basicstudies" ]}
          locale="en"
        />
      </div>
    );
  }
}
