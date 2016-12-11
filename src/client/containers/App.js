import React, { Component } from 'react';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Page from 'components/Page';
import Sidebar from 'components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: props.currentPage || 'home' }
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation currentPage={this.state.currentPage} changePage={this.changePage} />
        <Sidebar changePage={this.changePage} />
        <Page title="New website" body="Lorem Ipsum" />
      </div>
    );
  }
}
