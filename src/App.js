import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
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
          <FontIcon className="flaticon-black-1 float-left float-button" color={blue500}/>
          <FontIcon className="flaticon-add-round-button float-right float-button" color={greenA200}/>
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
