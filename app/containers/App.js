import React, { Component, PropTypes } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import style from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <MainSection />
      </div>
    );
  }
}
