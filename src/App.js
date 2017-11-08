import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BottomNavigationExampleSimple from './components/bottomnavbar.js';
import AppBarExampleIconButton from './components/appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './components/datagrid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <div>
          <AppBarExampleIconButton/>
        </div>
        <div className="title">
          <br/>
          Lihat Medical Records
        </div>
        <div>
          <TableExampleSimple/>
        </div>
        <div className="fixed-bottom">
          <BottomNavigationExampleSimple className="fixed-bottom"/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
