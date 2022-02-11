import React from 'react';

import './css/App.css';
import './css/media.css';
import {Nav, Category} from './components'



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    // const fetchedData = await fetchData();    
    // this.setState({ data: fetchedData });
  }

  // handleCountryChange = async (country) => {
  //   const fetchedData = await fetchData(country);

  //   this.setState({ data: fetchedData, country: country });
  // }

  render() {
    // const { data, country } = this.state;
    return (
      <div className="App">
        <Nav />
        <Category />

      </div>
    );
  }
}

export default App;
