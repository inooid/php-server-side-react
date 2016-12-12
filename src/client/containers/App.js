import React, { Component } from 'react';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Page from 'components/Page';
import Sidebar from 'components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: props.initialPage || 'home' }
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const pageData = this.props.pages[this.state.currentPage];

    return (
      <div>
        <Header />
        <Navigation currentPage={this.state.currentPage} changePage={this.changePage} />
        <Sidebar changePage={this.changePage} />
        <Page title={pageData.title} body={pageData.body} />
      </div>
    );
  }
}
