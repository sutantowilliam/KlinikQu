import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './datagrid.js'
import TabsExampleControlled from './tab.js'

const forms = {
	medRecord1: <div>
        		<div className="title">
					<br/>
					Lihat Medical Records
				</div>
				<div>
					<TableExampleSimple/>
					<FontIcon className="flaticon-black-1 float-left float-button" color={blue500}/>
					<FontIcon className="flaticon-add-round-button float-right float-button" color={greenA200}/>
            	</div>
            	</div>,
}

export default class MedicalTab extends Component {
	constructor(props) {
		super(props);
		this.state={
			model: forms['medRecord1'],
		}
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	handleChange(currentMode) {
		this.state.model = forms[currentMode];
	}

	render() {
		return (
			this.state.model
		);
	}
}