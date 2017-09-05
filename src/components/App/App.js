import React from 'react';

import './App.css';
import logo from '../../logo.svg';
import PlacesContainer from '../../containers/PlacesContainer';
import Loader from '../../containers/LoaderContainer';
import Error from '../../components/ErrorModal/Error';
import Search from '../../components/Search/Search';

class App extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.places.places).length) return;
    this.props.addPlace('getMyLocation');
  }

  render() {
    return (
      <div className="app">
        <div className="app-header app-content">
          <div className="app-header-inner">
            <div className="app-logo-wrapper">
              <img src={logo} className="app-logo" alt="logo" />
            </div>
            <h2 className="app-title">React weather app</h2>
          </div>
        </div>

        <div className="app-content">
          <Search addPlace={this.props.addPlace} />
          <PlacesContainer />
          <Loader />
          <Error error={this.props.places.error} />
        </div>
      </div>
    );
  }
}


export default App;
